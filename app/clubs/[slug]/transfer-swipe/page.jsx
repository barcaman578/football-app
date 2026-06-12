import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { clubs, transferTargets } from "@/lib/mockData";
import TransferSwipeStack from "@/components/clubs/TransferSwipeStack";

export default async function TransferSwipePage({ params }) {
  const { slug } = await params;
  const club = clubs.find((c) => c.slug === slug);

  if (!club) notFound();

  const players = transferTargets[slug] ?? [];

  return (
    <main className="flex flex-1 flex-col gap-4 px-4 py-6">
      <Link
        href={`/clubs/${slug}`}
        className="flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-60"
        style={{ color: "var(--text-2)" }}
      >
        <ChevronLeft size={16} /> {club.name}
      </Link>
      <div>
        <h1
          className="font-extrabold"
          style={{ fontSize: "28px", letterSpacing: "-0.02em", color: "var(--text)" }}
        >
          Transfer swipe
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-2)" }}>
          Swipe right to sign, left to pass. Your picks feed into {club.name}&apos;s fan wishlist.
        </p>
      </div>
      <TransferSwipeStack players={players} clubName={club.name} />
    </main>
  );
}
