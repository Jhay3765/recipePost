import prisma from "@/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { LoginButton, LogoutButton } from "../api/auth";
import { fetchData } from "./components/fetch";

//create post

async function createPost(data: FormData) {
  "use server";
  const session = await getServerSession(authOptions);
  if (!session) {
    return "No Session found";
  }
  const EmailN = session?.user?.email as string;
  const user = await prisma.user.findUnique({
    where: { email: EmailN },
  });

  const authorId = user?.id as string;

  const title = data.get("title")?.valueOf() as string;
  const content = data.get("content")?.valueOf() as string;

  const post = await prisma.post.create({
    data: {
      title,
      imageUrl: "",
      content,
      author: { connect: { id: authorId } },
    },
  });

  console.log("hi");
}

export default async function Testy() {
  const session = await getServerSession(authOptions);
  const posts = await prisma.post.findMany();

  return (
    <div>
      <form action={createPost}>
        <input type="text" name="title" />
        <input type="text" name="content" />
        <button type="submit">Submit</button>
      </form>
      ;
      <LoginButton />
      <LogoutButton />
      <h1>{JSON.stringify(session)}</h1>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
