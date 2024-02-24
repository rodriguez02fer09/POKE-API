import '../style/desktop.scss'

const ImgPokemon = (pokemon: any) => {
  const containImg = 'contain-image'

  return (
    <div>
      <img
        className={`${containImg}`}
        src={pokemon.pokemon.sprites.front_default}
        alt="pokemon"
      />
    </div>
  )
}
export default ImgPokemon
