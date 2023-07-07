"use client";
import { useState } from "react";

export const MakePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleContentChange = (e: React.FormEvent<HTMLInputElement>) => {
    setContent(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handle form submission, e.g., send the data to the server or perform any other actions

    // Reset the form fields
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTitleChange} />
      <input type="text" value={content} onChange={handleContentChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};
