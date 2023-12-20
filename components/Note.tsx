import React from "react";
import Link from "next/link";
import { note } from "@/app/notes/page";

interface props {
  key: string;
  note: note;
}

const Note: React.FC<props> = ({ note }) => {
  const { id, title, description, time } = note;
  return (
    <Link href={`/notes/${id}`}>
      <li className="bg-yellow-400 min-h-[200px] min-w-[300px] w-max text-black p-5 relative">
        <h1 className="font-serif font-bold text-xl">{title}</h1>
        <h2 className="font-sans">{description}</h2>
        <h5 className="absolute bottom-5">{time.toLocaleString()}</h5>
      </li>
    </Link>
  );
};

export { Note };
