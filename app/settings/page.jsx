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
    <main className="flex flex-1 flex-col px-4 py-5">
      <h1 className="mb-5 text-2xl font-black uppercase tracking-tight text-white">
        <span style={{ color: "#00ff87", marginRight: "6px" }}>|</span>Settings
      </h1>

      {/* Premium banner */}
      <div className="mb-5 border-l-2 p-4" style={{ borderColor: "#00ff87", background: "#00ff8710" }}>
        <p className="text-sm font-black uppercase tracking-wide" style={{ color: "#00ff87" }}>Ballknowledge Premium</p>
        <p className="mt-1 text-xs leading-relaxed" style={{ color: "#888888" }}>
          Unlock private &quot;worst takes&quot; stats, deeper club analytics, and exclusive perks.
        </p>
        <button type="button" className="mt-3 px-4 py-2 text-xs font-black uppercase tracking-widest text-black transition hover:opacity-90" style={{ background: "#00ff87" }}>
          Upgrade
        </button>
      </div>

      {/* Menu items */}
      <div className="border-t mb-5" style={{ borderColor: "#222222" }}>
        {items.map(({ icon: Icon, label, href }) => (
          <Link key={label} href={href} className="flex items-center justify-between border-b py-3.5 transition hover:text-[#00ff87]" style={{ borderColor: "#222222" }}>
            <span className="flex items-center gap-3 text-sm font-semibold text-white">
              <Icon size={16} style={{ color: "#888888" }} />
              {label}
            </span>
            <ChevronRight size={16} style={{ color: "#444444" }} />
          </Link>
        ))}
      </div>

      {/* Log out */}
      <form action={logout}>
        <button type="submit" className="w-full border py-2.5 text-sm font-black uppercase tracking-widest transition hover:border-[#ff4444] hover:text-[#ff4444]" style={{ borderColor: "#333333", color: "#888888" }}>
          Log Out
        </button>
      </form>
    </main>
  );
}
