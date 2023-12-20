import { prisma } from "../route";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const note = await prisma.notes.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!note)
      return new Response(JSON.stringify({ error: "note Not Found" }), {
        status: 404,
      });

    return Response.json(note);
  } catch (error) {
    console.log(error);
    new Response(JSON.stringify({ error: "internal server error" }), {
      status: 500,
      statusText: "error",
    });
  }
}
