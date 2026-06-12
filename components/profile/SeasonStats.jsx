export default function SeasonStats({ stats }) {
  return (
    <div className="mt-4 grid w-full max-w-sm grid-cols-3 gap-2 text-center">
      <div className="rounded-md border border-zinc-800 bg-zinc-900 p-3">
        <p className="text-xl font-extrabold text-emerald-400">
          {stats.points.toLocaleString()}
        </p>
        <p className="text-xs text-zinc-500">Points</p>
      </div>
      <div className="rounded-md border border-zinc-800 bg-zinc-900 p-3">
        <p className="text-xl font-extrabold text-emerald-400">
          #{stats.rank}
        </p>
        <p className="text-xs text-zinc-500">Global Rank</p>
      </div>
      <div className="rounded-md border border-zinc-800 bg-zinc-900 p-3">
        <p className="text-xl font-extrabold text-emerald-400">
          {stats.seasons}
        </p>
        <p className="text-xs text-zinc-500">Seasons Played</p>
      </div>
    </div>
  );
}
