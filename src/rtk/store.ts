import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from './counter/counterSlice.ts';
import {pokemonApi} from './api/pokemon.ts';
import {postApi} from './api/postApi/postApi.ts';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [postApi.reducerPath]: postApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(postApi.middleware)
  ,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
