import React from 'react'
import PokemonCard from '../../pokemon-card/src/PokemonCard'
import '../style/desktop.scss'

interface Type {
  slot: number
  type: {
    name: string
    url: string
  }
}

interface Pokemon {
  name: string
  height: number
  weight: number
  abilities: string[]
  sprites: {
    front_default: string
  }
  types: Type[]
  id: number
  locationData: any
}

interface PokemonListProps {
  pokemons: Pokemon[]
  handleOpenModal: () => void
}

const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
  handleOpenModal,
}) => {
  if (!Array.isArray(pokemons) || pokemons.length === 0) {
    return <div>No hay pokemons disponibles</div>
  }

  return (
    <div className="contain-pokemonList">
      {pokemons.map((pokemon: Pokemon, index: number) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          height={pokemon.height}
          weight={pokemon.weight}
          abilities={pokemon.abilities.map(ability => ability.ability.name)}
          types={pokemon.types.map(type => type.type.name)}
          image={pokemon.sprites.front_default}
          openModal={handleOpenModal}
        />
      ))}
    </div>
  )
}

export default PokemonList
