import Link from "next/link";

export default function ClubCard({ club }) {
  return (
    <Link
      href={`/clubs/${club.slug}`}
      className="flex items-center gap-3 rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3 transition hover:border-emerald-500/50"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold text-emerald-400">
        {club.initials}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-white">{club.name}</p>
        <p className="text-xs text-zinc-500">
          {club.fans.toLocaleString()} fans
        </p>
      </div>
      <div className="text-right">
        <p className="text-xs text-zinc-500">Sentiment</p>
        <p className="text-sm font-bold text-emerald-400">
          {club.sentiment.positive}% positive
        </p>
      </div>
    </Link>
  );
}
