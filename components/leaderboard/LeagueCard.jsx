export default function LeagueCard({ league }) {
  return (
    <div
      className="flex items-center justify-between px-4 py-4"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
      }}
    >
      <div>
        <p className="font-semibold" style={{ color: "var(--text)" }}>
          {league.name}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>
          {league.memberCount} members
        </p>
      </div>
      <div className="text-right">
        <p className="text-xs font-medium" style={{ color: "var(--text-3)" }}>
          Your rank
        </p>
        <p
          className="text-2xl font-bold tabular-nums mt-0.5"
          style={{ color: "var(--text)", fontVariantNumeric: "tabular-nums" }}
        >
          #{league.yourRank}
        </p>
      </div>
    </div>
  );
}
