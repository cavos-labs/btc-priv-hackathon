import type { Metadata } from "next";
import { romagothicbold, geist } from "@/lib/fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "BTC Privacy Hackathon | Costa Rica",
  description: "Construye aplicaciones de Bitcoin y Privacidad en Starknet. Hackathon en Costa Rica - Colaboración entre Starknet Foundation y Cavos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${romagothicbold.variable} ${geist.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

