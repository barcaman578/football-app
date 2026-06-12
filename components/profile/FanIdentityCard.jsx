export default function FanIdentityCard({ identity }) {
  return (
    <div
      className="mt-4 w-full max-w-sm p-4 text-left"
      style={{ borderRadius: "16px", border: "1px solid var(--border)", background: "var(--surface)" }}
    >
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--text-3)" }}>
        Fan identity
      </h2>
      <dl className="flex flex-col gap-2 text-sm">
        {[
          { label: "Club", value: identity.club },
          { label: "Nation", value: identity.nation },
          { label: "Fan since", value: identity.fanSince },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between">
            <dt style={{ color: "var(--text-3)" }}>{label}</dt>
            <dd className="font-semibold" style={{ color: "var(--text)" }}>{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-3">
        <p className="mb-2 text-xs" style={{ color: "var(--text-3)" }}>Top 5 players of all time</p>
        <div className="flex flex-wrap gap-2">
          {identity.topPlayers.map((player) => (
            <span
              key={player}
              className="px-2 py-1 text-xs font-semibold"
              style={{
                borderRadius: "999px",
                border: "1px solid var(--border-strong)",
                color: "var(--text-2)",
              }}
            >
              {player}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
