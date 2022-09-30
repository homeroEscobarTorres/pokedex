import { usePokedex } from "../../state/usePokedex";
import { Title, ImagesContainer, Container } from "./style";

export function PokedexInfo() {
  const { imgPokemon } = usePokedex();

  return (
    <Container>
      <Title>pokedex</Title>
      <ImagesContainer>
        <img
          style={{ width: "100%" }}
          src={imgPokemon}
          alt="img-single-pokemon"
        />
      </ImagesContainer>
    </Container>
  );
}
