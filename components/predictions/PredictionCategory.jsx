"use client";

import { useState } from "react";

export default function PredictionCategory({ title, points, deadline, options }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="py-4" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{title}</p>
        <span className="text-xs font-bold" style={{ color: "var(--text-2)" }}>+{points} pts</span>
      </div>
      {deadline && (
        <p className="mb-3 text-xs" style={{ color: "var(--text-3)" }}>Closes {deadline}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(option)}
            className="px-3 py-1.5 text-xs font-semibold transition-opacity rounded-[8px]"
            style={
              selected === option
                ? { background: "var(--btn-bg)", color: "var(--btn-text)", border: "1px solid var(--btn-bg)" }
                : { background: "transparent", color: "var(--text-2)", border: "1px solid var(--border-strong)" }
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
