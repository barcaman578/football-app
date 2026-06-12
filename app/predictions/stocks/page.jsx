import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import StockPicker from "@/components/predictions/StockPicker";

export default function PlayerStocksPage() {
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
          Player stocks
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-2)" }}>
          Pick 5 players to &quot;invest&quot; in this season. Their goals, assists, trophies and more feed your stock value.
        </p>
      </div>
      <StockPicker />
    </main>
  );
}
