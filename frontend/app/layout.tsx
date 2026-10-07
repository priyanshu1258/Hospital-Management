import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components/ui/toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MediQueue — Intelligent Hospital Queue & Patient History System",
  description:
    "Skip the wait. Not the care. An intelligent queue management system for hospitals with priority scheduling, real-time tracking, and comprehensive patient history.",
  keywords: [
    "hospital",
    "queue management",
    "patient history",
    "MediQueue",
    "healthcare",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
