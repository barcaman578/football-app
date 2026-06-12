import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { seasonPredictions } from "@/lib/mockData";
import PredictionCategory from "@/components/predictions/PredictionCategory";

export default function SeasonPredictionsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 px-4 py-6">
      <Link
        href="/predictions"
        className="flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-60"
        style={{ color: "var(--text-2)" }}
      >
        <ChevronLeft size={16} /> Predictions
      </Link>
      <div>
        <h1
          className="font-extrabold"
          style={{ fontSize: "28px", letterSpacing: "-0.02em", color: "var(--text)" }}
        >
          Season predictions
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-2)" }}>
          Your biggest point swings — locked in for the whole 2025/26 season.
        </p>
      </div>
      <div className="flex flex-col">
        {seasonPredictions.map((prediction) => (
          <PredictionCategory key={prediction.id} {...prediction} />
        ))}
      </div>
    </main>
  );
}
