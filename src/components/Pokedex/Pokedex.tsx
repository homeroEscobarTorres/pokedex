import { PokemonList } from "../PokemonList";
import { PokedexInfo } from "../PokedexInfo";
import { Center, Container, Ball, BallInner } from "./style";

export const Pokedex: React.FC = () => {
  return (
    <Center>
      <Container>
        <Ball>
          <BallInner />
        </Ball>
        <PokedexInfo />
        <PokemonList />
      </Container>
    </Center>
  );
};
