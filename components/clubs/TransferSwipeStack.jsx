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
      <p className="text-sm" style={{ color: "var(--text-3)" }}>
        No transfer targets lined up for {clubName} yet.
      </p>
    );
  }

  if (index >= players.length) {
    const wanted = Object.entries(decisions)
      .filter(([, decision]) => decision === "want")
      .map(([name]) => name);

    return (
      <div
        className="flex flex-col items-center gap-3 p-6 text-center"
        style={{ borderRadius: "20px", border: "1px solid var(--border)", background: "var(--surface)" }}
      >
        <p className="text-lg font-bold" style={{ color: "var(--text)" }}>That&apos;s everyone for now!</p>
        {wanted.length > 0 ? (
          <div>
            <p className="text-sm" style={{ color: "var(--text-2)" }}>You&apos;d sign:</p>
            <p className="mt-1 font-semibold" style={{ color: "var(--text)" }}>{wanted.join(", ")}</p>
          </div>
        ) : (
          <p className="text-sm" style={{ color: "var(--text-2)" }}>
            You passed on everyone. Tough crowd.
          </p>
        )}
      </div>
    );
  }

  const player = players[index];
  const playerInitials = player.name.split(" ").map((part) => part[0]).join("");

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex w-full flex-col items-center p-6 text-center"
        style={{ borderRadius: "20px", border: "1px solid var(--border)", background: "var(--surface)" }}
      >
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold"
          style={{ background: "var(--surface-2)", color: "var(--text)" }}
        >
          {playerInitials}
        </div>
        <h2
          className="mt-4 text-xl font-extrabold"
          style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
        >
          {player.name}
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--text-2)" }}>
          {player.position} · {player.currentClub}
        </p>
        <p className="mt-2 text-sm font-semibold" style={{ color: "var(--text)" }}>
          Est. fee: {player.fee}
        </p>
      </div>

      <div className="flex gap-6">
        <button
          type="button"
          onClick={() => decide("pass")}
          className="flex h-14 w-14 items-center justify-center rounded-full transition-opacity hover:opacity-70"
          style={{ border: "1px solid var(--border-strong)", color: "#dc2626" }}
        >
          <X size={26} />
        </button>
        <button
          type="button"
          onClick={() => decide("want")}
          className="flex h-14 w-14 items-center justify-center rounded-full transition-opacity hover:opacity-70"
          style={{ border: "1px solid var(--border-strong)", color: "#16a34a" }}
        >
          <Heart size={26} />
        </button>
      </div>

      <p className="text-xs" style={{ color: "var(--text-3)" }}>
        {index + 1} / {players.length} — Sign for {clubName}?
      </p>
    </div>
  );
}
