"use client";

import { useActionState } from "react";
import { updateProfile } from "@/lib/actions/profile";

const initialState = { error: null, success: null };

const inputClass = "border px-3 py-2.5 text-sm text-white outline-none focus:border-[#00ff87] w-full";
const inputStyle = { background: "#111111", borderColor: "#333333" };
const labelClass = "text-xs font-black uppercase tracking-widest";
const labelStyle = { color: "#888888" };

export default function ProfileForm({ profile }) {
  const [state, formAction, pending] = useActionState(updateProfile, initialState);

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="username" className={labelClass} style={labelStyle}>Username</label>
        <input id="username" name="username" defaultValue={profile?.username ?? ""} required pattern="[a-z0-9_]{3,20}" className={inputClass} style={inputStyle} />
        <p className="text-xs" style={{ color: "#444444" }}>3–20 chars: lowercase, numbers, underscores.</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="displayName" className={labelClass} style={labelStyle}>Display Name</label>
        <input id="displayName" name="displayName" defaultValue={profile?.display_name ?? ""} className={inputClass} style={inputStyle} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="bio" className={labelClass} style={labelStyle}>Bio</label>
        <textarea id="bio" name="bio" rows={3} defaultValue={profile?.bio ?? ""} className={inputClass} style={inputStyle} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="avatarUrl" className={labelClass} style={labelStyle}>Avatar URL</label>
        <input id="avatarUrl" name="avatarUrl" type="url" defaultValue={profile?.avatar_url ?? ""} placeholder="https://..." className={inputClass} style={inputStyle} />
      </div>

      {state?.error && <p className="text-sm" style={{ color: "#ff4444" }}>{state.error}</p>}
      {state?.success && <p className="text-sm font-semibold" style={{ color: "#00ff87" }}>{state.success}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 py-3 text-sm font-black uppercase tracking-widest text-black transition hover:opacity-90 disabled:opacity-50"
        style={{ background: "#00ff87" }}
      >
        {pending ? "Saving..." : "Save Profile"}
      </button>
    </form>
  );
}
