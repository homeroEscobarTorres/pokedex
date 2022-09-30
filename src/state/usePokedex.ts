import { useCallback } from "react";
import {
  currentPageSelector,
  hasMoreSelector,
  isErrorSelector,
  isLoadingSelector,
  pageSizeSelector,
  pokemonSelector,
  totalEntitiesSelector,
  imgPokemonSelector,
} from "./pokedexSelector";
import {
  getAllPokemonsThunk,
  fetchPokemonImgThunk,
  FetchPokemonArgs,
} from "./pokedexSlice";
import { useAppDispatch, useAppSelector } from "./store";

export const usePokedex = () => {
  const dispatch = useAppDispatch();

  const pageSize = useAppSelector(pageSizeSelector);
  const currentPage = useAppSelector(currentPageSelector);
  const totalEntities = useAppSelector(totalEntitiesSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const isError = useAppSelector(isErrorSelector);
  const data = useAppSelector(pokemonSelector);
  const hasMore = useAppSelector(hasMoreSelector);
  const imgPokemon = useAppSelector(imgPokemonSelector);

  const getPokemons = useCallback(
    (arg: FetchPokemonArgs) => {
      return dispatch(getAllPokemonsThunk(arg));
    },
    [dispatch]
  );

  const getPokemonImg = useCallback(
    (arg: FetchPokemonArgs) => {
      return dispatch(fetchPokemonImgThunk(arg.url));
    },
    [dispatch]
  );

  return {
    getPokemons,
    pageSize,
    currentPage,
    totalEntities,
    isLoading,
    isError,
    data,
    hasMore,
    getPokemonImg,
    imgPokemon,
  };
};
