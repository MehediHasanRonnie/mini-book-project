import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  editSetName,
  pokemonData,
  pokemonDataById,
} from "@/services/pokemon.services";
import { QueryKeys } from "@/Enums";
import { useRouter } from "next/router";
//code( custome hooks) for network call using react query for all sets..
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
//custom hooks for updating single data..
export const useSet = () => {
  const router = useRouter();
  const id = router.query.setid as string;
  return useQuery<PokemonTCG.Set>({
    queryKey: [QueryKeys.CardSets, id],
    queryFn: async () => {
      const set = await pokemonDataById(id);
      return set;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    enabled: true,
    retry: 5,
  });
};
// mutation code for mutation data....
// export const useUpdateSetName = (initialSets?: PokemonTCG.Set[]) => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({ setid, setName }: { setid: string; setName: string }) =>
//       editSetName(setid, setName),
//     onSuccess: (data, variable) => {
//       console.log("successful");
//       queryClient.setQueryData([QueryKeys.CardSets], () => {
//         let foundSet = initialSets?.find((set) => set.id === variable.setid);
//         console.log(foundSet, "founded set");
//         if (foundSet) {
//           foundSet.name = variable.setName;
//         }
//         return initialSets;
//       });
//     },
//     //QueryClient.invalidateQueries({QueryKeys:[QueryKeys.CardSets]});
//     onError: (err) => {
//       console.log(err);
//     },
//   });
// };
