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
    <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto flex max-w-[430px] border-t" style={{ borderColor: "#222222", background: "#0a0a0a" }}>
      {tabs.map(({ href, label, icon: Icon }) => {
        const active = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className="flex flex-1 flex-col items-center gap-2 py-4 text-xs font-bold transition"
            style={{ color: active ? "#00ff87" : "#444444" }}
          >
            <Icon size={22} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
