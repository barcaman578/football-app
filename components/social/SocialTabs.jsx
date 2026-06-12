"use client";

import { useState } from "react";

const tabs = [
  { id: "friends", label: "Friends" },
  { id: "similar", label: "Similar Fans" },
  { id: "takes", label: "Hot Takes" },
];

export default function SocialTabs({ friends, similar, takes }) {
  const [tab, setTab] = useState("friends");
  const content = { friends, similar, takes };

  return (
    <div className="w-full">
      <div className="mb-4 flex gap-1 rounded-md bg-zinc-900 p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition sm:text-sm ${
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
