//import { BookList } from "@/Components/BookList";
//import { Form } from "@/Components/form/Form";
//import { Counter } from "@/Components/counterApp/Counter";
//import { Countcontextcomponemt } from "@/Components/counterApp/Countprovider";
import PokemonList from "@/Components/pokemonCard/PokemonList";
//import CountReducer from "@/Components/countApplication/CountReducer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-slate-100 p-24 ${inter.className}`}
    >
      {/* Booklist Application */}
      {/* <h2 className="flex items-center p-10 bg-blue-500 text-xl text-white">
        Mini Book Project
      </h2>
      <BookList /> */}
      {/* Signup / SignIn Application */}
      {/* <h2 className="flex items-center p-10 text-xl mb-1 text-black">
        SignUp / SignIn
      </h2>
      <Form /> */}
      {/* counter Application */}
      {/* <Countcontextcomponemt>
        <div>
          <Counter />
        </div>
      </Countcontextcomponemt> */}
      {/* <CountReducer /> */}
      {/* <h2 className="flex items-center p-5 text-xl text-black">Pokemon</h2>
      <PokemonList /> */}
    </main>
  );
}
