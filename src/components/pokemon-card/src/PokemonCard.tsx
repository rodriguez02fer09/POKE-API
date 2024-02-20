import {Card} from 'antd'
import Meta from 'antd/lib/card/Meta'
import '../style/desktop.scss'

interface PokemonCardProps {
  name: string
  image: string
}

const PokemonCard = (props: PokemonCardProps) => {
  const {name, image} = props
  return (
    <Card
      title={name}
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
          alt="Ditto"
        />
      }
    >
      <Meta description="fire, magic" />
    </Card>
  )
}
export default PokemonCard
