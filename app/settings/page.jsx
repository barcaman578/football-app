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
    <main className="flex flex-1 flex-col gap-4 px-4 py-6">
      <h1 className="text-2xl font-extrabold tracking-tight">Settings</h1>

      <div className="rounded-md border border-emerald-500/40 bg-emerald-500/10 p-4">
        <p className="text-sm font-bold text-emerald-400">
          Ballknowledge Premium
        </p>
        <p className="mt-1 text-xs text-zinc-300">
          Unlock private &quot;worst takes&quot; stats, deeper club
          analytics, and exclusive perks.
        </p>
        <button
          type="button"
          className="mt-3 rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-bold text-black transition hover:bg-emerald-400"
        >
          Upgrade
        </button>
      </div>

      <div className="flex flex-col divide-y divide-zinc-800 rounded-md border border-zinc-800 bg-zinc-900">
        {items.map(({ icon: Icon, label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center justify-between px-4 py-3 transition hover:bg-zinc-800"
          >
            <span className="flex items-center gap-3 text-sm font-semibold text-white">
              <Icon size={18} className="text-zinc-400" /> {label}
            </span>
            <ChevronRight size={18} className="text-zinc-500" />
          </Link>
        ))}
      </div>

      <form action={logout}>
        <button
          type="submit"
          className="w-full rounded-md border border-zinc-700 px-4 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-zinc-800"
        >
          Log Out
        </button>
      </form>
    </main>
  );
}
