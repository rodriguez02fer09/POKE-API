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
  console.log(pokemon)
  return (
    <div>
      <div>
        <button>
          <img
            src={Close}
            alt=""
            width="50px"
            onClick={() => {
              console.log('click')
              handleCloseModal()
            }}
          />
        </button>
      </div>
      {/* <div>
        <img src={Close} alt="" />
      </div> */}
      <Staticstis />
      <PokemonPlaces />
      <ImgPokemon pokemon={pokemon} />
    </div>
  )
}
export default PokemonInformation
