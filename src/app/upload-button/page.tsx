"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import "@uploadthing/react/styles.css";
import { useEffect } from "react";
import { addImage } from "../actions";
import { useState } from "react";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";

export default function UploadButtonPage(createPost: any) {
  const [email, setEmail] = useState("");
  const [myurl, setUrl] = useState("");
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  const handleInputChange = (event: any) => {
    setUrl(event.target.value);
  };
  useEffect(() => {
    console.log("myurl updated:", myurl);
  }, [myurl]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{JSON.stringify(session?.user)} </h1>
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res !== undefined && res.length > 0) {
            // Accessing the first element in the array
            const firstElement = res[0];
            const fileUrl = firstElement.fileUrl;
            const fileKey = firstElement.fileKey;
            console.log(fileUrl);
            setUrl(fileUrl);
            //sendData(fileUrl, fileKey);
          } else {
            // Handling the case when 'res' is undefined or empty
            console.log("No data available.");
          }
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <form action={addImage}>
        <input type="text" name="title" />
        <input type="text" name="email" value={email} />
        <input type="text" name="content" />
        <input
          type="text"
          value={myurl}
          onChange={handleInputChange}
          name="image"
        />
        <button type="submit" className="bg-red-500 p-4">
          Upload To server
        </button>
      </form>
      <button
        className="p-4 bg-blue-950"
        onClick={() => setEmail(session?.user?.email as string)}
      >
        set email
      </button>
      <h1>{myurl}</h1>
    </main>
  );
}
