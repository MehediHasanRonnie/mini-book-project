// import { ReactNode, createContext, useContext, useReducer } from "react";

// type counterState = {
//   count: number;
// };
// type counterAction =
//   | { type: "increment" }
//   | { type: "decrement" }
//   | { type: "reset" };

// const initialState: counterState = {
//   count: 0,
// };

// const CountContext = createContext<{
//   state: counterState;
//   dispatch: React.Dispatch<counterAction>;
// }>({
//   state: initialState,
//   dispatch: () => null,
// });
// export const useCount = () => {
//   const context = useContext(CountContext);
//   return context;
// };
// export const Countcontextcomponemt = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   const reducer = (
//     state: counterState,
//     action: counterAction
//   ): counterState => {
//     switch (action.type) {
//       case "increment":
//         return { ...state, count: state.count + 1 };
//       case "decrement":
//         return { ...state, count: state.count - 1 };
//       case "reset":
//         return { ...state, count: 0 };
//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <CountContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CountContext.Provider>
//   );
// };
