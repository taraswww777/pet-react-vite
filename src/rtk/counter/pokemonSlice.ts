import {createSlice} from '@reduxjs/toolkit'

export interface PokemonState {
  detail: Record<string, any>,
  list: Record<string, any>[]
}

const initialState: PokemonState = {
  detail: {},
  list: []
}


// const customGetPostList = createAsyncThunk('', async (data, thunkAPI) => {
//   const response = await postApi.endpoints?.getPostList.initiate({})
//   console.log(response)
//   // const {data, error, isLoading} = postApi.useGetPostItemByIdQuery(1);
//
//   thunkAPI.dispatch(postApi.endpoints?.getPostList)
//
//   return thunkAPI;
// });


export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: {},
})
