import {createSlice} from '@reduxjs/toolkit'

interface AppState {
  pokemons: any[] // Adjust this type according to your actual state structure
}

const initialState: AppState = {
  pokemons: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addPokemons(state, action) {
      state.pokemons.push(...action.payload)
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

export const {addPokemons, getByIdPokemon} = dataSlice.actions
export default dataSlice.reducer
