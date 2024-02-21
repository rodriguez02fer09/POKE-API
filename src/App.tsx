import './App.scss'
import Layout from './components/layout/src/Layout'
import Title from './components/title/src/Title'
import PokemonList from './components/pokemon-list/src/PokemonList'
import {useState, useEffect} from 'react'
import {getPokemon} from './api/index'
import {Provider} from 'react-redux'
import {store} from './redux/store'

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonsRes = await getPokemon()
        setPokemons(pokemonsRes)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      }
    }

    fetchPokemons()
  }, [])

  return (
    <Provider store={store}>
      <Layout>
        <Title />
        <PokemonList pokemons={pokemons} />
      </Layout>
    </Provider>
  )
}

export default App
