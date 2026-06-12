import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clubs, hotTakes } from "@/lib/mockData";
import { getClubColors, clubBadgeStyle } from "@/lib/clubColors";

export default async function ClubProfilePage({ params }) {
  const { slug } = await params;
  const club = clubs.find((c) => c.slug === slug);

  if (!club) notFound();

  const clubTakes = hotTakes.filter((take) => take.club === club.name);
  const colors = getClubColors(slug);

  return (
    <main className="flex flex-1 flex-col gap-4 px-4 py-6">
      <Link
        href="/clubs"
        className="flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-60"
        style={{ color: "var(--text-2)" }}
      >
        <ChevronLeft size={16} /> Clubs
      </Link>

      <div className="flex items-center gap-3">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold overflow-hidden"
          style={clubBadgeStyle(colors)}
        >
          {club.initials}
        </div>
        <div>
          <h1
            className="font-extrabold"
            style={{ fontSize: "24px", letterSpacing: "-0.02em", color: "var(--text)" }}
          >
            {club.name}
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--text-2)" }}>
            {club.fans.toLocaleString()} fans on Ballknowledge
          </p>
        </div>
      </div>

      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--text-3)" }}>
          Fan sentiment
        </h2>
        <div className="flex h-2.5 w-full overflow-hidden rounded-full" style={{ background: "var(--surface-2)" }}>
          <div className="bg-[#16a34a]" style={{ width: `${club.sentiment.positive}%` }} />
          <div style={{ width: `${club.sentiment.neutral}%`, background: "var(--border-strong)" }} />
          <div className="bg-[#dc2626]" style={{ width: `${club.sentiment.negative}%` }} />
        </div>
        <div className="mt-2 flex justify-between text-xs" style={{ color: "var(--text-3)" }}>
          <span>{club.sentiment.positive}% positive</span>
          <span>{club.sentiment.neutral}% neutral</span>
          <span>{club.sentiment.negative}% negative</span>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--text-3)" }}>
          Recent hot takes
        </h2>
        <div className="flex flex-col gap-2">
          {clubTakes.length > 0 ? (
            clubTakes.map((take) => (
              <div
                key={take.id}
                className="p-3"
                style={{ borderRadius: "12px", border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <p className="text-sm" style={{ color: "var(--text)" }}>&quot;{take.text}&quot;</p>
                <p className="mt-1 text-xs" style={{ color: "var(--text-3)" }}>
                  @{take.username} · 🔥 {take.fire} · 💀 {take.skull}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm" style={{ color: "var(--text-3)" }}>
              No hot takes yet for {club.name}.
            </p>
          )}
        </div>
      </section>

      <Link
        href={`/clubs/${club.slug}/transfer-swipe`}
        className="flex items-center justify-between px-4 py-3 font-semibold transition-opacity hover:opacity-70"
        style={{
          borderRadius: "12px",
          border: "1px solid var(--border-strong)",
          color: "var(--text)",
          background: "var(--surface)",
        }}
      >
        Transfer swipe
        <ChevronRight size={18} style={{ color: "var(--text-3)" }} />
      </Link>
    </main>
  );
}
