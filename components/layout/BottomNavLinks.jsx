"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trophy, Target, Shield, Users, User } from "lucide-react";

const tabs = [
  { href: "/leaderboard", label: "Board", icon: Trophy },
  { href: "/predictions", label: "Predict", icon: Target },
  { href: "/clubs", label: "Clubs", icon: Shield },
  { href: "/social", label: "Social", icon: Users },
  { href: "/profile", label: "Profile", icon: User },
];

export default function BottomNavLinks() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-[430px] px-4 pb-6">
      <div
        className="flex rounded-[26px]"
        style={{
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          background: "var(--glass-bg)",
          border: "1px solid var(--glass-border)",
          boxShadow: "var(--glass-shadow)",
        }}
      >
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-1 flex-col items-center gap-1.5 py-3 text-xs font-bold transition-opacity hover:opacity-60"
              style={{ color: active ? "var(--text)" : "var(--text-3)" }}
            >
              <Icon size={21} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
