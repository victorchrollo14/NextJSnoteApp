import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const notes = await prisma.notes.findMany();

    if (!notes) return Response.json({ error: "Notes Not Found" });
    return Response.json(notes);
  } catch (err) {
    console.log(err);
    Response.json({ error: "Internal server Error" });
  }
}

export { prisma };
