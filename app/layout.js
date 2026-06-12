import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ballknowledge",
  description: "Prove who actually knows football.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-[430px] flex-col bg-[#0a0a0a] pb-16 sm:border-x sm:border-[#222222]">
          <Header />
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
