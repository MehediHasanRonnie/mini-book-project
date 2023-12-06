import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
export const PokemonInfo = ({ info }: { info: Partial<PokemonTCG.Set> }) => {
  const { name, series, updatedAt, printedTotal, total, releaseDate } = info;
  return (
    <div className=" ml-3 mb-3 overflow-y-auto">
      <h2 className="text-xl mt-2 font-bold">Name: {name}</h2>
      <h3>Series: {series}</h3>
      <h3>Update: {updatedAt}</h3>
      <h3>Printed Total: {printedTotal}</h3>
      <h3>Total: {total}</h3>
      <h3>Release Date: {releaseDate}</h3>
    </div>
  );
};
