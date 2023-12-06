import { useRef } from "react";
export const SignIn: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(`Email: ${email} Password: ${password}`);
    emailRef.current = null;
    console.log(emailRef);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="bg-white shadow-lg rounded-md px-8 pt-6 pb-8 mb-4 flex flex-col"
      >
        <h2 className="flex justify-center items-center mb-4 font-bold ">
          Sign In
        </h2>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 mt-2 text-sm font-medium text-gray-900"
          >
            Email:
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            id="email"
            ref={emailRef}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 mt-2 text-sm font-medium text-gray-900"
          >
            Password:
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            id="password"
            ref={passwordRef}
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-center mt-5">
          <button
            className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
