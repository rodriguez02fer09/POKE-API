import '../style/desktop.scss'

interface PokemonCardProps {
  name: string
  image: string
  height: number
  weight: number
  abilities: string[]
  types: string[]
  locationData?: string // Propiedad opcional de información de ubicación
}

const PokemonCard = ({
  name,
  image,
  height,
  weight,
  abilities,
  types,
  locationData, // Propiedad opcional de información de ubicación
}: PokemonCardProps) => {
  return (
    <div className="pokemon-card-container">
      <div className="pokemon-details">
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <p>Abilities: {abilities.join(', ')}</p>
          <p>Type: {types.join(', ')}</p> <p>Places: {locationData}</p>
        </div>
      </div>
      <div className="pokemon-image">
        <img src={image} alt={name} />
      </div>
    </div>
  )
}

export default PokemonCard
