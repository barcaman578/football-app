"use client";

import { useActionState } from "react";
import { updateProfile } from "@/lib/actions/profile";

const initialState = { error: null, success: null };

export default function ProfileForm({ profile }) {
  const [state, formAction, pending] = useActionState(updateProfile, initialState);

  const labelStyle = { color: "var(--text-2)" };
  const inputStyle = {
    background: "var(--input-bg)",
    borderColor: "var(--input-border)",
    color: "var(--input-text)",
    borderRadius: "8px",
  };

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="username" className="text-xs font-semibold uppercase tracking-widest" style={labelStyle}>
          Username
        </label>
        <input
          id="username" name="username" defaultValue={profile?.username ?? ""}
          required pattern="[a-z0-9_]{3,20}"
          className="border px-3 py-2.5 text-sm"
          style={inputStyle}
        />
        <p className="text-xs" style={{ color: "var(--text-4)" }}>3–20 chars: lowercase, numbers, underscores.</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="displayName" className="text-xs font-semibold uppercase tracking-widest" style={labelStyle}>
          Display name
        </label>
        <input id="displayName" name="displayName" defaultValue={profile?.display_name ?? ""} className="border px-3 py-2.5 text-sm" style={inputStyle} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="bio" className="text-xs font-semibold uppercase tracking-widest" style={labelStyle}>
          Bio
        </label>
        <textarea id="bio" name="bio" rows={3} defaultValue={profile?.bio ?? ""} className="border px-3 py-2.5 text-sm" style={inputStyle} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="avatarUrl" className="text-xs font-semibold uppercase tracking-widest" style={labelStyle}>
          Avatar URL
        </label>
        <input id="avatarUrl" name="avatarUrl" type="url" defaultValue={profile?.avatar_url ?? ""} placeholder="https://..." className="border px-3 py-2.5 text-sm" style={inputStyle} />
      </div>

      {state?.error && <p className="text-sm" style={{ color: "#dc2626" }}>{state.error}</p>}
      {state?.success && <p className="text-sm font-semibold" style={{ color: "#16a34a" }}>{state.success}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 py-3 text-sm font-bold transition-opacity hover:opacity-80 disabled:opacity-50"
        style={{ background: "var(--btn-bg)", color: "var(--btn-text)", borderRadius: "10px" }}
      >
        {pending ? "Saving..." : "Save profile"}
      </button>
    </form>
  );
}
