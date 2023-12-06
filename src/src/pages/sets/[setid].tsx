import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { pokemonDataById, pokemonData } from "@/services/pokemon.services";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { QueryClient, DehydratedState, dehydrate } from "@tanstack/react-query";
import { QueryKeys } from "@/Enums";
import { useSet } from "@/reactQueryHooks";

export const getStaticPaths: GetStaticPaths = async (qry) => {
  const data = await pokemonData();

  const tempPaths: { params: { setid: string } }[] = data.map((x) => {
    return { params: { setid: x.id } };
  });

  return {
    paths: tempPaths.splice(0, 10),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await pokemonDataById(context.params?.setid as string);
      return sets;
    },
  });
  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 10 };
};

const SetDataByID = () => {
  const { data } = useSet();

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!data)
    return (
      <>
        <div
          className={`flex min-h-screen flex-col items-center justify-between bg-slate-100 p-24`}
        >
          <h2>Something went wrong</h2>
        </div>
      </>
    );
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center bg-slate-100 p-24`}
    >
      <div className="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow">
        <div className="relative flex justify-center w-[200px] h-[150px]">
          <Image src={data.images?.logo} alt={data.name + "images"} fill />
        </div>
        <div className=" ml-3 mb-3 overflow-y-auto">
          <h2 className="text-xl mt-2 font-bold">Name: {data.name}</h2>
          <h3>Series: {data.series}</h3>
          <h3>Update: {data.updatedAt}</h3>
          <h3>Printed Total: {data.printedTotal}</h3>
          <h3>Release Date: {data.releaseDate}</h3>
        </div>
      </div>
    </div>
  );
};
///................getting Data using isr's getStatic props.............

// export const getStaticProps: GetStaticProps = async (context) => {
//   //console.log(context, "context");
//   let data = {};
//   try {
//     data = await pokemonDataById(context.params?.setid as string);
//   } catch (e) {
//     return {
//       props: {},
//       revalidate: 10,
//     };
//   }
//   return {
//     props: { data: data },
//     revalidate: 10,
//   };
// };

// const SetDataByID = ({ data }: { data: PokemonTCG.Set }) => {
//   const router = useRouter();
//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }
//   if (!data)
//     return (
//       <>
//         <div
//           className={`flex min-h-screen flex-col items-center justify-between bg-slate-100 p-24`}
//         >
//           <h2>Something went wrong</h2>
//         </div>
//       </>
//     );
//   return (
//     <div
//       className={`flex min-h-screen flex-col items-center justify-center bg-slate-100 p-24`}
//     >
//       <div className="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow">
//         <div className="relative flex justify-center w-[200px] h-[150px]">
//           <Image src={data.images?.logo} alt={data.name + "images"} fill />
//         </div>
//         <div className=" ml-3 mb-3 overflow-y-auto">
//           <h2 className="text-xl mt-2 font-bold">Name: {data.name}</h2>
//           <h3>Series: {data.series}</h3>
//           <h3>Update: {data.updatedAt}</h3>
//           <h3>Printed Total: {data.printedTotal}</h3>
//           <h3>Release Date: {data.releaseDate}</h3>
//         </div>
//       </div>
//     </div>
//   );
// };
/// ...............getting data using useEffect...........................
// const SetDataByID = () => {
//   const [set, setSet] = useState<PokemonTCG.Set>();
//   const router = useRouter();
//   const setId = router.query.setid as string | string[] | undefined;
//   //console.log(router);

//   // useEffect(() => {
//   //   if (setId !== undefined) {
//   //     pokemonDataById(setId as string).then((data) => {
//   //       setSet(data);
//   //     });
//   //   }
//   // }, [setId]);
//   if (set !== undefined) {
//     return (
//       <div
//         className={`flex min-h-screen flex-col items-center justify-center bg-slate-100 p-24`}
//       >
//         <div className="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow">
//           <div className="relative flex justify-center w-[200px] h-[150px]">
//             <Image src={set.images.logo} alt={set.name + "images"} fill />
//           </div>
//           <div className=" ml-3 mb-3 overflow-y-auto">
//             <h2 className="text-xl mt-2 font-bold">Name: {set.name}</h2>
//             <h3>Series: {set.series}</h3>
//             <h3>Update: {set.updatedAt}</h3>
//             <h3>Printed Total: {set.printedTotal}</h3>
//             <h3>Release Date: {set.releaseDate}</h3>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div
//         className={`flex min-h-screen flex-col items-center justify-between bg-slate-100 p-24`}
//       >
//         Loading...
//       </div>
//     );
//   }
// };

export default SetDataByID;
