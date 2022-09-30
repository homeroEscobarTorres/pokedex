import { usePokedex } from "../../state/usePokedex";
import { ListPokemon } from "./ListPokemon";
import { PokemongImg } from "./PokemonImg";

export function Pokedex() {
  const { imgPokemon } = usePokedex();

  return (
    <div>
      <div>{imgPokemon && <PokemongImg />}</div>
      <div>
        <ListPokemon />
      </div>
    </div>
  );
}
