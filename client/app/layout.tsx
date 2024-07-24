import type { Metadata } from "next";
import { SessionProviderWrapper } from "@/components/providers/session-provider";
import { SWRProvider } from "@/components/providers/swr-provider";
import { SocketProvider } from "@/components/providers/socket-provider";
import "./globals.css";
import { Exo_2 } from "next/font/google";

const exo = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AuctionTable",
  description:
    "AuctionTable is a one stop solution to all your realtime auction needs",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProviderWrapper>
      <SWRProvider>
        <SocketProvider>
          <html lang="en">
            <body className={exo.className}>{children}</body>
          </html>
        </SocketProvider>
      </SWRProvider>
    </SessionProviderWrapper>
  );
}
