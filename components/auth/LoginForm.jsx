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
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-2)" }}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border px-3 py-2.5 text-sm rounded-[8px]"
          style={{ background: "var(--input-bg)", borderColor: "var(--input-border)", color: "var(--input-text)" }}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-2)" }}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="border px-3 py-2.5 text-sm rounded-[8px]"
          style={{ background: "var(--input-bg)", borderColor: "var(--input-border)", color: "var(--input-text)" }}
        />
      </div>

      {state?.error && <p className="text-sm" style={{ color: "#dc2626" }}>{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 py-3 text-sm font-bold transition-opacity hover:opacity-80 disabled:opacity-50"
        style={{ background: "var(--btn-bg)", color: "var(--btn-text)", borderRadius: "10px" }}
      >
        {pending ? "Logging in..." : "Log in"}
      </button>

      <p className="text-sm" style={{ color: "var(--text-2)" }}>
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-bold hover:opacity-60" style={{ color: "var(--text)" }}>
          Sign up
        </Link>
      </p>
    </form>
  );
}
