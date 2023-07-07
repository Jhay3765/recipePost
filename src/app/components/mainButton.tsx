"use client";
type button = {
  text: string;
};

export const MainButton = (params: button) => {
  return (
    <button
      className="font-bold  bg-yellow-300 text-sm py-1 px-5 rounded-full mt-4 mb-4 ml-4 "
      onClick={() => console.log("hello")}
    >
      {params.text}
    </button>
  );
};
