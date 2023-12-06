import { book } from "./Book";

export const BookImage = (props: Partial<book>) => {
  const { imageUrl } = props;
  return (
    <div>
      <img src={imageUrl} alt="Images" />
    </div>
  );
};
