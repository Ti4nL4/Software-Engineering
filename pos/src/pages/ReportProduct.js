import Chart from '../components/Chart'
import BasicDateRangePicker from '../components/Datepick'
const data= [{date: "2019-01-03", count: 15},
             {date: "2019-01-05", count: 18},
             {date: "2019-01-06", count: 32},
             {date: "2019-01-07", count: 30},
             {date: "2019-01-08", count: 100},
             {date: "2019-01-09", count: 20},
             {date: "2019-01-10", count: 50}
            ]
function ReportProduct() {
  return(
    <div class='container'>
      <BasicDateRangePicker/>
      <Chart data={data} dataKey="count" title="Sản phẩm" xaxis="date"/>
    </div>
  )
}

export default ReportProduct;