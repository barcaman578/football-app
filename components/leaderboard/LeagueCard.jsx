export default function LeagueCard({ league }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
      <div>
        <p className="font-semibold text-white">{league.name}</p>
        <p className="text-xs text-zinc-500">{league.memberCount} members</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-zinc-500">Your rank</p>
        <p className="text-lg font-bold text-emerald-400">#{league.yourRank}</p>
      </div>
    </div>
  );
}
