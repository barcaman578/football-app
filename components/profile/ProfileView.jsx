import { leaderboardUsers, fanIdentityOptions } from "@/lib/mockData";
import SeasonStats from "./SeasonStats";
import FanIdentityCard from "./FanIdentityCard";

export default function ProfileView({ profile }) {
  const initial = (profile.display_name || profile.username || "?")
    .charAt(0)
    .toUpperCase();

  const rank = leaderboardUsers.findIndex(
    (user) => user.username === profile.username
  );
  const leaderboardEntry = rank >= 0 ? leaderboardUsers[rank] : null;

  const stats = {
    points: leaderboardEntry?.points ?? 0,
    rank: rank >= 0 ? rank + 1 : leaderboardUsers.length,
    seasons: 1,
  };

  const identity = {
    club: leaderboardEntry?.club ?? fanIdentityOptions.clubs[0],
    nation: fanIdentityOptions.nations[0],
    fanSince: "2015",
    topPlayers: fanIdentityOptions.players.slice(0, 5),
  };

  return (
    <div className="flex w-full max-w-sm flex-col items-center text-center">
      {profile.avatar_url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.avatar_url}
          alt={profile.username}
          className="h-24 w-24 rounded-full border-2 border-emerald-500 object-cover"
        />
      ) : (
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-emerald-500 bg-zinc-900 text-3xl font-bold text-emerald-400">
          {initial}
        </div>
      )}

      <h1 className="mt-4 text-2xl font-extrabold tracking-tight">
        {profile.display_name || profile.username}
      </h1>
      <p className="text-zinc-500">@{profile.username}</p>

      {profile.bio && (
        <p className="mt-4 text-sm text-zinc-300">{profile.bio}</p>
      )}

      <SeasonStats stats={stats} />
      <FanIdentityCard identity={identity} />
    </div>
  );
}
