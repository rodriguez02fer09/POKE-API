import {Chart} from 'react-google-charts'
import {filterType} from '../../redux/slice'
import {useDispatch} from 'react-redux'

const Pie = ({
  data = [
    ['Tipo', 'Cantidad'],
    ['Fuego', 15],
    ['Agua', 20],
    ['Planta', 12],
    ['Eléctrico', 10],
    ['Hielo', 8],
  ],
}) => {
  const dispatch = useDispatch()
  const options = {
    legend: 'none',
    chartArea: {left: 15, top: 15, right: 0, bottom: 0},
    pieSliceText: 'label',
  }

  const handleSelect = (chartWrapper: any) => {
    const chart = chartWrapper.getChart()
    const selectedItem = chart.getSelection()[0]
    if (selectedItem) {
      const {row} = selectedItem
      const tipoSeleccionado = data[row + 1][0]
      console.log(`Se ha seleccionado el tipo de Pokémon: ${tipoSeleccionado}`)
      dispatch(filterType({tipoBuscado: tipoSeleccionado}))
    }
  }

  return (
    <Chart
      width={'300px'}
      height={'300px'}
      chartType="PieChart"
      loader={<div>Cargando Gráfico</div>}
      data={data}
      options={options}
      chartEvents={[
        {
          eventName: 'select',
          callback: ({chartWrapper}) => handleSelect(chartWrapper),
        },
      ]}
    />
  )
}

export default Pie
