

import { MainButton } from "./mainButton";

export const CardLarge = () => {
  return (
    <div className="flex bg-slate-300 rounded-3xl w-fit gap-5 max-h-72">
      <img src="Donut.png" className="flex-grow-2"></img>
      <div className="ml-8 mt-8">
        <h1 className="text-xl font-bold  ">Donut</h1>
        <p className="text-sm mt-8 max-w-screen-sm">
          Donuts caseiros irresistíveis com massa macia e coberturas deliciosas.
        </p>
        <MainButton text="See Recipe" />
      </div>
    </div>
  );
};
