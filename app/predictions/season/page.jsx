import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { seasonPredictions } from "@/lib/mockData";
import PredictionCategory from "@/components/predictions/PredictionCategory";

export default function SeasonPredictionsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 px-4 py-6">
      <Link
        href="/predictions"
        className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white"
      >
        <ChevronLeft size={16} /> Predictions
      </Link>

      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">
          Season Predictions
        </h1>
        <p className="text-sm text-zinc-400">
          Your biggest point swings — locked in for the whole 2025/26 season.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {seasonPredictions.map((prediction) => (
          <PredictionCategory key={prediction.id} {...prediction} />
        ))}
      </div>
    </main>
  );
}
