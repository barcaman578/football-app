"use client";

import { useActionState } from "react";
import Link from "next/link";
import { login } from "@/lib/actions/auth";

const initialState = { error: null };

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4 w-full max-w-sm">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-black uppercase tracking-widest" style={{ color: "#888888" }}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border px-3 py-2.5 text-sm text-white outline-none focus:border-[#00ff87]"
          style={{ background: "#111111", borderColor: "#333333" }}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-xs font-black uppercase tracking-widest" style={{ color: "#888888" }}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="border px-3 py-2.5 text-sm text-white outline-none focus:border-[#00ff87]"
          style={{ background: "#111111", borderColor: "#333333" }}
        />
      </div>

      {state?.error && <p className="text-sm" style={{ color: "#ff4444" }}>{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 py-3 text-sm font-black uppercase tracking-widest text-black transition hover:opacity-90 disabled:opacity-50"
        style={{ background: "#00ff87" }}
      >
        {pending ? "Logging in..." : "Log In"}
      </button>

      <p className="text-sm" style={{ color: "#888888" }}>
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-bold text-white hover:text-[#00ff87]">Sign up</Link>
      </p>
    </form>
  );
}
