import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  pokemons: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
  },
})

export const {setPokemons} = dataSlice.actions
export default dataSlice.reducer
