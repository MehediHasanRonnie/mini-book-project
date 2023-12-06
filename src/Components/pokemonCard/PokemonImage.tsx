import { SetImage } from "pokemon-tcg-sdk-typescript/dist/sdk";
export const PokemonImage = ({ imgURL }: { imgURL: SetImage }) => {
  const { logo } = imgURL;
  return (
    <div>
      <img src={logo} alt="pokimonImage" />
    </div>
  );
};
