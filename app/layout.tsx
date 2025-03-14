import type { Metadata } from "next";
import { Farro, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/common/Loader";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const PlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});
const Farros = Farro({
  variable: "--font-farro",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "United Premium",
  description: "United Premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PlusJakartaSans.className} ${geistMono.variable} ${Farros.variable} antialiased`}
      ><PageLoader/>
        {children}
      </body>
    </html>
  );
}
