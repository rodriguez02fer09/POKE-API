import '../style/desktop.scss'
import BarChart from '../../barChard/src/BarChart'
import Pie from '../../pie/src/Pie'

const ContainPanel = () => {
  return (
    <div className="contai-panelstadisticas">
      <BarChart />
      <Pie />
    </div>
  )
}

export default ContainPanel
