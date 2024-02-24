import {configureStore} from '@reduxjs/toolkit'
import pokemonDataReducer from './slice'

export const store = configureStore({
  reducer: {
    pokemons: pokemonDataReducer,
  },
})
