import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import PokemonList from "@/Components/pokemonCard/PokemonList";
const Task4 = () => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between bg-slate-200 p-24 ${inter.className}`}
    >
      <h2 className="flex items-center p-5 text-xl text-black">Pokemon</h2>
      <PokemonList />
    </div>
  );
};

export default Task4;
