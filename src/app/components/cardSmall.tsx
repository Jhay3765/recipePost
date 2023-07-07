type Card = {
  text: string;
  title: string;
};

import { MainButton } from "./mainButton";

export const CardSmall = () => {
  return (
    <div className="bg-slate-100 rounded-3xl">
      <img src="panCake.png" />
      <h2 className="text-xl font-bold ml-6 mt-4">Waffles</h2>
      <p className="text-sm ml-6 max-w-sm">
        Receita bacana pra comer com os amigos de manhã.
      </p>
      <MainButton text="Ver receita" />
    </div>
  );
};
