import {Chart} from 'react-google-charts'

const BarChart = ({
  data = [
    ['Tipo', 'Cantidad'],
    ['Fuego', 15],
    ['Agua', 20],
    ['Planta', 12],
    ['Eléctrico', 10],
    ['Hielo', 8],
  ],
}) => {
  const options = {
    legend: 'none',
    chartArea: {left: 15, top: 15, right: 0, bottom: 30},
    hAxis: {title: 'Cantidad'},
    vAxis: {title: 'Tipo'},
  }

  const handleSelect = (chartWrapper: any) => {
    const chart = chartWrapper.getChart()
    const selectedItem = chart.getSelection()[0]
    if (selectedItem) {
      const {row} = selectedItem
      const tipoSeleccionado = data[row + 1]
      console.log(`Se ha seleccionado el tipo de Pokémon: ${tipoSeleccionado}`)
    }
  }

  return (
    <Chart
      className="contain-chart"
      width={'500px'}
      height={'300px'}
      chartType="BarChart"
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

export default BarChart
