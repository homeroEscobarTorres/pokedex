import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const counterStateSelector = (state: RootState) => state.counter;

export const scoreSelector = createSelector(
  counterStateSelector,
  (state) => state.score
);

export const winSelector = createSelector(
  counterStateSelector,
  (state) => state.win
);

export const isLoadingSelector = createSelector(
  counterStateSelector,
  (state) => state.pokemons.loading
);

export const isErrorSelector = createSelector(
  counterStateSelector,
  (state) => state.pokemons.error
);

export const pokemonSelector = createSelector(
  counterStateSelector,
  (state) => state.pokemons.entities
);

export const currentPageSelector = createSelector(
  counterStateSelector,
  (state) => state.pokemons.page
);

export const pageSizeSelector = createSelector(
  counterStateSelector,
  (state) => state.pokemons.pageSize
);

export const totalEntitiesSelector = createSelector(
  counterStateSelector,
  (state) => state.pokemons.totalEntities
);

export const hasMoreSelector = createSelector(
  currentPageSelector,
  pageSizeSelector,
  totalEntitiesSelector,
  (currentPage, pageSize, totalEntities) => {
    return (currentPage + 1) * pageSize < totalEntities;
  }
);

export const imgPokemonSelector = createSelector(
  counterStateSelector,
  (state) => state.imgPokemon
);
