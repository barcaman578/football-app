import { clubs } from "@/lib/mockData";
import ClubCard from "@/components/clubs/ClubCard";

export default function ClubsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 px-4 py-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">Clubs</h1>
        <p className="text-sm text-zinc-400">
          Fan sentiment, hot takes, and transfer targets for every club.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {clubs.map((club) => (
          <ClubCard key={club.slug} club={club} />
        ))}
      </div>
    </main>
  );
}
