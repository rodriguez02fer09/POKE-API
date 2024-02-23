import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'

//api
import {getPokemon, getPokemonDetails} from '../api/index'

//reducer
import {addPokemons} from '../redux/slice'

//Components
import PokemonList from '../components/pokemon-list/src/PokemonList'
import Title from '../components/title/src/Title'
import Pie from '../components/charts-panel/pie/src/Pie'
import BarChart from '../components/charts-panel/barChard/src/BarChart'
import Modal from '../components/modal/src/Modal'
import PokemonInformation from '../components/pokemon-information/src/PokemonInformation'

const CWAppPokemons = () => {
  const dispatch = useDispatch()
  const {pokemons} = useSelector((state: any) => state.pokemons)

  const [openModal, setOpenModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [detailPokemon, setDetailPokemon] = useState({})

  const fetchPokemons = async (offset: number) => {
    setLoading(true)
    try {
      const pokemonsRes = await getPokemon(offset)
      const pokemonsDetailed = await Promise.all(
        pokemonsRes.map((pokemon: any) => getPokemonDetails(pokemon)),
      )
      dispatch(addPokemons(pokemonsDetailed))
      setLoading(false)
    } catch (error) {
      console.error('Error fetching pokemons:', error)
    }
  }

  useEffect(() => {
    fetchPokemons(0)
  }, [])

  const handleOpenModal = (id: number) => {
    const p = pokemons.find((p: any) => {
      return p.id === id
    })
    setDetailPokemon(() => p)
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const contarTiposDePokemon = (pokemones: any) => {
    const contadorTipos = pokemones.reduce((contador, pokemon) => {
      if (pokemon.types && pokemon.types.length > 0) {
        // Verificar si hay tipos de Pokémon
        pokemon.types.forEach(type => {
          const nombreTipo = type.type.name
          contador[nombreTipo] = (contador[nombreTipo] || 0) + 1
        })
      }
      return contador
    }, {})

    // Convertir el objeto contador a un array de arrays
    const resultado = Object.entries(contadorTipos).map(([tipo, cantidad]) => [
      tipo,
      cantidad,
    ])
    resultado.unshift(['Tipo', 'Cantidad'])

    return resultado
  }

  return (
    <>
      <Title />
      <Pie data={contarTiposDePokemon(pokemons)} />
      <BarChart data={contarTiposDePokemon(pokemons)} />
      <PokemonList
        handleOpenModal={handleOpenModal}
        pokemons={pokemons}
        fetchPokemons={fetchPokemons}
        loading={loading}
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
