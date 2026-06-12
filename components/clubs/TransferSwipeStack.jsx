"use client";

import { useState } from "react";
import { X, Heart } from "lucide-react";

export default function TransferSwipeStack({ players, clubName }) {
  const [index, setIndex] = useState(0);
  const [decisions, setDecisions] = useState({});

  function decide(decision) {
    const player = players[index];
    setDecisions((prev) => ({ ...prev, [player.name]: decision }));
    setIndex((prev) => prev + 1);
  }

  if (players.length === 0) {
    return (
      <p className="text-sm text-zinc-500">
        No transfer targets lined up for {clubName} yet.
      </p>
    );
  }

  if (index >= players.length) {
    const wanted = Object.entries(decisions)
      .filter(([, decision]) => decision === "want")
      .map(([name]) => name);

    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
        <p className="text-lg font-bold text-white">That&apos;s everyone for now!</p>
        {wanted.length > 0 ? (
          <div>
            <p className="text-sm text-zinc-400">You&apos;d sign:</p>
            <p className="mt-1 font-semibold text-emerald-400">
              {wanted.join(", ")}
            </p>
          </div>
        ) : (
          <p className="text-sm text-zinc-400">
            You passed on everyone. Tough crowd.
          </p>
        )}
      </div>
    );
  }

  const player = players[index];
  const playerInitials = player.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex w-full flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-800 text-2xl font-bold text-emerald-400">
          {playerInitials}
        </div>
        <h2 className="mt-4 text-xl font-extrabold text-white">
          {player.name}
        </h2>
        <p className="text-sm text-zinc-400">
          {player.position} · {player.currentClub}
        </p>
        <p className="mt-2 text-sm font-semibold text-emerald-400">
          Est. fee: {player.fee}
        </p>
      </div>

      <div className="flex gap-6">
        <button
          type="button"
          onClick={() => decide("pass")}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-700 text-red-400 transition hover:bg-zinc-800"
        >
          <X size={26} />
        </button>
        <button
          type="button"
          onClick={() => decide("want")}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500 text-emerald-400 transition hover:bg-emerald-500/10"
        >
          <Heart size={26} />
        </button>
      </div>

      <p className="text-xs text-zinc-500">
        {index + 1} / {players.length} — Sign for {clubName}?
      </p>
    </div>
  );
}
