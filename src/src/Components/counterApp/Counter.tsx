// import { useCount } from "./Countprovider";

// export const Counter: React.FC = ({}) => {
//   const { state, dispatch } = useCount();

//   return (
//     <div className="bg-white shadow-lg rounded-md px-8 pt-6 pb-8 mb-4">
//       <h1 className="flex justify-center items-center mb-4 font-bold ">
//         Count Application
//       </h1>
//       <h1 className="flex justify-center items-center mb-4 font-bold ">
//         Count: {state.count}
//       </h1>
//       <button
//         className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
//         onClick={() => dispatch({ type: "increment" })}
//       >
//         Increment
//       </button>
//       <button
//         className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
//         onClick={() => dispatch({ type: "decrement" })}
//       >
//         Decrement
//       </button>
//       <button
//         className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
//         onClick={() => dispatch({ type: "reset" })}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };
