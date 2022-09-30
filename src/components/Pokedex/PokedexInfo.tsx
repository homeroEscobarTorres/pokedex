import styled from "styled-components";
import { PokemongImg } from "./PokemonImg";

const Title = styled.h1`
  text-transform: uppercase;
  background: #ddd;
  padding: 0.8rem 2rem 0 2rem;
  font-weight: bold;
  border-radius: 1rem;
  text-align: center;
`;

const PokemonImagesContainer = styled.div`
  border: 3px solid white;
  border-radius: 0.5rem;
  flex: 1;
  margin: 3rem;
`;

export function PokedexInfo() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Title>POKEDEX</Title>
      <PokemonImagesContainer>
        <PokemongImg />
      </PokemonImagesContainer>
    </div>
  );
}
