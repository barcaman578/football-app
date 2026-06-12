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
        className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white"
      >
        <ChevronLeft size={16} /> {club.name}
      </Link>

      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">
          Transfer Swipe
        </h1>
        <p className="text-sm text-zinc-400">
          Swipe right to sign, left to pass. Your picks feed into{" "}
          {club.name}&apos;s fan wishlist.
        </p>
      </div>

      <TransferSwipeStack players={players} clubName={club.name} />
    </main>
  );
}
