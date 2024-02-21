import {configureStore} from '@reduxjs/toolkit'
import pokemonDataReducer from '../redux/slice'

export const store = configureStore({
  reducer: {
    pokemons: pokemonDataReducer,
  },
})
