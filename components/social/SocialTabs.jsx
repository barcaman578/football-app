"use client";

import { useState } from "react";

const tabs = [
  { id: "friends", label: "FRIENDS" },
  { id: "similar", label: "SIMILAR" },
  { id: "takes", label: "HOT TAKES" },
];

export default function SocialTabs({ friends, similar, takes }) {
  const [tab, setTab] = useState("friends");
  const content = { friends, similar, takes };

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
