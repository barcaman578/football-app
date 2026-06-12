export default function LeaderboardRow({ rank, user }) {
  const isUp = user.change > 0;
  const isDown = user.change < 0;

  return (
    <div
      className={`flex items-center gap-3 rounded-md px-3 py-2.5 ${
        user.isCurrentUser
          ? "border border-emerald-500/40 bg-emerald-500/10"
          : ""
      }`}
    >
      <span className="w-6 text-center text-sm font-bold text-zinc-400">
        {rank}
      </span>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold text-emerald-400">
        {user.displayName.charAt(0).toUpperCase()}
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-white">{user.displayName}</p>
        <p className="text-xs text-zinc-500">{user.club}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-white">
          {user.points.toLocaleString()}
        </p>
        <p
          className={`text-xs font-semibold ${
            isUp
              ? "text-emerald-400"
              : isDown
                ? "text-red-400"
                : "text-zinc-500"
          }`}
        >
          {isUp ? `▲ ${user.change}` : isDown ? `▼ ${Math.abs(user.change)}` : "–"}
        </p>
      </div>
    </div>
  );
}
