import { useCounterState } from "../state/useCounterState";

export const PokemongImg: React.FC = () => {
  const { imgPokemon } = useCounterState();

  return <img src={imgPokemon} alt="img-single-pokemon" />;
};
