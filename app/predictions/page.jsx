import { shortTermPredictions, mediumTermPredictions, seasonPredictions } from "@/lib/mockData";
import PredictionCategory from "@/components/predictions/PredictionCategory";
import PredictionTierCard from "@/components/predictions/PredictionTierCard";

export default function PredictionsPage() {
  const seasonPoints = seasonPredictions.reduce((sum, p) => sum + p.points, 0);

  return (
    <main className="flex flex-1 flex-col px-4 py-5">
      <p className="mb-1 text-[11px] font-black uppercase tracking-widest" style={{ color: "#888888" }}>Points up for grabs</p>
      <h1 className="mb-5 text-2xl font-black uppercase tracking-tight text-white">
        <span style={{ color: "#00ff87", marginRight: "6px" }}>|</span>Predictions
      </h1>

      <section className="mb-6">
        <p className="mb-3 text-[11px] font-black uppercase tracking-widest" style={{ color: "#888888" }}>This week</p>
        {shortTermPredictions.map((prediction) => (
          <PredictionCategory key={prediction.id} {...prediction} />
        ))}
      </section>

      <section className="mb-6">
        <p className="mb-3 text-[11px] font-black uppercase tracking-widest" style={{ color: "#888888" }}>This quarter</p>
        {mediumTermPredictions.map((prediction) => (
          <PredictionCategory key={prediction.id} {...prediction} />
        ))}
      </section>

      <section className="mb-6">
        <p className="mb-3 text-[11px] font-black uppercase tracking-widest" style={{ color: "#888888" }}>Season-long</p>
        <PredictionTierCard
          href="/predictions/season"
          title="Season Predictions"
          description={`${seasonPredictions.length} categories · Cup winners, top scorer & more`}
          points={`${seasonPoints} pts`}
        />
      </section>

      <section>
        <p className="mb-3 text-[11px] font-black uppercase tracking-widest" style={{ color: "#888888" }}>Profile-linked</p>
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
