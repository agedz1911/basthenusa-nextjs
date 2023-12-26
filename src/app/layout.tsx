import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nusa kembara",
  description: "PT Bahari anja",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={cn("relative h-full antialiased", inter.className)}>
        <main className="flex flex-col min-h-screen relative">
          <div className="flex-grow flex-1">
            <Navbar />
            {children}
            </div>
        </main>
      </body>
    </html>
  );
}
