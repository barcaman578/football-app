export default function LeagueCard({ league }) {
  return (
    <div
      className="flex items-center justify-between px-4 py-3.5"
      style={{ background: "#111111", border: "1px solid #222222" }}
    >
      <div>
        <p className="font-bold text-white">{league.name}</p>
        <p className="text-xs" style={{ color: "#888888" }}>{league.memberCount} members</p>
      </div>
      <div className="text-right">
        <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: "#888888" }}>Rank</p>
        <p className="text-xl font-black tabular-nums" style={{ color: "#00ff87" }}>#{league.yourRank}</p>
      </div>
    </div>
  );
}
