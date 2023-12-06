// import { useReducer } from "react";

// interface State {
//   count: number;
// }
// // interface Action {
// //   type: "increment";
// //   type: "decrement";
// //   type: "reset";
// // }

// const reducer = (
//   state: State,
//   action: {
//     increment: "increment";
//     decrement: "decrement";
//     reset: "reset";
//   }
// ): State => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };
//     default:
//       return state;
//   }
// };
// const CountReducer: React.FC = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   const increment = () => {
//     dispatch({ increment: "increment" });
//   };

//   const decrement = () => {
//     dispatch({ decrement: "decrement" });
//   };
//   const reset = () => {
//     dispatch({ reset: "reset" });
//   };
//   return (
//     <div className="bg-white shadow-lg rounded-md px-8 pt-6 pb-8 mb-4">
//       <h1 className="flex justify-center items-center mb-4 font-bold ">
//         Count Application
//       </h1>
//       <p className="flex justify-center items-center mb-4 font-bold ">
//         Count:{state.count}
//       </p>
//       <button
//         onClick={increment}
//         className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
//       >
//         Increment
//       </button>
//       <button
//         onClick={decrement}
//         className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
//       >
//         Decrement
//       </button>
//       <button
//         onClick={reset}
//         className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
//       >
//         Reset
//       </button>
//     </div>
//   );
// };

// export default CountReducer;
