export default function FanIdentityCard({ identity }) {
  return (
    <div className="mt-4 w-full max-w-sm rounded-md border border-zinc-800 bg-zinc-900 p-4 text-left">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-400">
        Fan Identity
      </h2>
      <dl className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-zinc-500">Club</dt>
          <dd className="font-semibold text-white">{identity.club}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-zinc-500">Nation</dt>
          <dd className="font-semibold text-white">{identity.nation}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-zinc-500">Fan since</dt>
          <dd className="font-semibold text-white">{identity.fanSince}</dd>
        </div>
      </dl>
      <div className="mt-3">
        <p className="mb-1 text-xs text-zinc-500">Top 5 players of all time</p>
        <div className="flex flex-wrap gap-2">
          {identity.topPlayers.map((player) => (
            <span
              key={player}
              className="rounded-full border border-zinc-700 px-2 py-1 text-xs font-semibold text-zinc-300"
            >
              {player}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
