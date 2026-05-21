import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akm Humayoun Alom | AKM HUMAYOUN",
  description:
    "Dark modern portfolio for Akm Humayoun Alom, Full Stack Web App Developer, Expert Next.js Developer, Web Designer, and WordPress Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <div className="site-stage relative flex min-h-full flex-col">
          <div className="pointer-events-none fixed inset-x-0 top-24 z-0 mx-auto h-64 w-64 rounded-full bg-violet-600/18 blur-3xl animate-glow-pulse" />
          <div className="pointer-events-none fixed right-0 top-1/3 z-0 h-72 w-72 rounded-full bg-blue-500/14 blur-3xl animate-glow-pulse animation-delay-300" />
          <Navbar />
          <div className="relative z-10 flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
