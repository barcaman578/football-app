import Link from "next/link";
import { Settings } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/lib/actions/auth";
import { getOwnProfile } from "@/lib/actions/profile";

export default async function Header() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getOwnProfile() : null;

  return (
    <header className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: "#222222", background: "#0a0a0a" }}>
      <Link href="/" className="flex items-center gap-1.5">
        <span className="text-xl font-black italic tracking-tight text-white">BALL</span>
        <span className="px-1.5 py-0.5 text-[11px] font-black italic tracking-widest text-black" style={{ background: "#00ff87" }}>
          KNOWLEDGE
        </span>
      </Link>

      <nav className="flex items-center gap-4">
        {user ? (
          <>
            <Link href="/profile" className="text-sm font-semibold text-white hover:text-[#00ff87]">
              {profile?.username ?? "Profile"}
            </Link>
            <Link href="/settings" aria-label="Settings" className="hover:text-[#00ff87]" style={{ color: "#888888" }}>
              <Settings size={18} />
            </Link>
            <form action={logout}>
              <button type="submit" className="border px-3 py-1.5 text-sm font-semibold text-white transition hover:border-[#00ff87] hover:text-[#00ff87]" style={{ borderColor: "#333333" }}>
                Log Out
              </button>
            </form>
          </>
        ) : (
          <>
            <Link href="/login" className="text-sm font-semibold text-white hover:text-[#00ff87]">
              Log In
            </Link>
            <Link href="/signup" className="px-3 py-1.5 text-sm font-black text-black transition hover:opacity-90" style={{ background: "#00ff87" }}>
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
