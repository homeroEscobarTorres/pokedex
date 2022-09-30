import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface IPokedex {
  pokemons: {
    error: boolean;
    loading: boolean;
    entities: any[];
    totalEntities: number;
    pageSize: number;
    page: number;
  };
  imgPokemon: any;
}

export interface FetchPokemonArgs {
  pageSize: number;
  page: number;
  url?: any;
}

type FetchResponse = {
  count: number;
  results: any[];
} & FetchPokemonArgs;

const initialState: IPokedex = {
  pokemons: {
    error: false,
    loading: false,
    entities: [],
    totalEntities: 0,
    pageSize: 20,
    page: 0,
  },
  imgPokemon: "",
};

const pokedexThunks = {
  getAllPokemonsThunk: createAsyncThunk<FetchResponse, FetchPokemonArgs>(
    "fetchPokemons",
    async ({ page, pageSize }, thunkAPI) => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?limit=${pageSize}&offset=${
            page * pageSize
          }`
        );
        const data = await response.json();

        return { page, pageSize, ...data };
      } catch {
        return thunkAPI.rejectWithValue("error!");
      }
    }
  ),
  fetchPokemonImgThunk: createAsyncThunk<FetchResponse, FetchPokemonArgs>(
    "fetchPokemonImg",
    async (url: any, thunkAPI) => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        return data.sprites.front_default;
      } catch {
        return thunkAPI.rejectWithValue("error!");
      }
    }
  ),
};

export const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(pokedexThunks.getAllPokemonsThunk.pending, (state, action) => {
        state.pokemons.page = action.meta.arg.page;
        state.pokemons.pageSize = action.meta.arg.pageSize;
        state.pokemons.loading = true;
        state.pokemons.error = false;
      })
      .addCase(pokedexThunks.getAllPokemonsThunk.fulfilled, (state, action) => {
        state.pokemons.loading = false;
        state.pokemons.entities = action.payload.results;
        state.pokemons.totalEntities = action.payload.count;
      })
      .addCase(pokedexThunks.getAllPokemonsThunk.rejected, (state) => {
        state.pokemons.loading = false;
        state.pokemons.error = true;
      })
      .addCase(pokedexThunks.fetchPokemonImgThunk.pending, (state) => {
        state.pokemons.loading = true;
        state.pokemons.error = false;
      })
      .addCase(
        pokedexThunks.fetchPokemonImgThunk.fulfilled,
        (state, action) => {
          state.pokemons.loading = false;
          state.imgPokemon = action.payload;
        }
      )
      .addCase(pokedexThunks.fetchPokemonImgThunk.rejected, (state) => {
        state.pokemons.loading = false;
        state.pokemons.error = true;
      });
  },
});

export const { getAllPokemonsThunk, fetchPokemonImgThunk } = pokedexThunks;
