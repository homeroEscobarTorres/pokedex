import styled from "styled-components";
import { usePokedex } from "../../state/usePokedex";

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
  const { imgPokemon } = usePokedex();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Title>POKEDEX</Title>
      <PokemonImagesContainer>
        <img src={imgPokemon} alt="img-single-pokemon" />;
      </PokemonImagesContainer>
    </div>
  );
}
