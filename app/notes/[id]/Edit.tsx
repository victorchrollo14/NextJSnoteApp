"use client";

import React, { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CustomModal } from "@/components/Alert";

const Edit = ({ note }: { note: any }) => {
  const router = useRouter();
  const titleRef = useRef(note.title);
  const descriptionRef = useRef(note.description);
  const [message, setMessage] = useState<string | null>();
  const [edit, setEdit] = useState<boolean>(false);

  const remove = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3001/api/notes/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      data.message && setMessage(data.message);

      setTimeout(() => {
        res.ok && router.refresh();
      }, 2000);
    } catch (err) {
      console.log(err);
      setMessage(err as string);
    }
  };

  const update = async (e: FormEvent, note: any) => {
    e.preventDefault();
    try {
      const id = note.id;
      const title = titleRef.current.value;
      const description = descriptionRef.current.value;
      console.log(title, description);

      const res = await fetch("http://localhost:3001/api/notes/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, title, description }),
      });
      const data = await res.json();

      if (data.message) {
        setEdit(false);
      }

      res.ok && router.refresh();
    } catch (err) {
      console.log(err);
      setMessage(err as string);
    }
  };

  return (
    <>
      <div className="mt-2">
        <button
          className="edit bg-yellow-400 text-black mr-3"
          onClick={() => setEdit(!edit)}
        >
          edit
        </button>
        <button className="delete bg-red-600" onClick={() => remove(note.id)}>
          delete
        </button>
      </div>

      {edit && (
        <form onSubmit={(e) => update(e, note)}>
          <input
            type="text"
            className="text-black"
            required
            ref={titleRef}
            placeholder={note.title}
          />
          <textarea
            className="text-black"
            cols={30}
            rows={5}
            required
            ref={descriptionRef}
            placeholder={note.description}
          />
          <button
            type="submit"
            className="border-solid border border-white text-yellow-400 hover:scale-105"
          >
            update
          </button>
        </form>
      )}

      {message && <CustomModal message={message} setMessage={setMessage} />}
    </>
  );
};

export { Edit };
