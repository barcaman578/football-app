import { friends, similarFans, hotTakes } from "@/lib/mockData";
import SocialTabs from "@/components/social/SocialTabs";

export default function SocialPage() {
  const friendsContent = (
    <div className="flex flex-col gap-2">
      {friends.map((friend) => (
        <div
          key={friend.username}
          className="flex items-center gap-3 rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold text-emerald-400">
            {friend.displayName.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-white">{friend.displayName}</p>
            <p className="text-xs text-zinc-500">
              {friend.club} · {friend.points.toLocaleString()} pts
            </p>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="rounded-md border border-dashed border-zinc-700 px-4 py-3 text-sm font-semibold text-zinc-400 transition hover:border-emerald-500 hover:text-emerald-400"
      >
        + Add Friend
      </button>
    </div>
  );

  const similarContent = (
    <div className="flex flex-col gap-3">
      {similarFans.map((fan) => (
        <div
          key={fan.username}
          className="rounded-md border border-zinc-800 bg-zinc-900 p-4"
        >
          <div className="flex items-center justify-between">
            <p className="font-semibold text-white">{fan.displayName}</p>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400">
              {fan.similarity}% match
            </span>
          </div>
          <ul className="mt-2 flex flex-col gap-1 text-xs text-zinc-400">
            {fan.sharedTraits.map((trait) => (
              <li key={trait}>• {trait}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const takesContent = (
    <div className="flex flex-col gap-2">
      {hotTakes.map((take) => (
        <div
          key={take.id}
          className="rounded-md border border-zinc-800 bg-zinc-900 p-3"
        >
          <p className="text-sm text-white">&quot;{take.text}&quot;</p>
          <p className="mt-1 text-xs text-zinc-500">
            @{take.username} · {take.club}
          </p>
          <div className="mt-2 flex gap-3 text-xs">
            <span className="text-orange-400">🔥 {take.fire}</span>
            <span className="text-zinc-400">💀 {take.skull}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <main className="flex flex-1 flex-col px-4 py-6">
      <h1 className="mb-1 text-2xl font-extrabold tracking-tight">Social</h1>
      <p className="mb-4 text-sm text-zinc-400">
        Friends, fans like you, and the season&apos;s best (and worst) takes.
      </p>
      <SocialTabs
        friends={friendsContent}
        similar={similarContent}
        takes={takesContent}
      />
    </main>
  );
}
