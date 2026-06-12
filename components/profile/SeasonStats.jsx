export default function SeasonStats({ stats }) {
  return (
    <div className="mt-4 grid w-full max-w-sm grid-cols-3 gap-2 text-center">
      {[
        { value: stats.points.toLocaleString(), label: "Points" },
        { value: `#${stats.rank}`, label: "Global rank" },
        { value: stats.seasons, label: "Seasons" },
      ].map(({ value, label }) => (
        <div
          key={label}
          className="p-3"
          style={{ borderRadius: "12px", border: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <p
            className="text-xl font-extrabold tabular-nums"
            style={{ color: "var(--text)", fontVariantNumeric: "tabular-nums" }}
          >
            {value}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{label}</p>
        </div>
      ))}
    </div>
  );
}
