import { usePokedex } from "../../state/usePokedex";
import { ListPokemon } from "./ListPokemon";
import { PokemongImg } from "./PokemonImg";
import styled from "styled-components";

const Ball = styled.div`
  z-index: -1;
  width: 400px;
  height: 400px;
  border-radius: 100%;
  position: fixed;
  top: 50%;
  transform: rotateY(10deg) translate(-50%, -50%);
  border: 180px solid #030024;
  clip-path: polygon(
    0 0,
    72% 0,
    57% 30%,
    61% 33%,
    78% 0,
    100% 0,
    100% 100%,
    0 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BallInner = styled.div`
  width: 300px;
  height: 300px;
  background: #030024;
  border-radius: 100%;
`;

export function Pokedex() {
  const { imgPokemon } = usePokedex();

  return (
    <>
      <Ball>
        <BallInner />
      </Ball>
      <div>{imgPokemon && <PokemongImg />}</div>
      <div>
        <ListPokemon />
      </div>
    </>
  );
}
