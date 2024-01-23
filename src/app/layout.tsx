import Footer from "@/components/footer/Footer";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { EdgeStoreProvider } from "@/lib/edgestore";

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
            <EdgeStoreProvider>{children}</EdgeStoreProvider>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
