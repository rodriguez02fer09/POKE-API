import '../style/desktop.scss'

interface PokemonCardProps {
  name: string
  image: string
  height: number
  weight: number
  abilities: string[]
  types: string[]
  locationData?: string // Propiedad opcional de información de ubicación
  openModal: () => void
}

const PokemonCard = ({
  name,
  image,
  height,
  weight,
  abilities,
  types,
  openModal,
}: //locationData, // Propiedad opcional de información de ubicación
PokemonCardProps) => {
  const defaulContainer = 'card-container'
  const pokemonDetail = 'pokemon-details'
  const pokemonTitle = 'pokemon-title'
  const pokemonCardDetail = 'pokemon-card-detail'
  const pokemonTypes = 'pokemon-types'

  return (
    <div
      className={defaulContainer}
      onClick={() => {
        console.log('click')
        openModal()
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
          {/* <p>Abilities: {abilities.join(', ')}</p> */}
          {/* <p>Places: {locationData}</p> */}
        </div>
        <div
          className={`${defaulContainer}--${pokemonDetail}__${pokemonTypes}`}
        >
          <p>
            {types
              .map(type => type.charAt(0).toUpperCase() + type.slice(1))
              .join('  ')}
          </p>
        </div>
      </div>
      <div className="pokemon-image">
        <img src={image} alt={name} />
      </div>
    </div>
  )
}

export default PokemonCard
