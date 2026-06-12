import { clubs } from "@/lib/mockData";
import ClubCard from "@/components/clubs/ClubCard";

export default function ClubsPage() {
  return (
    <main className="flex flex-1 flex-col px-4 pb-6" style={{ paddingTop: "48px" }}>
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-4)" }}>
        Fan sections
      </p>
      <h1
        className="mb-6 font-extrabold"
        style={{ fontSize: "38px", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--text)" }}
      >
        Clubs
      </h1>
      <div style={{ borderTop: "1px solid var(--border)" }}>
        {clubs.map((club) => (
          <ClubCard key={club.slug} club={club} />
        ))}
      </div>
    </main>
  );
}
