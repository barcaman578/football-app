import { leaderboardUsers, privateLeagues } from "@/lib/mockData";
import LeaderboardRow from "@/components/leaderboard/LeaderboardRow";
import LeagueCard from "@/components/leaderboard/LeagueCard";
import LeaderboardTabs from "@/components/leaderboard/LeaderboardTabs";

const MEDAL = { 1: "#FFD60A", 2: "#C0C0C0", 3: "#CD7F32" };

export default function LeaderboardPage() {
  const currentUser = leaderboardUsers.find((u) => u.isCurrentUser);
  const currentUserRank = leaderboardUsers.indexOf(currentUser) + 1;
  const top3 = leaderboardUsers.slice(0, 3);
  const rest = leaderboardUsers.slice(3);

  const podium = [
    { user: top3[1], rank: 2 },
    { user: top3[0], rank: 1 },
    { user: top3[2], rank: 3 },
  ];

  const clubUsers = leaderboardUsers
    .filter((u) => u.club === currentUser.club)
    .sort((a, b) => b.points - a.points);

  const global = (
    <div className="flex flex-col gap-3">
      {/* Hero: white card in light mode, black card in dark mode */}
      <div
        className="px-5 py-6"
        style={{
          background: "var(--card-hero-bg)",
          borderRadius: "20px",
          border: "1px solid var(--card-hero-border)",
        }}
      >
        <p className="text-xs font-medium mb-3" style={{ color: "var(--card-hero-text-2)" }}>
          Your ranking
        </p>
        <div className="flex items-end justify-between">
          <div>
            <p
              style={{
                fontSize: "68px",
                fontWeight: 800,
                color: "var(--card-hero-text)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              #{currentUserRank}
            </p>
            <p className="text-xs mt-2" style={{ color: "var(--card-hero-text-2)" }}>
              Global rank
            </p>
          </div>
          <div className="text-right">
            <p
              style={{
                fontSize: "44px",
                fontWeight: 700,
                color: "var(--card-hero-text)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {currentUser.points.toLocaleString()}
            </p>
            <p className="text-xs mt-2" style={{ color: "var(--card-hero-text-2)" }}>
              Points
            </p>
          </div>
        </div>
        {currentUser.change !== 0 && (
          <div
            className="mt-5 pt-4 flex items-center"
            style={{ borderTop: "1px solid var(--card-hero-divider)" }}
          >
            <span
              className="text-xs font-semibold"
              style={{ color: currentUser.change > 0 ? "#16a34a" : "#dc2626" }}
            >
              {currentUser.change > 0
                ? `▲ ${currentUser.change} spots this week`
                : `▼ ${Math.abs(currentUser.change)} spot${Math.abs(currentUser.change) !== 1 ? "s" : ""} this week`}
            </span>
          </div>
        )}
      </div>

      {/* Top 3 podium */}
      <div className="grid grid-cols-3 gap-2">
        {podium.map(({ user, rank }) => {
          const color = MEDAL[rank];
          return (
            <div
              key={user.username}
              className="flex flex-col items-center px-2 py-4 gap-2"
              style={{
                background: "var(--surface)",
                borderRadius: "16px",
                border: `1px solid ${color}45`,
                marginTop: rank === 1 ? "-10px" : "0",
              }}
            >
              <p className="font-bold tabular-nums" style={{ fontSize: "11px", color, letterSpacing: "0.04em" }}>
                #{rank}
              </p>
              <div className="text-center w-full min-w-0">
                <p className="text-xs font-semibold truncate" style={{ color: "var(--text)" }}>
                  {user.displayName}
                </p>
                <p
                  className="font-bold tabular-nums mt-1"
                  style={{ fontSize: "14px", color, fontVariantNumeric: "tabular-nums" }}
                >
                  {user.points.toLocaleString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Rankings 4–10 */}
      <div
        style={{
          background: "var(--surface)",
          borderRadius: "16px",
          border: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        <p
          className="px-4 pt-3 pb-2 text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--text-3)" }}
        >
          Full rankings
        </p>
        {rest.map((user, i) => (
          <div key={user.username} style={{ borderTop: "1px solid var(--border)" }}>
            <LeaderboardRow rank={i + 4} user={user} />
          </div>
        ))}
      </div>
    </div>
  );

  const club = (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium" style={{ color: "var(--text-2)" }}>
        {currentUser.club} fans
      </p>
      <div
        style={{
          background: "var(--surface)",
          borderRadius: "16px",
          border: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        {clubUsers.map((user, i) => (
          <div
            key={user.username}
            style={{ borderBottom: i < clubUsers.length - 1 ? "1px solid var(--border)" : "none" }}
          >
            <LeaderboardRow rank={i + 1} user={user} />
          </div>
        ))}
      </div>
    </div>
  );

  const leagues = (
    <div className="flex flex-col gap-3">
      {privateLeagues.map((league) => (
        <LeagueCard key={league.id} league={league} />
      ))}
      <button
        type="button"
        className="text-sm font-semibold transition-opacity active:opacity-70"
        style={{
          border: "1px solid var(--btn-outline-border)",
          color: "var(--btn-outline-text)",
          background: "transparent",
          borderRadius: "10px",
          height: "50px",
        }}
      >
        Create a private league
      </button>
    </div>
  );

  return (
    <main
      className="flex flex-1 flex-col px-4 pb-6"
      style={{ background: "var(--bg)", paddingTop: "48px" }}
    >
      <p className="text-xs font-medium mb-1" style={{ color: "var(--text-4)" }}>
        Season 2025/26
      </p>
      <h1
        className="mb-6 font-extrabold"
        style={{ color: "var(--text)", fontSize: "38px", letterSpacing: "-0.025em", lineHeight: 1.05 }}
      >
        Leaderboard
      </h1>
      <LeaderboardTabs global={global} club={club} leagues={leagues} />
    </main>
  );
}
