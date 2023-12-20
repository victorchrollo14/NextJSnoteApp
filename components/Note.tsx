import React from "react";

interface props {
  id: string;
  title: string;
  description: string;
  time: Date;
}

const Note: React.FC<props> = ({ id, title, description, time }) => {
  return (
    <li
      key={id}
      className="bg-yellow-400 min-h-[200px] min-w-[300px] w-max text-black p-5 relative"
    >
      <h1 className="font-serif font-bold text-xl">{title}</h1>
      <h2 className="font-sans">{description}</h2>
      <h5 className="absolute bottom-5">{time.toLocaleString()}</h5>
    </li>
  );
};

export { Note };
