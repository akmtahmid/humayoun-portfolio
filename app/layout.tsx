import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akm Humayoun Alom | AKM HUMAYOUN",
  description:
    "Premium dark developer portfolio for Akm Humayoun Alom, Full Stack Developer, Expert Next.js Developer, Web Designer, and WordPress Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#09090f] text-white">
        <div className="relative flex min-h-full flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
