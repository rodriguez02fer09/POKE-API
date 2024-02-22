import '../style/desktop.scss'
import Staticstis from '../../statictis/src/Statictis'
import PokemonPlaces from '../../pokemon-places/src/PokemonPlaces'
import Close from '../../../assets/close.svg'
import ImgPokemon from '../../img-pokemon/src/ImgPokemon'

interface IPokemonInformation {
  pokemon: any
  handleCloseModal: () => void
}

const PokemonInformation = ({
  pokemon,
  handleCloseModal,
}: IPokemonInformation) => {
  const {stats, location_area_encounters} = pokemon
  console.log(pokemon)
  const defaulContainer = 'contain-info'
  const buttonClose = 'button-close'
  const button = 'button'

  return (
    <div className={`${defaulContainer}`}>
      <div className={`${defaulContainer}--${buttonClose}`}>
        <button className={`${defaulContainer}--${buttonClose}__${button}`}>
          <img
            src={Close}
            alt=""
            onClick={() => {
              console.log('click')
              handleCloseModal()
            }}
          />
        </button>
      </div>

      <Staticstis stats={stats} />
      <PokemonPlaces location_area_encounters={location_area_encounters} />
      <ImgPokemon pokemon={pokemon} />
    </div>
  )
}
export default PokemonInformation
