import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) redirect("/leaderboard");

  return (
    <main className="flex flex-1 flex-col justify-center px-6 py-16">
      <p className="mb-2 text-xs font-black uppercase tracking-widest" style={{ color: "#888888" }}>The football knowledge game</p>
      <h1 className="mb-4 text-4xl font-black uppercase leading-none tracking-tight text-white">
        Prove you<br />know football.
      </h1>
      <p className="mb-10 text-sm leading-relaxed" style={{ color: "#888888" }}>
        Predict matches, debate with fans, and climb the global leaderboard.
      </p>
      <div className="flex flex-col gap-3">
        <Link
          href="/signup"
          className="px-5 py-3 text-center text-sm font-black uppercase tracking-widest text-black transition hover:opacity-90"
          style={{ background: "#00ff87" }}
        >
          Get Started
        </Link>
        <Link
          href="/login"
          className="border px-5 py-3 text-center text-sm font-black uppercase tracking-widest text-white transition hover:border-[#444444]"
          style={{ borderColor: "#333333" }}
        >
          Log In
        </Link>
      </div>
    </main>
  );
}
