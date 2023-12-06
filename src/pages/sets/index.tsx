import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { pokemonData } from "@/services/pokemon.services";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";
import { QueryClient, DehydratedState, dehydrate } from "@tanstack/react-query";
import { QueryKeys } from "@/Enums";
import { useSets } from "@/reactQueryHooks";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<{ props: { dehydratedState: DehydratedState } }> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await pokemonData();
      return sets;
    },
  });
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

const SetData = () => {
  const setObject = useSets();
  console.log(setObject);
  //console.log(sets.dehydratedState.queries);
  if (!setObject) {
    return (
      <div
        className={`flex min-h-screen flex-col items-center justify-between bg-slate-100 p-24`}
      >
        Loading....
      </div>
    );
  }

  return (
    <div className=" p-20 grid grid-cols-3 bg-slate-100">
      {setObject.data?.map((x, index) => {
        return (
          <div
            key={x.id + index}
            className=" max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow"
          >
            <Link href={`/sets/${x.id}`}>
              <div className="relative flex justify-center w-[200px] h-[150px]">
                <Image src={x.images.logo} alt={x.name + "images"} fill />
              </div>
            </Link>
            <div className=" ml-3 mb-3 overflow-y-auto">
              <h2 className="text-xl mt-2 font-bold">Name: {x.name}</h2>
              <h3>Series: {x.series}</h3>
              <h3>Update: {x.updatedAt}</h3>
              <h3>Printed Total: {x.printedTotal}</h3>
              <h3>Release Date: {x.releaseDate}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ): Promise<{ props: { _sets: PokemonTCG.Set[] } }> => {
//   console.log(context.query);
//   const data = await pokemonData();
//   //console.log(data);
//   return {
//     props: {
//       _sets: data,
//     },
//   };
// };

// const SetData = (props: { _sets: PokemonTCG.Set[] }) => {
//   const [sets, setSetsData] = useState<PokemonTCG.Set[]>(props._sets);
//   //console.log(props);

//   useEffect(() => {
//     if (!props._sets) {
//       pokemonData().then((data) => {
//         setSetsData(data);
//       });
//     }
//   }, [props._sets]);

//   if (!sets) {
//     return (
//       <div
//         className={`flex min-h-screen flex-col items-center justify-between bg-slate-100 p-24`}
//       >
//         Loading....
//       </div>
//     );
//   }

//   return (
//     <div className=" p-20 grid grid-cols-3 bg-slate-100">
//       {sets?.map((x) => {
//         return (
//           <div
//             key={x.id}
//             className=" max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow"
//           >
//             <Link href={`/sets/${x.id}`}>
//               <div className="relative flex justify-center w-[200px] h-[150px]">
//                 <Image src={x.images.logo} alt={x.name + "images"} fill />
//               </div>
//             </Link>
//             <div className=" ml-3 mb-3 overflow-y-auto">
//               <h2 className="text-xl mt-2 font-bold">Name: {x.name}</h2>
//               <h3>Series: {x.series}</h3>
//               <h3>Update: {x.updatedAt}</h3>
//               <h3>Printed Total: {x.printedTotal}</h3>
//               <h3>Release Date: {x.releaseDate}</h3>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default SetData;
