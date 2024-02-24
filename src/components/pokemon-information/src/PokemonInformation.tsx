import {useEffect, useState} from 'react'
import '../style/desktop.scss'
import Staticstis from '../../statictis/src/Statictis'
import PokemonPlaces from '../../pokemon-places/src/PokemonPlaces'
import Close from '../../../assets/close.svg'
import ImgPokemon from '../../img-pokemon/src/ImgPokemon'
import {getPlacesByPokemon} from '../../../api/index'

interface IPokemonInformation {
  pokemon: any
  handleCloseModal: () => void
}

const PokemonInformation = ({
  pokemon,
  handleCloseModal,
}: IPokemonInformation) => {
  const [locationsByPokemon, setLocationsByPokemon] = useState([])
  const {stats, location_area_encounters} = pokemon

  const defaulContainer = 'contain-info'
  const buttonClose = 'button-close'
  const button = 'button'

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const locationsByPokemonsRes = await getPlacesByPokemon(
          location_area_encounters,
        )
        setLocationsByPokemon(() => locationsByPokemonsRes)
      } catch (error) {
        console.error('Error fetching locations pokemons:', error)
      }
    }

    fetchPokemons()
  }, [])
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
      <PokemonPlaces locationAreaEncounters={locationsByPokemon} />
      <ImgPokemon pokemon={pokemon} />
    </div>
  )
}

export default PokemonInformation
