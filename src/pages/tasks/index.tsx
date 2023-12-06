import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Task = () => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between bg-slate-200 p-24 ${inter.className}`}
    >
      <ul className="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow">
        <h2>Router Task</h2>
        <li className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
          <Link href="../tasks/task1">Book</Link>
        </li>
        <li className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
          <Link href="../tasks/task2">SignUp/SignIn</Link>
        </li>
        {/* <li className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
          <Link href="../tasks/task3">Counter</Link>
        </li> */}
        <li className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
          <Link href="../tasks/task4">Pokemon</Link>
        </li>
      </ul>
    </div>
  );
};

export default Task;
