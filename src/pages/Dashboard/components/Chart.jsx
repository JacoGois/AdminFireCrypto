import ReactApexChart from "react-apexcharts"
import { emergenceVariant } from "../../../animations"
import { BoxRoot } from "../../../components/BoxRoot"

export const Chart = ({ dataChart }) => {
  
  return (
    <BoxRoot variants={emergenceVariant} initial='hidden' animate='visible' className="col-span-2 p-3 h-[360px] my-4 lg:my-0">
      <ReactApexChart options={dataChart.options} series={dataChart.series} type="candlestick" height={320} />
    </BoxRoot>
  )
}