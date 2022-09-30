import React, { useEffect } from "react";
import { usePokedex } from "../../state/usePokedex";

export const ListPokemon: React.FC = () => {
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
    <div>
      <h1>POKEMON LIST</h1>
      <div>
        <button
          onClick={() =>
            getPokemons({
              page: currentPage - 1,
              pageSize: 20,
            })
          }
        >
          prev
        </button>
        {hasMore && (
          <button
            onClick={() =>
              getPokemons({
                page: currentPage + 1,
                pageSize: 20,
              })
            }
          >
            Next
          </button>
        )}
      </div>
      {data.map((poke, i) => (
        <div
          key={i}
          onClick={() => {
            getPokemonImg({
              page: 0,
              pageSize: 20,
              url: poke.url,
            });
          }}
        >
          {poke.name}
        </div>
      ))}
    </div>
  );
};
