"use client";

import React, { FormEvent, useState } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const create = async (e: FormEvent) => {
    e.preventDefault();
    console.log("sending to backend", title, content);

    const response = await fetch("http://localhost:3001/api/notes/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    console.log(response);

    setContent("");
    setTitle("");
  };

  return (
    <form onSubmit={(e) => create(e)}>
      <label htmlFor="title">Enter the title</label>
      <input
        className="text-black"
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">Description</label>
      <textarea
        className="text-black"
        name="content"
        id="content"
        cols={20}
        rows={10}
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="border border-solid border-yellow-300 text-yellow-300 rounded-sm"
      >
        Create
      </button>
    </form>
  );
};

export default CreateNote;
