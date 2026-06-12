import { shortTermPredictions, mediumTermPredictions, seasonPredictions } from "@/lib/mockData";
import PredictionCategory from "@/components/predictions/PredictionCategory";
import PredictionTierCard from "@/components/predictions/PredictionTierCard";

export default function PredictionsPage() {
  return (
    <main className="flex flex-1 flex-col px-4 pb-6" style={{ paddingTop: "48px" }}>
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-4)" }}>
        Points up for grabs
      </p>
      <h1
        className="mb-6 font-extrabold"
        style={{ fontSize: "38px", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--text)" }}
      >
        Predictions
      </h1>

      <section className="mb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-3)" }}>
          This week
        </p>
        {shortTermPredictions.map((prediction) => (
          <PredictionCategory key={prediction.id} {...prediction} />
        ))}
      </section>

      <section className="mb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-3)" }}>
          This quarter
        </p>
        {mediumTermPredictions.map((prediction) => (
          <PredictionCategory key={prediction.id} {...prediction} />
        ))}
      </section>

      <section className="mb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-3)" }}>
          Season-long
        </p>
        <PredictionTierCard
          href="/predictions/season"
          title="Season predictions"
          description={`${seasonPredictions.length} categories · Cup winners, top scorer & more`}
          points={`${seasonPredictions.reduce((s, p) => s + p.points, 0)} pts`}
        />
      </section>

      <section>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-3)" }}>
          Profile-linked
        </p>
        <PredictionTierCard
          href="/predictions/stocks"
          title="Player stocks"
          description="Pick 5 players to &quot;invest&quot; in this season"
          points="Bonus pts"
        />
      </section>
    </main>
  );
}
