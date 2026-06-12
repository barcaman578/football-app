import { leaderboardUsers, privateLeagues } from "@/lib/mockData";
import LeaderboardRow from "@/components/leaderboard/LeaderboardRow";
import LeagueCard from "@/components/leaderboard/LeagueCard";
import LeaderboardTabs from "@/components/leaderboard/LeaderboardTabs";

export default function LeaderboardPage() {
  const currentUser = leaderboardUsers.find((u) => u.isCurrentUser);

  const clubUsers = leaderboardUsers
    .filter((u) => u.club === currentUser.club)
    .sort((a, b) => b.points - a.points);

  const global = (
    <div className="flex flex-col gap-1">
      {leaderboardUsers.map((user, i) => (
        <LeaderboardRow key={user.username} rank={i + 1} user={user} />
      ))}
    </div>
  );

  const club = (
    <div className="flex flex-col gap-1">
      <p className="mb-2 text-sm text-zinc-400">
        Showing fans of{" "}
        <span className="font-semibold text-white">{currentUser.club}</span>
      </p>
      {clubUsers.map((user, i) => (
        <LeaderboardRow key={user.username} rank={i + 1} user={user} />
      ))}
    </div>
  );

  const leagues = (
    <div className="flex flex-col gap-3">
      {privateLeagues.map((league) => (
        <LeagueCard key={league.id} league={league} />
      ))}
      <button
        type="button"
        className="mt-2 rounded-md border border-dashed border-zinc-700 px-4 py-3 text-sm font-semibold text-zinc-400 transition hover:border-emerald-500 hover:text-emerald-400"
      >
        + Create a private league
      </button>
    </div>
  );

  return (
    <main className="flex flex-1 flex-col px-4 py-6">
      <h1 className="mb-1 text-2xl font-extrabold tracking-tight">
        Leaderboard
      </h1>
      <p className="mb-4 text-sm text-zinc-400">
        Season 2025/26 · Resets in 142 days
      </p>
      <LeaderboardTabs global={global} club={club} leagues={leagues} />
    </main>
  );
}
