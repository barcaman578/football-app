"use client";

import { useState } from "react";

export default function PredictionCategory({ title, points, deadline, options }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="rounded-md border border-zinc-800 bg-zinc-900 p-3">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-white">{title}</p>
        <span className="shrink-0 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400">
          +{points} pts
        </span>
      </div>
      {deadline && (
        <p className="mb-2 text-xs text-zinc-500">Deadline: {deadline}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(option)}
            className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition ${
              selected === option
                ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                : "border-zinc-700 text-zinc-300 hover:border-zinc-500"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
