import { Note } from "../../components/Note";
import CreateNote from "./CreateNote";

interface notes {
  id: string;
  title: string;
  description: string;
  time: Date;
}

const getNotes = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/notes", {
      cache: "no-cache",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function NotesPage() {
  const notes: notes[] = await getNotes();

  console.log(notes);

  return (
    <div>
      <h1>Notes</h1>
      <div className="items flex flex-row">
        <div className="mt-20 w-1/4">
          <h1 className="font-mono font-medium text-xl bg-yellow-300 text-black px-2 w-fit">
            Create new Note
          </h1>
          <CreateNote />
        </div>
        <ul className="flex flex-row flex-wrap justify-center items-center gap-2 w-3/4 h-auto">
          {notes &&
            notes?.map((note) => (
              <Note
                id={note.id}
                title={note.title}
                description={note.description}
                time={note.time}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
