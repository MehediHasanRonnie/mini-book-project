import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { useQuery } from "@tanstack/react-query";
import { pokemonData } from "@/services/pokemon.services";
import { QueryKeys } from "@/Enums";

export const useSets = () => {
  return useQuery<PokemonTCG.Set[]>({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await pokemonData();
      return sets;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    enabled: true,
    retry: 5,
  });
};
