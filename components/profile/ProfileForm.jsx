"use client";

import { useActionState } from "react";
import { updateProfile } from "@/lib/actions/profile";

const initialState = { error: null, success: null };

export default function ProfileForm({ profile }) {
  const [state, formAction, pending] = useActionState(
    updateProfile,
    initialState
  );

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="username" className="text-sm font-medium text-zinc-300">
          Username
        </label>
        <input
          id="username"
          name="username"
          defaultValue={profile?.username ?? ""}
          required
          pattern="[a-z0-9_]{3,20}"
          className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <p className="text-xs text-zinc-500">
          3-20 characters: lowercase letters, numbers, underscores.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="displayName" className="text-sm font-medium text-zinc-300">
          Display Name
        </label>
        <input
          id="displayName"
          name="displayName"
          defaultValue={profile?.display_name ?? ""}
          className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="bio" className="text-sm font-medium text-zinc-300">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={3}
          defaultValue={profile?.bio ?? ""}
          className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="avatarUrl" className="text-sm font-medium text-zinc-300">
          Avatar URL
        </label>
        <input
          id="avatarUrl"
          name="avatarUrl"
          type="url"
          defaultValue={profile?.avatar_url ?? ""}
          placeholder="https://..."
          className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {state?.error && <p className="text-sm text-red-400">{state.error}</p>}
      {state?.success && (
        <p className="text-sm text-emerald-400">{state.success}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-md bg-emerald-500 px-4 py-2 font-bold text-black transition hover:bg-emerald-400 disabled:opacity-50"
      >
        {pending ? "Saving..." : "Save Profile"}
      </button>
    </form>
  );
}
