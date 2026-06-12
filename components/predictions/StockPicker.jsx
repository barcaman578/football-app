"use client";

import { useState } from "react";
import { playerStockOptions } from "@/lib/mockData";

const MAX_PICKS = 5;

export default function StockPicker() {
  const [selected, setSelected] = useState([]);

  function toggle(name) {
    setSelected((prev) => {
      if (prev.includes(name)) return prev.filter((n) => n !== name);
      if (prev.length >= MAX_PICKS) return prev;
      return [...prev, name];
    });
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-zinc-400">
        {selected.length}/{MAX_PICKS} selected
      </p>
      <div className="flex flex-col gap-2">
        {playerStockOptions.map((player) => {
          const isSelected = selected.includes(player.name);

          return (
            <button
              key={player.name}
              type="button"
              onClick={() => toggle(player.name)}
              className={`flex items-center justify-between rounded-md border px-3 py-2.5 text-left transition ${
                isSelected
                  ? "border-emerald-500 bg-emerald-500/10"
                  : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
              }`}
            >
              <div>
                <p className="text-sm font-semibold text-white">
                  {player.name}
                </p>
                <p className="text-xs text-zinc-500">
                  {player.club} · {player.category}
                </p>
              </div>
              <div
                className={`h-5 w-5 shrink-0 rounded-full border-2 ${
                  isSelected
                    ? "border-emerald-400 bg-emerald-400"
                    : "border-zinc-600"
                }`}
              />
            </button>
          );
        })}
      </div>
      <button
        type="button"
        disabled={selected.length !== MAX_PICKS}
        className="mt-2 rounded-md bg-emerald-500 px-4 py-2 font-bold text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Lock In Stocks
      </button>
    </div>
  );
}
