import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export const pokemonData = async () => {
  const data = await PokemonTCG.getAllSets();
  return data;
};

export const pokemonDataById = async (id: string) => {
  const data = await PokemonTCG.findSetByID(id);
  return data;
};
