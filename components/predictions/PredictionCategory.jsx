"use client";

import { useState } from "react";

export default function PredictionCategory({ title, points, deadline, options }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="border-b px-0 py-4" style={{ borderColor: "#222222" }}>
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-sm font-bold text-white">{title}</p>
        <span className="text-xs font-black" style={{ color: "#00ff87" }}>+{points} pts</span>
      </div>
      {deadline && (
        <p className="mb-3 text-xs" style={{ color: "#888888" }}>Closes {deadline}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(option)}
            className="px-3 py-1.5 text-xs font-bold transition"
            style={
              selected === option
                ? { background: "#00ff87", color: "#0a0a0a", border: "1px solid #00ff87" }
                : { background: "transparent", color: "#888888", border: "1px solid #333333" }
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
