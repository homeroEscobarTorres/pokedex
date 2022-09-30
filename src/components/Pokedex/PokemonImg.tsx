import { usePokedex } from "../../state/usePokedex";

export const PokemongImg: React.FC = () => {
  const { imgPokemon } = usePokedex();

  return <img src={imgPokemon} alt="img-single-pokemon" />;
};
