import '../style/desktop.scss'

import React from 'react'

const PokemonPlaces: React.FC<any> = ({locationAreaEncounters}) => {
  const containPlaces = 'contain-places'

  return (
    <div className={containPlaces}>
      {' '}
      <h2>PLACES</h2>
      <p>
        {locationAreaEncounters.length > 0 &&
          locationAreaEncounters?.map(({location_area}: any) => {
            return <p>{location_area.name}</p>
          })}
        {locationAreaEncounters.length == 0 && <p>sin ubicaciones</p>}
      </p>
    </div>
  )
}

export default PokemonPlaces
