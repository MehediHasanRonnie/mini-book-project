import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { PokemonImage } from "./PokemonImage";
import { PokemonInfo } from "./PokemonInfo";

export const Pokemon = (props: { item: PokemonTCG.Set }) => {
  const { images, ...info } = props.item;
  return (
    <div className="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-md shadow-lg">
      <PokemonImage imgURL={images} />
      <PokemonInfo info={info} />
    </div>
  );
};
