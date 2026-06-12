import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) redirect("/leaderboard");

  return (
    <main className="flex flex-1 flex-col justify-center px-6 py-16">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-3)" }}>
        The football knowledge game
      </p>
      <h1
        className="mb-4 font-extrabold leading-none"
        style={{ fontSize: "40px", letterSpacing: "-0.025em", color: "var(--text)" }}
      >
        Prove you<br />know football.
      </h1>
      <p className="mb-10 text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
        Predict matches, debate with fans, and climb the global leaderboard.
      </p>
      <div className="flex flex-col gap-3">
        <Link
          href="/signup"
          className="py-3 text-center text-sm font-bold transition-opacity hover:opacity-80"
          style={{ background: "var(--btn-bg)", color: "var(--btn-text)", borderRadius: "10px" }}
        >
          Get started
        </Link>
        <Link
          href="/login"
          className="py-3 text-center text-sm font-semibold transition-opacity hover:opacity-60"
          style={{
            border: "1px solid var(--border-strong)",
            color: "var(--text)",
            borderRadius: "10px",
          }}
        >
          Log in
        </Link>
      </div>
    </main>
  );
}
