import { BookImage } from "./BookImage";
import { BookInfo } from "./BookInfo";
import { Description } from "./Description";
export interface book {
  author: string;
  title: string;
  price: number;
  genre: string;
  imageUrl: string;
  publicationDate: string;
  description: string;
}
export const Book = ({ book }: { book: book }) => {
  const { imageUrl } = book;

  //console.log(book);

  return (
    <div className="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow">
      <BookImage imageUrl={imageUrl} />
      <BookInfo info={book}>
        <Description desc={book.description}></Description>
      </BookInfo>
    </div>
  );
};
