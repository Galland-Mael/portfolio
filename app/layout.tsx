import type { Metadata } from "next";
import {Anek_Telugu, Amarante} from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import {cn} from "@/lib/utils";


const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption"
});

const AmaranteFont = Amarante({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-amarante'
});

export const metadata: Metadata = {
  title: "Maël Galland",
  description: "Mon portfolio en ligne",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"h-full !scroll-smooth"}>
      <body
          className={cn(GeistSans.variable, AnekTelugu.variable, AmaranteFont.variable, "font-sans h-full bg-background text-foreground")}
      >{children}</body>
    </html>
  );
}
