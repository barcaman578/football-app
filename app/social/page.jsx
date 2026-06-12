import { friends, similarFans, hotTakes } from "@/lib/mockData";
import SocialTabs from "@/components/social/SocialTabs";

export default function SocialPage() {
  const friendsContent = (
    <div>
      <div style={{ borderTop: "1px solid var(--border)" }}>
        {friends.map((friend) => (
          <div
            key={friend.username}
            className="flex items-center gap-3 py-3.5"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
              style={{ background: "var(--surface-2)", color: "var(--text)", border: "1px solid var(--border)" }}
            >
              {friend.displayName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>{friend.displayName}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{friend.club} · {friend.points.toLocaleString()} pts</p>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-3 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-60"
        style={{ border: "1px solid var(--border-strong)", color: "var(--text-2)", borderRadius: "8px" }}
      >
        Add friend
      </button>
    </div>
  );

  const similarContent = (
    <div style={{ borderTop: "1px solid var(--border)" }}>
      {similarFans.map((fan) => (
        <div key={fan.username} className="py-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>{fan.displayName}</p>
            <span className="text-xs font-bold" style={{ color: "var(--text-2)" }}>{fan.similarity}% match</span>
          </div>
          <ul className="mt-2 flex flex-col gap-1 text-xs" style={{ color: "var(--text-3)" }}>
            {fan.sharedTraits.map((trait) => (
              <li key={trait}>· {trait}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const takesContent = (
    <div style={{ borderTop: "1px solid var(--border)" }}>
      {hotTakes.map((take) => (
        <div key={take.id} className="py-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <p className="text-sm leading-snug" style={{ color: "var(--text)" }}>&quot;{take.text}&quot;</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-xs" style={{ color: "var(--text-3)" }}>@{take.username} · {take.club}</p>
            <div className="flex gap-3 text-xs" style={{ color: "var(--text-2)" }}>
              <span>🔥 {take.fire}</span>
              <span>💀 {take.skull}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <main className="flex flex-1 flex-col px-4 pb-6" style={{ paddingTop: "48px" }}>
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-4)" }}>
        Community
      </p>
      <h1
        className="mb-6 font-extrabold"
        style={{ fontSize: "38px", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--text)" }}
      >
        Social
      </h1>
      <SocialTabs friends={friendsContent} similar={similarContent} takes={takesContent} />
    </main>
  );
}
