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

const PokemonList = (props: PokemonListProps) => {
  return (
    <div className="contain-pokemonList">
      {props.pokemons.map(pokemon => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            //image={pokemon.sprites.front_default}
          />
        )
      })}
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
