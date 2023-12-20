import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next notes app",
  description: "notes app created using next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="m-5 flex justify-center items-center  gap-5 font-medium text-xl">
          <Link href={"/"} className="hover:underline hover:text-red-400">Home</Link>
          <Link href={"/notes"} className="hover:underline hover:text-red-400" >Notes</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
