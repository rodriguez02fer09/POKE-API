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

const PokemonCard = ({
  id,
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
  const pokemonImage = 'pokemonList-image'
  return (
    <div
      className={defaulContainer}
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
            <div key={index}>
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
