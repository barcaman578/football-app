const MEDAL_COLOR = { 1: "#FFD60A", 2: "#C0C0C0", 3: "#CD7F32" };

export default function LeaderboardRow({ rank, user }) {
  const isUp = user.change > 0;
  const isDown = user.change < 0;
  const medalColor = MEDAL_COLOR[rank];
  const isCurrentUser = user.isCurrentUser;

  return (
    <div
      className="flex items-center gap-3 px-4 py-3.5"
      style={{
        borderLeft: `2px solid ${isCurrentUser ? "var(--row-hl-border)" : "transparent"}`,
        background: isCurrentUser ? "var(--row-hl-bg)" : "transparent",
      }}
    >
      {/* Rank */}
      <span
        className="w-7 shrink-0 text-center tabular-nums"
        style={{
          fontSize: rank <= 3 ? "1rem" : "0.85rem",
          fontWeight: rank <= 3 ? 700 : 500,
          color: medalColor ?? "var(--text-4)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {rank}
      </span>

      {/* Name + club */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate" style={{ color: "var(--text)" }}>
          {user.displayName}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>
          {user.club}
        </p>
      </div>

      {/* Points + change */}
      <div className="text-right shrink-0">
        <p
          className="font-bold tabular-nums"
          style={{
            fontSize: "0.95rem",
            fontVariantNumeric: "tabular-nums",
            color: medalColor ?? "var(--text)",
          }}
        >
          {user.points.toLocaleString()}
        </p>
        <p
          className="text-[11px] font-semibold mt-0.5"
          style={{
            color: isUp ? "#16a34a" : isDown ? "#dc2626" : "var(--text-4)",
          }}
        >
          {isUp ? `▲ ${user.change}` : isDown ? `▼ ${Math.abs(user.change)}` : "—"}
        </p>
      </div>
    </div>
  );
}
