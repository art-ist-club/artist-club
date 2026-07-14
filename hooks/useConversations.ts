"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export type ConversationItem = {
  id: string;
  created_at: string;
  updated_at: string | null;
  artist_id: string | null;
  client_profile_id: string | null;
  job_request_id: string | null;
  title: string;
  subtitle: string;
  avatar_url: string | null;
  unread_count: number;
  last_message_at: string | null;
};

type ConversationRow = {
  id: string;
  created_at: string;
  updated_at: string | null;
  artist_id: string | null;
  client_profile_id: string | null;
  job_request_id: string | null;
};

type ProfileRow = {
  id: string;
  full_name: string | null;
  username: string | null;
  avatar_url: string | null;
};

type ArtistRow = {
  id: string;
  profile_id: string | null;
};

type MessageRow = {
  id: string;
  conversation_id: string;
  created_at: string;
};

export function useConversations(role: "artist" | "client") {
  const [items, setItems] = useState<ConversationItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();

    const channel = supabase
      .channel(`conversations-list-${role}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
        },
        () => {
          load();
        }
      )
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "conversations",
        },
        () => {
          load();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [role]);

  async function load() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setItems([]);
      setLoading(false);
      return;
    }

    let column = "client_profile_id";
    let value = user.id;

    if (role === "artist") {
      const { data: artistData, error: artistError } = await supabase
        .from("artists")
        .select("id")
        .eq("profile_id", user.id)
        .maybeSingle();

      if (artistError) {
        console.error("Conversations artist load error:", artistError);
      }

      if (!artistData?.id) {
        setItems([]);
        setLoading(false);
        return;
      }

      column = "artist_id";
      value = artistData.id;
    }

    const { data, error } = await supabase
      .from("conversations")
      .select("id, created_at, updated_at, artist_id, client_profile_id, job_request_id")
      .eq(column, value)
      .order("updated_at", { ascending: false, nullsFirst: false })
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Conversations load error:", error);
      setItems([]);
      setLoading(false);
      return;
    }

    const conversations = (data as ConversationRow[] | null) ?? [];
    const conversationIds = conversations.map((conversation) => conversation.id);

    if (conversationIds.length === 0) {
      setItems([]);
      setLoading(false);
      return;
    }

    let profileMap = new Map<string, ProfileRow>();

    if (role === "artist") {
      const clientProfileIds = Array.from(
        new Set(
          conversations
            .map((conversation) => conversation.client_profile_id)
            .filter((id): id is string => Boolean(id))
        )
      );

      if (clientProfileIds.length > 0) {
        const { data: profilesData, error: profilesError } = await supabase
          .from("profiles")
          .select("id, full_name, username, avatar_url")
          .in("id", clientProfileIds);

        if (profilesError) {
          console.error("Client profiles load error:", profilesError);
        }

        ((profilesData as ProfileRow[] | null) ?? []).forEach((profile) => {
          profileMap.set(profile.id, profile);
        });
      }
    } else {
      const artistIds = Array.from(
        new Set(
          conversations
            .map((conversation) => conversation.artist_id)
            .filter((id): id is string => Boolean(id))
        )
      );

      let artists: ArtistRow[] = [];

      if (artistIds.length > 0) {
        const { data: artistsData, error: artistsError } = await supabase
          .from("artists")
          .select("id, profile_id")
          .in("id", artistIds);

        if (artistsError) {
          console.error("Artists for client conversations load error:", artistsError);
        }

        artists = (artistsData as ArtistRow[] | null) ?? [];
      }

      const artistProfileIds = Array.from(
        new Set(
          artists
            .map((artist) => artist.profile_id)
            .filter((id): id is string => Boolean(id))
        )
      );

      const profileById = new Map<string, ProfileRow>();

      if (artistProfileIds.length > 0) {
        const { data: profilesData, error: profilesError } = await supabase
          .from("profiles")
          .select("id, full_name, username, avatar_url")
          .in("id", artistProfileIds);

        if (profilesError) {
          console.error("Artist profiles load error:", profilesError);
        }

        ((profilesData as ProfileRow[] | null) ?? []).forEach((profile) => {
          profileById.set(profile.id, profile);
        });
      }

      artists.forEach((artist) => {
        if (!artist.profile_id) return;

        const profile = profileById.get(artist.profile_id);

        if (profile) {
          profileMap.set(artist.id, profile);
        }
      });
    }

    const unreadSenderType = role === "artist" ? "client" : "artist";

    const { data: unreadData, error: unreadError } = await supabase
      .from("messages")
      .select("id, conversation_id, created_at")
      .in("conversation_id", conversationIds)
      .eq("sender_type", unreadSenderType)
      .or("is_read.eq.false,is_read.is.null");

    if (unreadError) {
      console.error("Conversation unread load error:", unreadError);
    }

    const unreadMessages = (unreadData as MessageRow[] | null) ?? [];

    const unreadByConversation = unreadMessages.reduce<Record<string, number>>(
      (acc, message) => {
        acc[message.conversation_id] = (acc[message.conversation_id] ?? 0) + 1;
        return acc;
      },
      {}
    );

    const { data: latestMessageData, error: latestMessageError } = await supabase
      .from("messages")
      .select("id, conversation_id, created_at")
      .in("conversation_id", conversationIds)
      .order("created_at", { ascending: false });

    if (latestMessageError) {
      console.error("Latest messages load error:", latestMessageError);
    }

    const latestMessages = (latestMessageData as MessageRow[] | null) ?? [];
    const latestByConversation = new Map<string, string>();

    latestMessages.forEach((message) => {
      if (!latestByConversation.has(message.conversation_id)) {
        latestByConversation.set(message.conversation_id, message.created_at);
      }
    });

    const mappedItems: ConversationItem[] = conversations.map((conversation) => {
      const profileKey =
        role === "artist" ? conversation.client_profile_id : conversation.artist_id;

      const otherProfile = profileKey ? profileMap.get(profileKey) : undefined;

      const title =
        otherProfile?.full_name ||
        (otherProfile?.username ? `@${otherProfile.username}` : "Conversation");

      const lastMessageAt =
        latestByConversation.get(conversation.id) ||
        conversation.updated_at ||
        conversation.created_at;

      return {
        ...conversation,
        title,
        subtitle: new Date(lastMessageAt).toLocaleString("tr-TR"),
        avatar_url: otherProfile?.avatar_url ?? null,
        unread_count: unreadByConversation[conversation.id] ?? 0,
        last_message_at: lastMessageAt,
      };
    });

    const sortedItems = mappedItems.sort((a, b) => {
      const aTime = a.last_message_at ? new Date(a.last_message_at).getTime() : 0;
      const bTime = b.last_message_at ? new Date(b.last_message_at).getTime() : 0;

      return bTime - aTime;
    });

    setItems(sortedItems);
    setLoading(false);
  }

  return {
    items,
    loading,
    reload: load,
  };
}
