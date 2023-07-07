import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <img className="absolute -z-10 left-96" src="plate2.png" alt="" />
      <img className="absolute -z-10" src="plate1.png" alt="" />
      <img className="w-48 mx-auto" src="logo.png" alt="" />
      <h1 className="font-medium text-xl text-center my-10">
        Welcome to Food It
      </h1>
      <div className="text-orange-400 flex flex-col gap-10 text-center">
        <Link
          className="border-orange-400 border-2 rounded-full px-36 py-4 font-bold text-sm"
          href={"/"}
        >
          I'm a New User
        </Link>
        <Link
          className="border-orange-400 border-2 rounded-full px-36 py-4 font-bold text-sm"
          href={"/"}
        >
          I'm Already a User
        </Link>
        <Link
          className="border-orange-400 border-2 rounded-full px-36 py-4 font-bold text-sm"
          href={"/"}
        >
          Show me some Cake
        </Link>
        <img
          className="absolute -z-10 left-60 top-96 "
          src="strawberry.png"
          alt=""
        />
      </div>
    </>
  );
}
