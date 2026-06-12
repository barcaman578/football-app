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
    <div
      className="divide-y"
      style={{ borderColor: "#222222", border: "1px solid #222222", divideColor: "#222222" }}
    >
      <div className="divide-y divide-[#222222] border border-[#222222]">
        {leaderboardUsers.map((user, i) => (
          <LeaderboardRow key={user.username} rank={i + 1} user={user} />
        ))}
      </div>
    </div>
  );

  const club = (
    <div>
      <p
        className="mb-3 text-[11px] font-black tracking-widest uppercase"
        style={{ color: "#888888" }}
      >
        {currentUser.club} fans
      </p>
      <div className="divide-y divide-[#222222] border border-[#222222]">
        {clubUsers.map((user, i) => (
          <LeaderboardRow key={user.username} rank={i + 1} user={user} />
        ))}
      </div>
    </div>
  );

  const leagues = (
    <div className="flex flex-col gap-2">
      {privateLeagues.map((league) => (
        <LeagueCard key={league.id} league={league} />
      ))}
      <button
        type="button"
        className="mt-1 border border-[#222222] bg-transparent px-4 py-3 text-xs font-black uppercase tracking-widest text-[#444444] transition hover:border-[#00ff87] hover:text-[#00ff87]"
      >
        + Create a private league
      </button>
    </div>
  );

  return (
    <main className="flex flex-1 flex-col px-4 py-5" style={{ background: "#0a0a0a" }}>
      <p
        className="mb-1 text-[11px] font-black tracking-widest"
        style={{ color: "#888888" }}
      >
        SEASON 2025/26
      </p>
      <h1
        className="mb-5 text-2xl font-black uppercase tracking-tight"
        style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
      >
        <span style={{ color: "#00ff87", marginRight: "6px" }}>|</span>
        Leaderboard
      </h1>
      <LeaderboardTabs global={global} club={club} leagues={leagues} />
    </main>
  );
}
