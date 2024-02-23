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
    getByIdPokemon: (state, action) => {
      state.pokemons.find((pokemon: any) => {
        if (pokemon.id === action.payload.id) {
          return pokemon
        }
      })
    },
  },
})

export const {setPokemons, getByIdPokemon} = dataSlice.actions
export default dataSlice.reducer
