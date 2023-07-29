import Navbar from "@/components/Navbar";
import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizmify",
  description: "A generative App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialised min-h-screen pt-16")}>
        <Providers>
            <Navbar />
        {children}
          </Providers>
      
      </body>
    </html>
  );
}
