import '../style/desktop.scss'
import Staticstis from '../../statictis/src/Statictis'
import PokemonPlaces from '../../pokemon-places/src/PokemonPlaces'
import Close from '../../../assets/close.svg'
import ImgPokemon from '../../img-pokemon/src/ImgPokemon'

interface IPokemonInformation {
  closeModal: () => void
}

const PokemonInformation = ({closeModal}: IPokemonInformation) => {
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
              closeModal()
            }}
          />
        </button>
      </div>
      {/* <div>
        <img src={Close} alt="" />
      </div> */}
      <Staticstis />
      <PokemonPlaces />
      <ImgPokemon />
    </div>
  )
}
export default PokemonInformation
