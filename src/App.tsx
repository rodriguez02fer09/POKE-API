import './App.scss'
import Layout from './components/layout/src/Layout'
import Title from './components/title/src/Title'
import PokemonList from './components/pokemon-list/src/PokemonList'
import {useState, useEffect} from 'react'
import {getPokemon} from './api/index.js'

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon()
      setPokemons(pokemonsRes)
    }

    fetchPokemons()
  }, [])

  return (
    <>
      <Layout>
        <Title />
        <PokemonList pokemons={pokemons} />
      </Layout>
    </>
  )
}

export default App
