import {useEffect} from 'react'

import {useDispatch, useSelector} from 'react-redux'

//api
import {getPokemon, getPokemonDetails} from '../api/index'

//reducer
import {setPokemons} from '../redux/slice'

//Components
import PokemonList from '../components/pokemon-list/src/PokemonList'
import Title from '../components/title/src/Title'

const CWAppPokemons = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector((state: any) => state.pokemons)

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonsRes = await getPokemon()
        const pokemonsDetailed = await Promise.all(
          pokemonsRes.map((pokemon: any) => getPokemonDetails(pokemon)),
        )
        dispatch(setPokemons(pokemonsDetailed))
      } catch (error) {
        console.error('Error fetching pokemons:', error)
      }
    }

    fetchPokemons()
  }, [])

  return (
    <>
      <Title />
      <PokemonList pokemons={pokemons.pokemons} />
    </>
  )
}

export default CWAppPokemons
