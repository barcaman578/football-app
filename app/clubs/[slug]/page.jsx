import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clubs, hotTakes } from "@/lib/mockData";

export default async function ClubProfilePage({ params }) {
  const { slug } = await params;
  const club = clubs.find((c) => c.slug === slug);

  if (!club) notFound();

  const clubTakes = hotTakes.filter((take) => take.club === club.name);

  return (
    <main className="flex flex-1 flex-col gap-4 px-4 py-6">
      <Link
        href="/clubs"
        className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white"
      >
        <ChevronLeft size={16} /> Clubs
      </Link>

      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800 text-lg font-bold text-emerald-400">
          {club.initials}
        </div>
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            {club.name}
          </h1>
          <p className="text-sm text-zinc-500">
            {club.fans.toLocaleString()} fans on Ballknowledge
          </p>
        </div>
      </div>

      <section>
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-400">
          Fan Sentiment
        </h2>
        <div className="flex h-3 w-full overflow-hidden rounded-full bg-zinc-800">
          <div
            className="bg-emerald-500"
            style={{ width: `${club.sentiment.positive}%` }}
          />
          <div
            className="bg-zinc-600"
            style={{ width: `${club.sentiment.neutral}%` }}
          />
          <div
            className="bg-red-500"
            style={{ width: `${club.sentiment.negative}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-zinc-400">
          <span>{club.sentiment.positive}% Positive</span>
          <span>{club.sentiment.neutral}% Neutral</span>
          <span>{club.sentiment.negative}% Negative</span>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-400">
          Recent Hot Takes
        </h2>
        <div className="flex flex-col gap-2">
          {clubTakes.length > 0 ? (
            clubTakes.map((take) => (
              <div
                key={take.id}
                className="rounded-md border border-zinc-800 bg-zinc-900 p-3"
              >
                <p className="text-sm text-white">&quot;{take.text}&quot;</p>
                <p className="mt-1 text-xs text-zinc-500">
                  @{take.username} · 🔥 {take.fire} · 💀 {take.skull}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-zinc-500">
              No hot takes yet for {club.name}.
            </p>
          )}
        </div>
      </section>

      <Link
        href={`/clubs/${club.slug}/transfer-swipe`}
        className="flex items-center justify-between rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-500/20"
      >
        Transfer Swipe
        <ChevronRight size={18} />
      </Link>
    </main>
  );
}
