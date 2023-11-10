import {createSlice} from '@reduxjs/toolkit'

export interface PokemonState {
  detail: Record<string, any>,
  list: Record<string, any>[]
}

const initialState: PokemonState = {
  detail: {},
  list: []
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: {},
})
