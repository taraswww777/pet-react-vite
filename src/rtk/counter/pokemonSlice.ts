import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {pokemonApi} from '../api/pokemonApi';

export interface PokemonState {
  status?: any,
  postList?: any,
  error?: any,
  detail: Record<string, any>,
  list: Record<string, any>[]
}

const initialState: PokemonState = {
  detail: {},
  list: []
}


const customGetRandomPokemon = createAsyncThunk('customGetRandomPokemon', (_, thunkAPI) => {
  const response = pokemonApi.endpoints?.getPokemonList?.initiate(undefined);

  thunkAPI.dispatch(response)

  console.log('response:', response)

  return thunkAPI.dispatch(response);
});


export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Обработка результатов запросов
    // builder.addCase(customGetRandomPokemon.pending, (state, action) => {
    //   console.log('customGetRandomPokemon.pending:', state, action)
    //   state.status = 'loading';
    // });
    builder.addCase(customGetRandomPokemon.fulfilled, (state, action) => {
      console.log('customGetRandomPokemon.fulfilled:', state, action);
      state.status = 'succeeded';
      state.list = action.payload.data?.results || [];
    });
    builder.addCase(customGetRandomPokemon.rejected, (state, action) => {
      console.log('customGetRandomPokemon.rejected:', state, action)
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const pokemonActions = {
  ...pokemonSlice.actions,
  customGetRandomPokemon
}
// console.log('pokemonActions:', pokemonActions)
