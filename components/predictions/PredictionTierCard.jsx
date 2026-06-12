import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PredictionTierCard({ href, title, description, points }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-3 px-4 py-4 transition-opacity hover:opacity-70"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
      }}
    >
      <div className="min-w-0">
        <p className="font-semibold" style={{ color: "var(--text)" }}>{title}</p>
        <p className="mt-0.5 text-xs" style={{ color: "var(--text-2)" }}>{description}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-xs font-bold" style={{ color: "var(--text-2)" }}>{points}</span>
        <ChevronRight size={16} style={{ color: "var(--text-4)" }} />
      </div>
    </Link>
  );
}
