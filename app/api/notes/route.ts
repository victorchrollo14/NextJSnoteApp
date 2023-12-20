import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const notes = await prisma.notes.findMany();
    console.log(notes.length);

    if (notes.length < 2) return Response.json({ error: "Not notes found" });
    return Response.json(notes);
  } catch (err) {
    console.log(err);
    Response.json({ error: "Internal server Error" });
  }
}
