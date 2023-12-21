import { note } from "../page";
import { Note } from "@/components/Note";
import { Edit } from "./Edit";

const getNotes = async (noteId: any) => {
  try {
    const res = await fetch(`http://localhost:3001/api/notes/${noteId}`, {
      cache: "no-cache",
    });
    const data = await res.json();

    if (res.status !== 200) return null;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const NotePage = async ({ params }: any) => {
  const noteId = params.id;
  const note: note = await getNotes(noteId);

  return (
    <>
      {!note && (
        <p className="font-bold font-mono text-5xl text-red-500 text-center mt-40">
          404 | Note Not Found
        </p>
      )}
      {note && (
        <>
          <h1 className="font-mono font-bold text-4xl">Notes/{noteId}</h1>
          <Note key={note.id} note={note} />
          <Edit note={note}/>
        </>
      )}
    </>
  );
};

export default NotePage;
