"use client";

import { useState } from "react";

const tabs = [
  { id: "global", label: "GLOBAL" },
  { id: "club", label: "CLUB" },
  { id: "leagues", label: "PRIVATE" },
];

export default function LeaderboardTabs({ global, club, leagues }) {
  const [tab, setTab] = useState("global");
  const content = { global, club, leagues };

  return (
    <div className="w-full">
      <div className="mb-4 flex border-b" style={{ borderColor: "#222222" }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className="flex-1 pb-2.5 pt-1 text-xs font-black tracking-widest transition-colors"
            style={{
              color: tab === t.id ? "#00ff87" : "#444444",
              borderBottom: tab === t.id ? "2px solid #00ff87" : "2px solid transparent",
              marginBottom: "-1px",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      {content[tab]}
    </div>
  );
}
