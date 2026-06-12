import { clubs } from "@/lib/mockData";
import ClubCard from "@/components/clubs/ClubCard";

export default function ClubsPage() {
  return (
    <main className="flex flex-1 flex-col px-4 py-5">
      <p className="mb-1 text-[11px] font-black uppercase tracking-widest" style={{ color: "#888888" }}>Fan sections</p>
      <h1 className="mb-5 text-2xl font-black uppercase tracking-tight text-white">
        <span style={{ color: "#00ff87", marginRight: "6px" }}>|</span>Clubs
      </h1>
      <div className="border-t" style={{ borderColor: "#222222" }}>
        {clubs.map((club) => (
          <ClubCard key={club.slug} club={club} />
        ))}
      </div>
    </main>
  );
}
