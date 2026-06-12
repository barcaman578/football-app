"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function getOwnProfile() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return data;
}

export async function getProfileByUsername(username) {
  const supabase = await createClient();

  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", username)
    .single();

  return data;
}

export async function updateProfile(prevState, formData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be logged in." };
  }

  const username = formData.get("username")?.trim();
  const displayName = formData.get("displayName")?.trim();
  const bio = formData.get("bio")?.trim();
  const avatarUrl = formData.get("avatarUrl")?.trim();

  if (!username || !/^[a-z0-9_]{3,20}$/.test(username)) {
    return {
      error:
        "Username must be 3-20 characters: lowercase letters, numbers, and underscores only.",
    };
  }

  const { error } = await supabase
    .from("profiles")
    .update({
      username,
      display_name: displayName || null,
      bio: bio || null,
      avatar_url: avatarUrl || null,
    })
    .eq("id", user.id);

  if (error) {
    if (error.code === "23505") {
      return { error: "That username is already taken." };
    }
    return { error: error.message };
  }

  revalidatePath("/profile");
  revalidatePath(`/profile/${username}`);

  return { success: "Profile updated.", username };
}
