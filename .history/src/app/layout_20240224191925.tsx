import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs.org",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  team,
  sns
}: Readonly<{
  children: React.ReactNode
  team: React.ReactNode
  sns: React.ReactNode
}>) {
  const auth = 1
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div style={{height:'100px',background:'#ccc'}}>root-layout</div>
        {children}
        {/* {auth?team:sns} */}
        {sns}
        {team}
      </body>
    </html>
  );
}