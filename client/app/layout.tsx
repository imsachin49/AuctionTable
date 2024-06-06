import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const open = Open_Sans({ subsets: ["latin"] });
import SessionWrapper from "@/components/SessionWrapper";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={open.className}>{children}</body>
      </html>
    </SessionWrapper>
  );
}
