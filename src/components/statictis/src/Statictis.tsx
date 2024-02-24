import '../style/desktop.scss'

interface IStats {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

interface IStaticstis {
  stats: IStats[]
  name: string
}

const Staticstis = ({stats}: IStaticstis) => {
  const ContainerStats = 'contain-staticstis'
  const NamePokemon = 'name-pokemon'

  return (
    <div className={`${ContainerStats}`}>
      <h2 className={`${ContainerStats}--${NamePokemon}`}> Estadisicas</h2>
      {stats ? (
        <div>
          {stats.map(({base_stat, effort}, index) => (
            <p key={index}>
              Base Stat: {base_stat}, Effort: {effort}
            </p>
          ))}
        </div>
      ) : (
        <p>No stats available</p>
      )}
    </div>
  )
}

export default Staticstis
