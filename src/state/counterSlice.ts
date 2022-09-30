import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface ICounter {
  score: number;
  win: boolean;
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

const initialState: ICounter = {
  score: 0,
  win: false,
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

const counterThunks = {
  fetchPokemonsThunk: createAsyncThunk<FetchResponse, FetchPokemonArgs>(
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

        console.log("data.sprites.front_default", data.sprites.front_default);

        return data.sprites.front_default;
      } catch {
        return thunkAPI.rejectWithValue("error!");
      }
    }
  ),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setScore: (state, data) => {
      state.score = data.payload;
    },
    increment: (state) => {
      state.score += 1;
    },
    decrement: (state) => {
      state.score -= 1;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(counterThunks.fetchPokemonsThunk.pending, (state, action) => {
        state.pokemons.page = action.meta.arg.page;
        state.pokemons.pageSize = action.meta.arg.pageSize;
        state.pokemons.loading = true;
        state.pokemons.error = false;
      })
      .addCase(counterThunks.fetchPokemonsThunk.fulfilled, (state, action) => {
        state.pokemons.loading = false;
        state.pokemons.entities = action.payload.results;
        state.pokemons.totalEntities = action.payload.count;
      })
      .addCase(counterThunks.fetchPokemonsThunk.rejected, (state) => {
        state.pokemons.loading = false;
        state.pokemons.error = true;
      })
      .addCase(counterThunks.fetchPokemonImgThunk.pending, (state) => {
        state.pokemons.loading = true;
        state.pokemons.error = false;
      })
      .addCase(
        counterThunks.fetchPokemonImgThunk.fulfilled,
        (state, action) => {
          state.pokemons.loading = false;
          console.log("action.payload", action.payload);
          state.imgPokemon = action.payload;
        }
      )
      .addCase(counterThunks.fetchPokemonImgThunk.rejected, (state) => {
        state.pokemons.loading = false;
        state.pokemons.error = true;
      });
  },
});

export const { setScore, increment, decrement, resetScore } =
  counterSlice.actions;

export const { fetchPokemonsThunk, fetchPokemonImgThunk } = counterThunks;

export default counterSlice.reducer;
