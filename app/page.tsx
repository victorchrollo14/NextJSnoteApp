import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl text-center w-1/2 font-serif font-bold">
        Welcome to Notes app built with Next.js
      </h1>
    </main>
  );
}
