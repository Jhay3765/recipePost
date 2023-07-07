import Link from "next/link";
import { CardSmall } from "./components/cardSmall";
import { CardLarge } from "./components/cardLarge";

export default async function Home() {
  return (
    <>
      <div className="bg-yellow-300 h-5"></div>
      <div>
        <Link href="/upload-button">UpLoad Button</Link>
        <Link href="/test">Test</Link>
        <Link href="/upload-dnd">Drag and Drop</Link>
      </div>
      <header className=" container mx-auto flex gap-20 justify-center text-base items-center">
        <Link href="/" className="px-2 py-6 font-bold">
          Home
        </Link>
        <Link href="/" className="px-2 py-6 font-bold">
          Share
        </Link>
        <Link href="/" className="px-2 py-6 font-bold">
          Account
        </Link>
        <div className="bg-slate-200 rounded-full flex items-center gap-3 pl-10 py-2 justify-center">
          <img className="" src="Glass.png" />
          <input
            className="bg-slate-200 text-sm"
            type="text"
            placeholder="Search for Food"
          />
        </div>
      </header>
      <section
        className="h-60 background-fill"
        style={{ backgroundImage: "url('/Banner.png')" }}
      >
        <h1 className="text-white text-xl text-center pt-10 max-w-7xl font-bold mx-auto">
          Inspire-se, cozinhe com paixão e saboreie momentos inesquecíveis à
          mesa.
        </h1>
      </section>
      <h1 className=" text-center text-xl font-bold py-7 ">
        Show off your style
      </h1>
      <section className="flex gap-6 justify-center ">
        <CardSmall />
        <CardSmall />
        <CardSmall />
      </section>
      <h2 className="text-xl font-bold text-center pt-10 pb-4 ">
        Recent Recipes
      </h2>
      <section className="flex flex-col gap-12 items-center">
        <CardLarge />
        <CardLarge />
        <CardLarge />
      </section>
      <footer className="bg-yellow-300  mt-20 text-center flex justify-center">
        <div className="ml-20 flex gap-48 font-bold text-sm py-5">
          <h1 className="mt-12 mb-10 text-xl font-bold">Delícias à Mesa</h1>
          <div className="flex flex-col justify-center items-center">
            <p>Our Socials:</p>
            <img src="Icons.png" />
          </div>
        </div>
      </footer>
    </>
  );
}
