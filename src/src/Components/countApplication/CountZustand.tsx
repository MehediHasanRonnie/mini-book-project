import useStore from "@/reactQueryHooks/useCountStore";
const CountZustand = () => {
  const { count, inc, dec, res } = useStore();
  return (
    <div className="bg-white shadow-lg rounded-md px-8 pt-6 pb-8 mb-4">
      <h1 className="flex justify-center items-center mb-4 font-bold ">
        Count Application
      </h1>
      <p className="flex justify-center items-center mb-4 font-bold ">
        Count:{count}
      </p>
      <button
        onClick={inc}
        className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
      >
        Increment
      </button>
      <button
        onClick={dec}
        className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
      >
        Decrement
      </button>
      <button
        onClick={res}
        className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
      >
        Reset
      </button>
    </div>
  );
};

export default CountZustand;
