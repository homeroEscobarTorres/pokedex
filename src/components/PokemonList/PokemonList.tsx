import React, { useEffect } from "react";
import { usePokedex } from "../../state/usePokedex";
import { Container, Arrow, List, Item } from "./style";

export const PokemonList: React.FC = () => {
  const {
    getPokemons,
    isLoading,
    isError,
    data,
    hasMore,
    currentPage,
    getPokemonImg,
  } = usePokedex();

  useEffect(() => {
    getPokemons({
      page: 0,
      pageSize: 20,
    });
  }, [getPokemons]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error ....</div>;
  }

  return (
    <Container>
      <Arrow
        onClick={() =>
          getPokemons({
            page: currentPage - 1,
            pageSize: 20,
          })
        }
      />
      <List>
        {data.map((poke, i) => (
          <Item
            key={i}
            onClick={() => {
              getPokemonImg({
                page: 0,
                pageSize: 20,
                url: poke.url,
              });
            }}
          >
            No{i} {poke.name}
          </Item>
        ))}
      </List>
      {hasMore && (
        <Arrow
          reverse
          onClick={() =>
            getPokemons({
              page: currentPage + 1,
              pageSize: 20,
            })
          }
        />
      )}
    </Container>
  );
};
