"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function useFavorites() {
  const router = useRouter();

  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setFavoriteIds([]);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("favorites")
      .select("artist_id")
      .eq("client_id", user.id);

    if (error) {
      console.error("Favorites Load Error:", error);
      setLoading(false);
      return;
    }

    setFavoriteIds((data ?? []).map((item: any) => item.artist_id));
    setLoading(false);
  }

  async function toggleFavorite(artistId: string) {
    if (updatingId === artistId) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login?redirect=/discover");
      return;
    }

    setUpdatingId(artistId);

    const exists = favoriteIds.includes(artistId);

    if (exists) {
      setFavoriteIds((current) => current.filter((id) => id !== artistId));

      const { error } = await supabase
        .from("favorites")
        .delete()
        .eq("client_id", user.id)
        .eq("artist_id", artistId);

      if (error) {
        console.error("Favorite Delete Error:", error);
        setFavoriteIds((current) => {
          if (current.includes(artistId)) return current;
          return [...current, artistId];
        });
      }

      setUpdatingId(null);
      return;
    }

    setFavoriteIds((current) => {
      if (current.includes(artistId)) return current;
      return [...current, artistId];
    });

    const { error } = await supabase.from("favorites").insert({
      client_id: user.id,
      artist_id: artistId,
    });

    if (error) {
      console.error("Favorite Insert Error:", error);
      setFavoriteIds((current) => current.filter((id) => id !== artistId));
    }

    setUpdatingId(null);
  }

  return {
    loading,
    favoriteIds,
    updatingId,
    toggleFavorite,
    reloadFavorites: loadFavorites,
  };
}
