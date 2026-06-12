import Link from "next/link";
import { Bell, Lock, User as UserIcon, ChevronRight } from "lucide-react";
import { logout } from "@/lib/actions/auth";

const items = [
  { icon: UserIcon, label: "Account", href: "/profile" },
  { icon: Bell, label: "Notifications", href: "#" },
  { icon: Lock, label: "Privacy", href: "#" },
];

export default function SettingsPage() {
  return (
    <main className="flex flex-1 flex-col px-4 pb-6" style={{ paddingTop: "48px" }}>
      <h1
        className="mb-6 font-extrabold"
        style={{ fontSize: "38px", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--text)" }}
      >
        Settings
      </h1>

      {/* Premium banner */}
      <div
        className="mb-5 p-4"
        style={{
          borderLeft: "2px solid var(--border-strong)",
          background: "var(--surface)",
          borderRadius: "12px",
        }}
      >
        <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--text)" }}>
          Ballknowledge Premium
        </p>
        <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
          Unlock private &quot;worst takes&quot; stats, deeper club analytics, and exclusive perks.
        </p>
        <button
          type="button"
          className="mt-3 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
          style={{ background: "var(--btn-bg)", color: "var(--btn-text)", borderRadius: "8px" }}
        >
          Upgrade
        </button>
      </div>

      {/* Menu items */}
      <div className="mb-5" style={{ borderTop: "1px solid var(--border)" }}>
        {items.map(({ icon: Icon, label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center justify-between py-3.5 transition-opacity hover:opacity-60"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span className="flex items-center gap-3 text-sm font-semibold" style={{ color: "var(--text)" }}>
              <Icon size={16} style={{ color: "var(--text-3)" }} />
              {label}
            </span>
            <ChevronRight size={16} style={{ color: "var(--text-4)" }} />
          </Link>
        ))}
      </div>

      {/* Log out */}
      <form action={logout}>
        <button
          type="submit"
          className="w-full py-2.5 text-sm font-semibold transition-opacity hover:opacity-60"
          style={{
            border: "1px solid var(--border-strong)",
            color: "var(--text-2)",
            background: "transparent",
            borderRadius: "10px",
          }}
        >
          Log out
        </button>
      </form>
    </main>
  );
}
