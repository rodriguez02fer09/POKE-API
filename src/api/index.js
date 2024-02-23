import axios from 'axios'

export const getPokemon = (offset = 0) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=30`)
    .then(res => res.data.results)
    .catch(err => console.log(err))
}

export const getPokemonDetails = pokemon => {
  return axios
    .get(pokemon.url)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const getPokemonTypes = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/type')
    return response.data.results
  } catch (error) {
    console.error('Error fetching pokemon types:', error)
  }
}

export const getPlacesByPokemon = async path => {
  try {
    const response = await axios.get(path)
    return response.data
  } catch (error) {
    console.error('Error fetching pokemon types:', error)
  }
}

export default {
  getPokemon,
  getPokemonDetails,
  getPokemonTypes,
  getPlacesByPokemon,
}
