import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Form } from "@/Components/form/Form";
const Task2 = () => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between bg-slate-200 p-24 ${inter.className}`}
    >
      {/* Signup / SignIn Application */}
      <h2 className="flex items-center p-10 text-xl mb-1 text-black">
        SignUp / SignIn
      </h2>
      <Form />
    </div>
  );
};

export default Task2;
