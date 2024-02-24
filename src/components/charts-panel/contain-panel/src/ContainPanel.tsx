import '../style/desktop.scss'
import BarChart from '../../barChard/src/BarChart'
import Pie from '../../pie/src/Pie'

const ContainPanel = (data: any) => {
  return (
    <div className="contai-panelstadisticas">
      <BarChart data={data.data} />
      <Pie data={data.data} />
    </div>
  )
}

export default ContainPanel
