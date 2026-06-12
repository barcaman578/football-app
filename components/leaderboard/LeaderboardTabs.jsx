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
      <div className="mb-4 flex gap-1 rounded-md bg-zinc-900 p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`flex-1 rounded-md py-1.5 text-sm font-semibold transition ${
              tab === t.id
                ? "bg-emerald-500 text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {content[tab]}
    </div>
  );
}
