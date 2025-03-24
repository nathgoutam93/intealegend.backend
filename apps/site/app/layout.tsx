import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TanstackQueryClientProvider from "@/components/QueryClientProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InTeaLegend - Premium Tea Trading Marketplace",
  description:
    "Connect with verified tea buyers and sellers in the world's most secure tea trading platform. Experience regulated, fraud-free transactions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TanstackQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </TanstackQueryClientProvider>
  );
}
