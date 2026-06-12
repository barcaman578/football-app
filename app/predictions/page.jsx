import {
  shortTermPredictions,
  mediumTermPredictions,
  seasonPredictions,
} from "@/lib/mockData";
import PredictionCategory from "@/components/predictions/PredictionCategory";
import PredictionTierCard from "@/components/predictions/PredictionTierCard";

export default function PredictionsPage() {
  const seasonPoints = seasonPredictions.reduce((sum, p) => sum + p.points, 0);

  return (
    <main className="flex flex-1 flex-col gap-6 px-4 py-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">Predictions</h1>
        <p className="text-sm text-zinc-400">
          Pick from real, pre-written options — every pick counts toward your
          season points.
        </p>
      </div>

      <section>
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-400">
          This Week
        </h2>
        <div className="flex flex-col gap-2">
          {shortTermPredictions.map((prediction) => (
            <PredictionCategory key={prediction.id} {...prediction} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-400">
          This Quarter
        </h2>
        <div className="flex flex-col gap-2">
          {mediumTermPredictions.map((prediction) => (
            <PredictionCategory key={prediction.id} {...prediction} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-400">
          Season-Long
        </h2>
        <PredictionTierCard
          href="/predictions/season"
          title="Season Predictions"
          description={`${seasonPredictions.length} categories · Cup winners, top scorer & more`}
          points={`${seasonPoints} pts`}
        />
      </section>

      <section>
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-400">
          Profile-Linked
        </h2>
        <PredictionTierCard
          href="/predictions/stocks"
          title="Player Stocks"
          description='Pick 5 players to "invest" in this season'
          points="Bonus pts"
        />
      </section>
    </main>
  );
}
