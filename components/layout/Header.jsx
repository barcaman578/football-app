import Link from "next/link";
import { Settings } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/lib/actions/auth";
import { getOwnProfile } from "@/lib/actions/profile";
import ThemeToggle from "./ThemeToggle";

export default async function Header() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getOwnProfile() : null;

  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between px-4 py-3"
      style={{
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        background: "var(--glass-bg)",
        borderBottom: "1px solid var(--glass-border)",
        boxShadow: "var(--glass-shadow)",
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1.5L20 7V15L11 20.5L2 15V7L11 1.5Z"
            stroke="var(--text)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="11" cy="11" r="2.5" fill="var(--text)" />
          <line x1="11" y1="8.5" x2="11" y2="1.5" stroke="var(--text)" strokeWidth="1" opacity="0.35" />
          <line x1="11" y1="13.5" x2="11" y2="20.5" stroke="var(--text)" strokeWidth="1" opacity="0.35" />
          <line x1="8.83" y1="9.75" x2="2" y2="7" stroke="var(--text)" strokeWidth="1" opacity="0.35" />
          <line x1="13.17" y1="9.75" x2="20" y2="7" stroke="var(--text)" strokeWidth="1" opacity="0.35" />
          <line x1="8.83" y1="12.25" x2="2" y2="15" stroke="var(--text)" strokeWidth="1" opacity="0.35" />
          <line x1="13.17" y1="12.25" x2="20" y2="15" stroke="var(--text)" strokeWidth="1" opacity="0.35" />
        </svg>
        <span style={{ fontSize: "17px", letterSpacing: "-0.02em", color: "var(--text)", fontWeight: 800 }}>
          Ball<span style={{ fontWeight: 300 }}>knowledge</span>
        </span>
      </Link>

      {/* Nav */}
      <nav className="flex items-center gap-4">
        <ThemeToggle />
        {user ? (
          <>
            <Link
              href="/profile"
              className="text-sm font-semibold transition-opacity hover:opacity-60"
              style={{ color: "var(--text)" }}
            >
              {profile?.username ?? "Profile"}
            </Link>
            <Link
              href="/settings"
              aria-label="Settings"
              className="transition-opacity hover:opacity-60"
              style={{ color: "var(--text-2)" }}
            >
              <Settings size={18} />
            </Link>
            <form action={logout}>
              <button
                type="submit"
                className="text-sm font-semibold transition-opacity hover:opacity-60"
                style={{
                  border: "1px solid var(--border-strong)",
                  color: "var(--text)",
                  background: "transparent",
                  borderRadius: "8px",
                  padding: "6px 12px",
                }}
              >
                Log out
              </button>
            </form>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="text-sm font-semibold transition-opacity hover:opacity-60"
              style={{ color: "var(--text)" }}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold transition-opacity hover:opacity-80"
              style={{
                background: "var(--btn-bg)",
                color: "var(--btn-text)",
                borderRadius: "8px",
                padding: "6px 14px",
              }}
            >
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
