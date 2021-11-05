import Chart from '../components/Chart'
import BasicDateRangePicker from '../components/Datepick'
const data= [{date: "2019-01-03", numorder: 1,
                order0:{
                  product0:1,
                  product1:0,
                  product2:0
                }
              },
             {date: "2019-01-05", numorder: 2,
              order0:{
                product0:2,
                product1:5,
                product2:0
              },
              order1:{
                product0:0,
                product1:1,
                product2:3
              }
              },
             {date: "2019-01-06", numorder: 3,
              order0:{
                product0:1,
                product1:2,
                product2:3
              },
              order1:{
                product0:1,
                product1:1,
                product2:3
              },
              order2:{
                product0:0,
                product1:1,
                product2:0
              }
              },
             {date: "2019-01-07", numorder: 3,
              order0:{
                product0:1,
                product1:2,
                product2:3
              },
              order1:{
                product0:1,
                product1:1,
                product2:3
              },
              order2:{
                product0:0,
                product1:1,
                product2:0
              }
              },
             {date: "2019-01-08", numorder: 2,
              order0:{
                product0:4,
                product1:1,
                product2:1
              },
              order1:{
                product0:0,
                product1:2,
                product2:1
              }
              },
             {date: "2019-01-09", numorder: 4,
              order0:{
                product0:2,
                product1:0,
                product2:3
              },
              order1:{
                product0:0,
                product1:1,
                product2:2
              },
              order2:{
                product0:3,
                product1:1,
                product2:1
              },
              order3:{
                product0:2,
                product1:1,
                product2:0
              }
              },
             {date: "2019-01-10", numorder: 2,
              order0:{
                product0:2,
                product1:2,
                product2:3
              },
              order1:{
                product0:2,
                product1:2,
                product2:2
              }
              }
            ]
function Reports() {
  const sumOfOrders = data.reduce((sum, currentValue) => {
    return sum + currentValue.numorder;
  }, 0);
  const sumOfProducts = data.reduce((sum, currentValue) => {
    if(currentValue.order0){
      sum = sum + currentValue.order0.product0;
      sum = sum + currentValue.order0.product1;
      sum = sum + currentValue.order0.product2;
     }
     if(currentValue.order1){
       sum = sum + currentValue.order1.product0;
       sum = sum + currentValue.order1.product1;
       sum = sum + currentValue.order1.product2;
     }
     if(currentValue.order2){
       sum = sum + currentValue.order2.product0;
       sum = sum + currentValue.order2.product1;
       sum = sum + currentValue.order2.product2;
     }
     return sum;
  }, 0);


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
          <h3 class="mt-3 mb-3">{sumOfOrders}</h3>
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
          <h3 class="mt-3 mb-3">{sumOfProducts}</h3>
          <p class="mb-0 text-muted">
          <span class="text-success me-2">
            <i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
          <span class="text-nowrap">Since last month</span>
          </p>
        </div>
        </div>
        </div>
      </div>
      <Chart data={data} dataKey="numorder" title="Doanh thu bán hàng" xaxis="date"/>
    </div>
  )
}

export default Reports;