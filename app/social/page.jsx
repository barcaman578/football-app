import { friends, similarFans, hotTakes } from "@/lib/mockData";
import SocialTabs from "@/components/social/SocialTabs";

export default function SocialPage() {
  const friendsContent = (
    <div>
      <div className="border-t" style={{ borderColor: "#222222" }}>
        {friends.map((friend) => (
          <div key={friend.username} className="flex items-center gap-3 border-b px-0 py-3.5" style={{ borderColor: "#222222" }}>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-sm font-black" style={{ background: "#1a1a1a", border: "1px solid #222222", color: "#00ff87" }}>
              {friend.displayName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-white text-sm">{friend.displayName}</p>
              <p className="text-xs" style={{ color: "#888888" }}>{friend.club} · {friend.points.toLocaleString()} pts</p>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="mt-3 border px-4 py-2.5 text-xs font-black uppercase tracking-widest transition hover:border-[#00ff87] hover:text-[#00ff87]" style={{ borderColor: "#333333", color: "#444444" }}>
        + Add Friend
      </button>
    </div>
  );

  const similarContent = (
    <div className="border-t" style={{ borderColor: "#222222" }}>
      {similarFans.map((fan) => (
        <div key={fan.username} className="border-b px-0 py-4" style={{ borderColor: "#222222" }}>
          <div className="flex items-center justify-between">
            <p className="font-bold text-white text-sm">{fan.displayName}</p>
            <span className="text-xs font-black" style={{ color: "#00ff87" }}>{fan.similarity}% match</span>
          </div>
          <ul className="mt-2 flex flex-col gap-1 text-xs" style={{ color: "#888888" }}>
            {fan.sharedTraits.map((trait) => (
              <li key={trait}>· {trait}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const takesContent = (
    <div className="border-t" style={{ borderColor: "#222222" }}>
      {hotTakes.map((take) => (
        <div key={take.id} className="border-b px-0 py-4" style={{ borderColor: "#222222" }}>
          <p className="text-sm text-white leading-snug">&quot;{take.text}&quot;</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-xs" style={{ color: "#888888" }}>@{take.username} · {take.club}</p>
            <div className="flex gap-3 text-xs">
              <span style={{ color: "#ff7043" }}>🔥 {take.fire}</span>
              <span style={{ color: "#888888" }}>💀 {take.skull}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <main className="flex flex-1 flex-col px-4 py-5">
      <p className="mb-1 text-[11px] font-black uppercase tracking-widest" style={{ color: "#888888" }}>Community</p>
      <h1 className="mb-5 text-2xl font-black uppercase tracking-tight text-white">
        <span style={{ color: "#00ff87", marginRight: "6px" }}>|</span>Social
      </h1>
      <SocialTabs friends={friendsContent} similar={similarContent} takes={takesContent} />
    </main>
  );
}
