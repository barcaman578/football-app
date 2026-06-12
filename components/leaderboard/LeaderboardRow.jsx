const RANK_COLOR = {
  1: "#FFD700",
  2: "#C0C0C0",
  3: "#CD7F32",
};

export default function LeaderboardRow({ rank, user }) {
  const isUp = user.change > 0;
  const isDown = user.change < 0;
  const rankColor = RANK_COLOR[rank];
  const isCurrentUser = user.isCurrentUser;

  return (
    <div
      className={`flex items-center gap-3 px-3 py-3 ${
        isCurrentUser
          ? "border-l-2 bg-[#00ff87]/5"
          : "border-l-2 border-transparent"
      }`}
      style={isCurrentUser ? { borderColor: "#00ff87" } : undefined}
    >
      {/* Rank */}
      <span
        className="w-7 shrink-0 text-center font-black tabular-nums"
        style={{
          fontSize: rank <= 3 ? "1rem" : "0.8rem",
          color: rankColor ?? "#444444",
        }}
      >
        {rank}
      </span>

      {/* Avatar */}
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-sm font-black"
        style={{
          background: "#1a1a1a",
          color: rankColor ?? (isCurrentUser ? "#00ff87" : "#888888"),
          border: `1px solid ${rankColor ? rankColor + "40" : "#222222"}`,
        }}
      >
        {user.displayName.charAt(0).toUpperCase()}
      </div>

      {/* Name + club */}
      <div className="flex-1 min-w-0">
        <p
          className="text-sm font-bold truncate"
          style={{ color: isCurrentUser ? "#00ff87" : "#ffffff" }}
        >
          {user.displayName}
        </p>
        <p className="text-xs" style={{ color: "#888888" }}>{user.club}</p>
      </div>

      {/* Points + change */}
      <div className="text-right shrink-0">
        <p
          className="font-black tabular-nums"
          style={{
            fontSize: "0.95rem",
            fontVariantNumeric: "tabular-nums",
            color: rankColor ?? (isCurrentUser ? "#00ff87" : "#ffffff"),
          }}
        >
          {user.points.toLocaleString()}
        </p>
        <p
          className="text-[11px] font-semibold"
          style={{
            color: isUp ? "#00ff87" : isDown ? "#ff4444" : "#444444",
          }}
        >
          {isUp ? `▲ ${user.change}` : isDown ? `▼ ${Math.abs(user.change)}` : "—"}
        </p>
      </div>
    </div>
  );
}
