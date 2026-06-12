import Link from "next/link";
import { getClubColors, clubBadgeStyle } from "@/lib/clubColors";

export default function ClubCard({ club }) {
  const colors = getClubColors(club.slug);

  return (
    <Link
      href={`/clubs/${club.slug}`}
      className="flex items-center gap-3 px-0 py-3.5 transition-opacity hover:opacity-70"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] text-xs font-bold overflow-hidden"
        style={clubBadgeStyle(colors)}
      >
        {club.initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold" style={{ color: "var(--text)" }}>{club.name}</p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{club.fans.toLocaleString()} fans</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--text-3)" }}>Sentiment</p>
        <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{club.sentiment.positive}%</p>
      </div>
    </Link>
  );
}
