import './App.scss'
import Layout from './components/layout/src/Layout'
import Title from './components/title/src/Title'
import PokemonList from './components/pokemon-list/src/PokemonList'

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Title />
        <PokemonList />
      </Layout>
    </>
  )
}

export default App
