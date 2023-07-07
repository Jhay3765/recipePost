"use client";

import { signIn } from "next-auth/react";

export default function SignInn() {
  return (
    <>
      <form>
        <input type="email" />
        <input type="password" />
        <input type="submit" />
      </form>
      <h1>HELLOOOOOOOOOOO</h1>
      <button onClick={() => signIn()}>Login</button>
    </>
  );
}
