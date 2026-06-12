const PODIUM = {
  1: { medal: "🥇", ring: "border border-yellow-500/40 bg-yellow-500/5",  rank: "text-yellow-400 font-bold" },
  2: { medal: "🥈", ring: "border border-zinc-400/30 bg-zinc-400/5",       rank: "text-zinc-300 font-bold" },
  3: { medal: "🥉", ring: "border border-orange-700/40 bg-orange-700/5",   rank: "text-orange-500 font-bold" },
};

export default function LeaderboardRow({ rank, user }) {
  const isUp = user.change > 0;
  const isDown = user.change < 0;
  const podium = PODIUM[rank];

  return (
    <div
      className={`flex items-center gap-3 rounded-md px-3 py-2.5 ${
        podium
          ? podium.ring
          : user.isCurrentUser
          ? "border border-emerald-500/40 bg-emerald-500/10"
          : ""
      }`}
    >
      {/* Rank / medal */}
      <span className={`w-6 shrink-0 text-center text-sm ${podium ? podium.rank : "font-bold text-zinc-400"}`}>
        {podium ? podium.medal : rank}
      </span>

      {/* Avatar */}
      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
        podium ? "bg-zinc-800 text-white" : "bg-zinc-800 text-emerald-400"
      }`}>
        {user.displayName.charAt(0).toUpperCase()}
      </div>

      {/* Name + club */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold truncate ${
          podium ? "text-white" : user.isCurrentUser ? "text-emerald-400" : "text-white"
        }`}>
          {user.displayName}
        </p>
        <p className="text-xs text-zinc-500">{user.club}</p>
      </div>

      {/* Points + change */}
      <div className="text-right shrink-0">
        <p className={`text-sm font-bold tabular-nums ${
          rank === 1 ? "text-yellow-400" : rank === 2 ? "text-zinc-300" : rank === 3 ? "text-orange-500" : "text-white"
        }`}>
          {user.points.toLocaleString()}
        </p>
        <p className={`text-xs font-semibold ${
          isUp ? "text-emerald-400" : isDown ? "text-red-400" : "text-zinc-500"
        }`}>
          {isUp ? `▲ ${user.change}` : isDown ? `▼ ${Math.abs(user.change)}` : "–"}
        </p>
      </div>
    </div>
  );
}
