import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import ThemeProvider from "@/components/layout/ThemeProvider";

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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full" style={{ background: "var(--bg)", color: "var(--text)" }}>
        <ThemeProvider>
          <div
            className="mx-auto flex min-h-screen max-w-[430px] flex-col pb-28 sm:border-x"
            style={{ background: "var(--bg)", borderColor: "var(--border)" }}
          >
            <Header />
            {children}
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
