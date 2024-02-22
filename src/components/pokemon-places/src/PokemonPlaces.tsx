import '../style/desktop.scss'

interface PokemonPlacesProps {
  location_area_encounters: string
}

const PokemonPlaces: React.FC<PokemonPlacesProps> = props => {
  const containPlces = 'contain-places'

  return (
    <div className={`${containPlces}`}>
      <h2>PLACES</h2>
      <p>Places: {props.location_area_encounters}</p>
    </div>
  )
}

export default PokemonPlaces
