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
    filterType(state, action) {
      const {tipoBuscado} = action.payload
      state.pokemons = state.pokemons.filter(pokemon => {
        return pokemon.types.some(tipo => tipo.type.name === tipoBuscado)
      })
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

export const {addPokemons, getByIdPokemon, filterType} = dataSlice.actions
export default dataSlice.reducer
