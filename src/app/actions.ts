"use server";
import prisma from "@/client";
import { NextResponse } from "next/server";

export async function addImage(data: FormData) {
  const EmailN = data.get("email")?.valueOf() as string;

  const user = await prisma.user.findUnique({
    where: { email: EmailN },
  });
  if (!user) {
    console.log(user);
    console.log(EmailN);
    return "User Not Found";
  }

  const authorId = user?.id as string;
  const title = data.get("title")?.valueOf() as string;
  const content = data.get("content")?.valueOf() as string;
  const url = data.get("image")?.valueOf() as string;

  const post = await prisma.post.create({
    data: {
      title,
      imageUrl: url,
      content,
      author: { connect: { id: authorId } },
    },
  });

  console.log("hi");

  return NextResponse.json(post);
}
