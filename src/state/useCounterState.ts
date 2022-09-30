import { useCallback } from "react";
import {
  currentPageSelector,
  hasMoreSelector,
  isErrorSelector,
  isLoadingSelector,
  pageSizeSelector,
  pokemonSelector,
  scoreSelector,
  totalEntitiesSelector,
  winSelector,
  imgPokemonSelector,
} from "./counterSelector";
import {
  increment,
  decrement,
  resetScore,
  fetchPokemonsThunk,
  fetchPokemonImgThunk,
  FetchPokemonArgs,
} from "./counterSlice";
import { useAppDispatch, useAppSelector } from "./store";

export const useCounterState = () => {
  const dispatch = useAppDispatch();

  const score = useAppSelector(scoreSelector);
  const win = useAppSelector(winSelector);
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
      return dispatch(fetchPokemonsThunk(arg));
    },
    [dispatch]
  );

  const getPokemonImg = useCallback(
    (arg: FetchPokemonArgs) => {
      console.log("arg.url", arg.url);
      return dispatch(fetchPokemonImgThunk(arg.url));
    },
    [dispatch]
  );

  const incrementScore = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const decrementScore = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const resetScoreValue = useCallback(() => {
    dispatch(resetScore());
  }, [dispatch]);

  return {
    getPokemons,
    score,
    win,
    incrementScore,
    decrementScore,
    resetScoreValue,
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
