import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'

//api
import {getPokemon, getPokemonDetails} from '../api/index'

//reducer
import {setPokemons, getByIdPokemon} from '../redux/slice'

//Components
import PokemonList from '../components/pokemon-list/src/PokemonList'
import Title from '../components/title/src/Title'
import Modal from '../components/modal/src/Modal'
import PokemonInformation from '../components/pokemon-information/src/PokemonInformation'

const CWAppPokemons = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector((state: any) => state.pokemons)

  const [openModal, setOpenModal] = useState(false)
  const [detailPokemon, setDetailPokemon] = useState({})

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonsRes = await getPokemon()
        const pokemonsDetailed = await Promise.all(
          pokemonsRes.map((pokemon: any) => getPokemonDetails(pokemon)),
        )
        dispatch(setPokemons(pokemonsDetailed))
      } catch (error) {
        console.error('Error fetching pokemons:', error)
      }
    }

    fetchPokemons()
  }, [])

  const handleOpenModal = (id: number) => {
    const p = pokemons.pokemons.find(p => {
      return p.id === id
    })
    setDetailPokemon(() => p)
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Title />
      <PokemonList
        handleOpenModal={handleOpenModal}
        pokemons={pokemons.pokemons}
      />
      {openModal && (
        <Modal>
          <PokemonInformation
            pokemon={detailPokemon}
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      )}
    </>
  )
}

export default CWAppPokemons
