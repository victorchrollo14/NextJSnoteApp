interface notes {
  id: string;
  title: string;
  description: string;
  time: Date;
}

const getNotes = async () => {
  const res = await fetch("http://localhost:3001/api/notes");
  const data = await res.json();
  return data;
};

export default async function NotesPage() {
  const notes: notes[] = await getNotes();

  console.log(notes);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes &&
          notes?.map((note) => (
            <li key={note.id}>
              <span>title: {note.title}</span> <br />
              <span>description: {note.description}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
