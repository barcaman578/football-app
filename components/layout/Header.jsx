import Link from "next/link";
import { Settings } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/lib/actions/auth";
import { getOwnProfile } from "@/lib/actions/profile";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const profile = user ? await getOwnProfile() : null;

  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-black px-6 py-4">
      <Link href="/" className="text-xl font-extrabold tracking-tight text-white">
        Ball<span className="text-emerald-400">knowledge</span>
      </Link>

      <nav className="flex items-center gap-4">
        {user ? (
          <>
            <Link
              href="/profile"
              className="text-sm font-semibold text-white hover:text-emerald-400"
            >
              {profile?.username ?? "Profile"}
            </Link>
            <Link
              href="/settings"
              aria-label="Settings"
              className="text-zinc-400 hover:text-emerald-400"
            >
              <Settings size={18} />
            </Link>
            <form action={logout}>
              <button
                type="submit"
                className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Log Out
              </button>
            </form>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="text-sm font-semibold text-white hover:text-emerald-400"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-bold text-black transition hover:bg-emerald-400"
            >
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
