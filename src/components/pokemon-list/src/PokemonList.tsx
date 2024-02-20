import PokemonCard from '../../pokemon-card/src/PokemonCard'
import '../style/desktop.scss'

interface Pokemon {
  name: string
  sprites: {
    front_default: string
  }
  types: {name: string}[]
  id: number
}

interface PokemonListProps {
  pokemons: Pokemon[]
}

const PokemonList: React.FC<PokemonListProps> = props => {
  return (
    <div className="PokemonList">
      {props.pokemons.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types}
          id={pokemon.id}
        />
      ))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill({
    name: '',
    sprites: {front_default: ''},
    types: [],
    id: 0,
  }),
}

export default PokemonList
