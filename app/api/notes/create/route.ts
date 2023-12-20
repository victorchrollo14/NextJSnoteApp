import { Prisma } from "@prisma/client";
import { prisma } from "../route";

export async function POST(req: Request) {
  console.log("working");
  const { title, content } = await req.json()
  console.log(title);

  try {
    const res = await prisma.notes.create({
      data: {
        title: title,
        description: content,
      },
    });

    console.log(res);

    return new Response("updated successfully", { status: 200 });
  } catch (err) {
    Response.error;
  }
}
