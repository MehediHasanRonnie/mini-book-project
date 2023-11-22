import { BookList } from "@/Components/BookList";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h2 className="flex items-center p-10 bg-blue-500 text-xl text-white">
        Mini Book Project
      </h2>
      <BookList />
    </main>
  );
}
