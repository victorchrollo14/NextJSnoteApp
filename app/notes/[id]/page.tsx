import { note } from "../page";
import { Note } from "@/components/Note";

const getNotes = async (noteId: any) => {
  try {
    const res = await fetch(`http://localhost:3001/api/notes/${noteId}`);
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
      {note && (
        <>
          <h1 className="font-mono font-bold text-4xl">Notes/{noteId}</h1>
          <Note key={note.id} note={note} />
          <div className="mt-2">
            <button className="edit bg-yellow-400 text-black mr-3">edit</button>
            <button className="delete bg-red-600">delete</button>
          </div>
        </>
      )}
    </>
  );
};

export default NotePage;
