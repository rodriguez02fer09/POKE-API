import '../style/desktop.scss'

interface PokemonCardProps {
  name: string
  image: string
}

const PokemonCard = (props: PokemonCardProps) => {
  const {name, image} = props
  return (
    <div className="contain-pokemonCard">
      <div>
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <p>Heigth:</p>
          <p>Weigth:</p>
          <p>Abilities:</p>
        </div>
        <div>
          <p>Type :</p>
        </div>
      </div>
      <div>
        <img src={image} alt={name} />
      </div>
    </div>
  )
}
export default PokemonCard
