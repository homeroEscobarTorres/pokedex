import { useCounterState } from "../state/useCounterState";
import { ListPokemon } from "./ListPokemon";
import { PokemongImg } from "./PokemonImg";
import { ResetCounter } from "./ResetCounter";

export function Counter() {
  const { score, incrementScore, decrementScore, imgPokemon } =
    useCounterState();

  return (
    <div>
      <div>
        <h1>Counter: {score}</h1>
      </div>
      <div>
        <button onClick={incrementScore}>Increment</button>
        <button onClick={decrementScore}>Decrement</button>
      </div>
      <div>
        <ResetCounter />
      </div>

      <div>{imgPokemon && <PokemongImg />}</div>
      <div>
        <ListPokemon />
      </div>
    </div>
  );
}
