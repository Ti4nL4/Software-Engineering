import Chart from '../components/Chart'
import BasicDateRangePicker from '../components/Datepick'
const data= [{date: "2019-01-03", sale: 15},
             {date: "2019-01-05", sale: 18},
             {date: "2019-01-06", sale: 32},
             {date: "2019-01-07", sale: 30},
             {date: "2019-01-08", sale: 100},
             {date: "2019-01-09", sale: 20},
             {date: "2019-01-10", sale: 50}
            ]
function Reports() {
  return(
    <div class='container'>
      <BasicDateRangePicker/>
        <div class="row">
      <div class="col-md-4 col-sm-12">
        <div class="card widget-flat">
        <div class="card-body">
          <div class="float-end">
          <i class="mdi mdi-pulse widget-icon"></i>
          </div>
          <h5 class="text-muted fw-normal mt-0" >Tổng doanh thu</h5>
          <h3 class="mt-3 mb-3">+ 30.56%</h3>
          <p class="mb-0 text-muted">
          <span class="text-success me-2">
            <i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
          <span class="text-nowrap">Since last month</span>
          </p>
        </div>
        </div>
        </div>
        <div class="col-md-4 col-sm-12">
        <div class="card widget-flat">
        <div class="card-body">
          <div class="float-end">
          <i class="mdi mdi-pulse widget-icon"></i>
          </div>
          <h5 class="text-muted fw-normal mt-0" title="Growth">Tổng số hóa đơn</h5>
          <h3 class="mt-3 mb-3">100</h3>
          <p class="mb-0 text-muted">
          <span class="text-success me-2">
            <i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
          <span class="text-nowrap">Since last month</span>
          </p>
        </div>
        </div>
        </div>
        <div class="col-md-4 col-sm-12">
        <div class="card widget-flat">
        <div class="card-body">
          <div class="float-end">
          <i class="mdi mdi-pulse widget-icon"></i>
          </div>
          <h5 class="text-muted fw-normal mt-0">Số lượng sản phẩm</h5>
          <h3 class="mt-3 mb-3">2056</h3>
          <p class="mb-0 text-muted">
          <span class="text-success me-2">
            <i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
          <span class="text-nowrap">Since last month</span>
          </p>
        </div>
        </div>
        </div>
      </div>
      <Chart data={data} dataKey="sale" title="Doanh thu bán hàng" xaxis="date"/>
    </div>
  )
}

export default Reports;