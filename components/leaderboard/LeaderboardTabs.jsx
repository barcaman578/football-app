"use client";

import { useState } from "react";

const tabs = [
  { id: "global", label: "Global" },
  { id: "club", label: "Club" },
  { id: "leagues", label: "Private" },
];

export default function LeaderboardTabs({ global, club, leagues }) {
  const [tab, setTab] = useState("global");
  const content = { global, club, leagues };

  return (
    <div className="w-full">
      <div
        className="mb-5 flex rounded-[10px] p-1"
        style={{ background: "var(--surface-2)" }}
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className="flex-1 rounded-[8px] py-2 text-sm font-semibold transition-all"
            style={{
              background: tab === t.id ? "var(--btn-bg)" : "transparent",
              color: tab === t.id ? "var(--btn-text)" : "var(--text-2)",
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
