import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export type ConversationMessage = {
  id: string;
  conversation_id: string;
  sender_profile_id: string | null;
  sender_type: "artist" | "client";
  message: string;
  is_read: boolean | null;
  created_at: string;
};

export function useConversation(conversationId: string) {
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadMessages() {
    if (!conversationId) return;

    setLoading(true);

    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Conversation messages load error:", error);
      setMessages([]);
      setLoading(false);
      return;
    }

    setMessages((data as ConversationMessage[]) ?? []);
    setLoading(false);
  }

  useEffect(() => {
    if (!conversationId) return;

    loadMessages();

    const channel = supabase
      .channel(`conversation-${conversationId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `conversation_id=eq.${conversationId}`,
        },
        () => {
          loadMessages();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId]);

  return {
    messages,
    loading,
    reload: loadMessages,
  };
}
