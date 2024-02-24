import '../style/desktop.scss'

interface PokemonCardProps {
  id: number
  name: string
  image: string
  height: number
  weight: number
  abilities: string[]
  types: string[]
  openModal: (id: number) => void
}

const pokemonTypesWithColors: any = {
  normal: '#4fdd77',
  fighting: '#b46f29',
  flying: '#83f81f',
  poison: '#2f4267',
  ground: '#7bde85',
  rock: '#1b0493',
  bug: '#58a743',
  ghost: '#1a6a51',
  steel: '#09d66c',
  fire: '#9cf6c8',
  water: '#69c88b',
  grass: '#f42e63',
  electric: '#7d4ebd',
  psychic: '#07f21b',
  ice: '#23d37b',
  dragon: '#68f5e6',
  dark: '#0b2173',
  fairy: '#f5c7de',
  unknown: '#ac8fd8',
  shadow: '#7b55a7',
}

const PokemonCard = ({
  id,
  name,
  image,
  height,
  weight,
  abilities,
  types,
  openModal,
}: PokemonCardProps) => {
  const typeColor = (type: string) => ({
    background: `${pokemonTypesWithColors[type]}`,
  })
  const gradientStyle = {
    background: `linear-gradient(to right, ${
      pokemonTypesWithColors[types[0]]
    }, ${
      pokemonTypesWithColors[types[1]]
        ? pokemonTypesWithColors[types[1]]
        : 'white'
    })`,
  }
  const defaulContainer = 'card-container'
  const pokemonDetail = 'pokemon-details'
  const pokemonTitle = 'pokemon-title'
  const pokemonCardDetail = 'pokemon-card-detail'
  const pokemonTypes = 'pokemon-types'
  const pokemonImage = 'pokemonList-image'
  return (
    <div
      className={defaulContainer}
      style={gradientStyle}
      onClick={() => {
        console.log('click')
        openModal(id)
      }}
    >
      <div className={`${defaulContainer}--${pokemonDetail}`}>
        <div
          className={`${defaulContainer}--${pokemonDetail}__${pokemonTitle}`}
        >
          <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        </div>
        <div
          className={`${defaulContainer}--${pokemonDetail}__${pokemonCardDetail}`}
        >
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <p>Ability: {abilities.length > 0 ? abilities[0] : 'Unknown'}</p>
        </div>
        <div
          className={`${defaulContainer}--${pokemonDetail}__${pokemonTypes}`}
        >
          {types.map((type, index) => (
            <div key={index} style={typeColor(type)}>
              <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`${defaulContainer}--${pokemonImage}`}>
        <img src={image} alt={name} />
      </div>
    </div>
  )
}

export default PokemonCard
