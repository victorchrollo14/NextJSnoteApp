import { prisma } from "../route";

export const PATCH = async (req: Request) => {
  try {
    const { id, title, description } = await req.json();

    if (!id || !title)
      return new Response(
        JSON.stringify({
          error: "Invalid Inputs",
          message: "Null values not allowed for title and noteId",
        }),
        { status: 400 }
      );

    const updateNote = await prisma.notes.update({
      where: {
        id: Number(id),
      },
      data: {
        title: title,
        description: description,
      },
    });

    return new Response(
      JSON.stringify({ success: true, message: "update succesfull" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
