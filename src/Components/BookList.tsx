import bookData from "@/data/bookdata.json";
import { Book, book } from "./Book";
export const BookList = () => {
  return (
    <div className=" py-20 grid grid-cols-3">
      {bookData.map((book: book, index) => (
        <Book book={book} key={index} />
      ))}
    </div>
  );
};
