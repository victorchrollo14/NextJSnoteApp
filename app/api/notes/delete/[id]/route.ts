import { prisma } from "../../route";

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = Number(params.id);
    const deleteNote = await prisma.notes.delete({
      where: {
        id: id,
      },
    });
    console.log(deleteNote);

    return new Response(
      JSON.stringify({ message: "note Deleted successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
