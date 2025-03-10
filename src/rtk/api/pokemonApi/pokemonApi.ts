// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {PokemonListDto} from './dto/PokemonListDto';
import {PokemonDto} from './dto/PokemonDto';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListDto, undefined>({
      query: () => `pokemon`,
    }),
    getPokemonByName: builder.query<PokemonDto, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})
