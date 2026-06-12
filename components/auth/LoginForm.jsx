"use client";

import { useActionState } from "react";
import Link from "next/link";
import { login } from "@/lib/actions/auth";

const initialState = { error: null };

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4 w-full max-w-sm">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-zinc-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-medium text-zinc-300">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {state?.error && (
        <p className="text-sm text-red-400">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-md bg-emerald-500 px-4 py-2 font-bold text-black transition hover:bg-emerald-400 disabled:opacity-50"
      >
        {pending ? "Logging in..." : "Log In"}
      </button>

      <p className="text-sm text-zinc-400">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-emerald-400 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
