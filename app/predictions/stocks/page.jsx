import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import StockPicker from "@/components/predictions/StockPicker";

export default function PlayerStocksPage() {
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
          Player Stocks
        </h1>
        <p className="text-sm text-zinc-400">
          Pick 5 players to &quot;invest&quot; in this season. Their goals,
          assists, trophies and more feed your stock value.
        </p>
      </div>

      <StockPicker />
    </main>
  );
}
