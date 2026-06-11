import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
        Ball<span className="text-emerald-400">knowledge</span>
      </h1>
      <p className="mt-4 max-w-md text-zinc-400">
        Predict matches, debate with fans, and prove who actually knows
        football on the global leaderboard.
      </p>

      {user ? (
        <p className="mt-8 text-lg">
          Welcome back, <span className="font-bold text-emerald-400">{user.email}</span>
        </p>
      ) : (
        <div className="mt-8 flex gap-4">
          <Link
            href="/signup"
            className="rounded-md bg-emerald-500 px-5 py-2.5 font-bold text-black transition hover:bg-emerald-400"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="rounded-md border border-zinc-700 px-5 py-2.5 font-bold text-white transition hover:bg-zinc-800"
          >
            Log In
          </Link>
        </div>
      )}
    </main>
  );
}
