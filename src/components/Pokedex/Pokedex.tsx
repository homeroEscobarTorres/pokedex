import { ListPokemon } from "./ListPokemon";
import { PokedexInfo } from "./PokedexInfo";
import styled from "styled-components";

const PokedexContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  max-width: 80rem;
  margin: 0 auto;
`;
const Ball = styled.div`
  z-index: -1;
  width: 400px;
  height: 400px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
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

export const Pokedex: React.FC = () => {
  return (
    <PokedexContainer>
      <Ball>
        <BallInner />
      </Ball>
      <PokedexInfo />
      <ListPokemon />
    </PokedexContainer>
  );
};
