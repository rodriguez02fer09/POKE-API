import '../style/desktop.scss'

const ImgPokemon = (pokemon: any) => {
  return (
    <div>
      <img src={pokemon.pokemon.sprites.front_default} alt="pokemon" />
    </div>
  )
}
export default ImgPokemon
