import '../style/desktop.scss'

import React from 'react'

const PokemonPlaces: React.FC<any> = ({locationAreaEncounters}) => {
  const containPlaces = 'contain-places'

  return (
    <div className={containPlaces}>
      {' '}
      <h2>Lugares donde se encuentra</h2>
      <div className={`${containPlaces}-scroll`}>
        {locationAreaEncounters.length > 0 &&
          locationAreaEncounters?.map(({location_area}: any) => {
            return <p>{location_area.name}</p>
          })}
        {locationAreaEncounters.length == 0 && <p>sin ubicaciones</p>}
      </div>
    </div>
  )
}

export default PokemonPlaces
