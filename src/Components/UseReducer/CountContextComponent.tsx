// import { Count } from "@/types";
// import React, { Context, ReactNode, createContext, useReducer } from "react";

// export const CountContext = createContext<Count>({
//   count: 0,
//   dispatchCount: (value: string) => {},
// });

// const CountContextComponent = ({ children }: { children: ReactNode }) => {
//   const countReducer = (state: Count, action: string) => {
//     switch (action) {
//       case "increment":
//         return { ...state, count: state.count + 1 };
//       case "decrement":
//         return { ...state, count: state.count - 1 };
//       default:
//         return state;
//     }
//   };

//   const [count, dispatchCount] = useReducer(countReducer, {
//     count: 0,
//     dispatchCount: (value: string) => {},
//   });

//   return (
//     <CountContext.Provider value={{count: count.count, dispatchCount}}>
//       {children}
//     </CountContext.Provider>
//   );
// };

// export default CountContextComponent;
