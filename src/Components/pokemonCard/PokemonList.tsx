import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { pokemonData } from "@/services/pokemon.services";
import { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";
const PokemonList = () => {
  const [pokemonCard, setPokemonCard] = useState<PokemonTCG.Set[]>([]);
  useEffect(() => {
    pokemonData().then((data) => {
      setPokemonCard(data);
    });
  }, []);
  return (
    <div className=" py-20 grid grid-cols-3">
      {pokemonCard.map((item, index) => (
        <Pokemon item={item} key={index} />
      ))}
    </div>
  );
};
export default PokemonList;
