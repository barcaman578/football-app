import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PredictionTierCard({ href, title, description, points }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-3 border px-4 py-4 transition hover:border-[#333333]"
      style={{ borderColor: "#222222", background: "#111111" }}
    >
      <div className="min-w-0">
        <p className="font-bold text-white">{title}</p>
        <p className="mt-0.5 text-xs" style={{ color: "#888888" }}>{description}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-xs font-black" style={{ color: "#00ff87" }}>{points}</span>
        <ChevronRight size={16} style={{ color: "#444444" }} />
      </div>
    </Link>
  );
}
