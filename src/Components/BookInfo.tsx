import { book } from "./Book";
import { useState } from "react";

export const BookInfo = ({
  info,
  children,
}: {
  info: book;
  children: React.ReactNode;
}) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className=" ml-3 mb-3">
      <h2 className="text-xl mt-2">Title: {info.title}</h2>
      <h3>Author Name: {info.author}</h3>
      <h3>Genre: {info.genre}</h3>
      <h3>Price: ${info.price}</h3>
      <h3>Published: {info.publicationDate}</h3>
      <button
        onClick={handleClick}
        className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
      >
        {toggle ? "Hide" : "Show"}
      </button>
      {toggle ? children : ""}
    </div>
  );
};
