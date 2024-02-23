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
    chartArea: {left: 15, top: 15, right: 0, bottom: 30}, // Adjust bottom margin for x-axis labels
    hAxis: {title: 'Cantidad'}, // Customize x-axis label
    vAxis: {title: 'Tipo'}, // Customize y-axis label
  }

  const handleSelect = chartWrapper => {
    const chart = chartWrapper.getChart()
    const selectedItem = chart.getSelection()[0]
    if (selectedItem) {
      const {row} = selectedItem
      const tipoSeleccionado = data[row + 1][0]
      console.log(`Se ha seleccionado el tipo de Pokémon: ${tipoSeleccionado}`)
    }
  }

  return (
    <Chart
      width={'500px'} // Adjust width as needed
      height={'300px'} // Adjust height as needed
      chartType="BarChart" // Use BarChart type
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

export default BarChart
