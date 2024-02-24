import React, {useEffect, useRef, useState} from 'react'
import PokemonCard from '../../pokemon-card/src/PokemonCard'
import '../style/desktop.scss'
import {useIntersectionObserver} from '@uidotdev/usehooks'
import PokemonSpiner from '../../pokemonSpiner/src/PokemonSpiner'

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
  handleOpenModal: (id: number) => void
  fetchPokemons: (offset: number) => void
  loading: boolean
}

const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
  handleOpenModal,
  fetchPokemons,
  loading = false,
}: PokemonListProps) => {
  const [offset, setOffset] = useState(0)
  const [reRender, setReRender] = useState(1)

  const [ref, entry] = useIntersectionObserver({
    threshold: 0.5,
    root: null,
    rootMargin: '0px',
  })

  useEffect(() => {
    setReRender(() => Math.random())
  }, [pokemons])

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      setOffset(() => offset + 30)
      fetchPokemons(offset)
    }
  }, [entry])

  return (
    <div key={reRender}>
      <div className="contain-pokemonList">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons.map(
            ({
              name,
              id,
              height,
              weight,
              abilities,
              types,
              sprites,
            }: Pokemon) => (
              <PokemonCard
                key={id}
                id={id}
                name={name}
                height={height}
                weight={weight}
                abilities={abilities.map(
                  (ability: any) => ability.ability.name,
                )}
                types={types.map(type => type.type.name)}
                image={sprites.front_default}
                openModal={handleOpenModal}
              />
            ),
          )}
      </div>
      {pokemons && pokemons.length > 0 && !loading && (
        <div className="target" ref={ref}></div>
      )}
      {loading && (
        <div className="loading">
          <PokemonSpiner />
        </div>
      )}
    </div>
  )
}

export default PokemonList
