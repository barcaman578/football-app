import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PredictionTierCard({ href, title, description, points }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-3 rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3 transition hover:border-emerald-500/50"
    >
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-xs text-zinc-500">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="shrink-0 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400">
          {points}
        </span>
        <ChevronRight size={18} className="text-zinc-500" />
      </div>
    </Link>
  );
}
