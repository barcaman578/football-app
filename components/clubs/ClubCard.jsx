import Link from "next/link";

export default function ClubCard({ club }) {
  return (
    <Link
      href={`/clubs/${club.slug}`}
      className="flex items-center gap-3 border-b px-4 py-3.5 transition hover:bg-[#111111]"
      style={{ borderColor: "#222222" }}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-xs font-black" style={{ background: "#1a1a1a", border: "1px solid #222222", color: "#00ff87" }}>
        {club.initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-white">{club.name}</p>
        <p className="text-xs" style={{ color: "#888888" }}>{club.fans.toLocaleString()} fans</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: "#888888" }}>Sentiment</p>
        <p className="text-sm font-black" style={{ color: "#00ff87" }}>{club.sentiment.positive}%</p>
      </div>
    </Link>
  );
}
