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
      <p className="text-sm" style={{ color: "var(--text-2)" }}>
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
              className="flex items-center justify-between px-3 py-3 text-left transition-opacity hover:opacity-70"
              style={{
                background: isSelected ? "var(--surface-2)" : "var(--surface)",
                border: `1px solid ${isSelected ? "var(--border-strong)" : "var(--border)"}`,
                borderRadius: "12px",
              }}
            >
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  {player.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>
                  {player.club} · {player.category}
                </p>
              </div>
              <div
                className="h-5 w-5 shrink-0 rounded-full border-2 flex items-center justify-center"
                style={{
                  borderColor: isSelected ? "var(--text)" : "var(--border-strong)",
                  background: isSelected ? "var(--btn-bg)" : "transparent",
                }}
              >
                {isSelected && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="var(--btn-text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>
      <button
        type="button"
        disabled={selected.length !== MAX_PICKS}
        className="mt-2 py-3 text-sm font-bold transition-opacity hover:opacity-80 disabled:opacity-30"
        style={{
          background: "var(--btn-bg)",
          color: "var(--btn-text)",
          borderRadius: "10px",
        }}
      >
        Lock in stocks
      </button>
    </div>
  );
}
