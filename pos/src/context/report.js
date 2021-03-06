import Chart from '../components/Chart'
import {Datepick, datadatepick} from '../components/Datepick'
import Header from '../components/Header';
import {getData, _Render} from '../api/report';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/Datepick.css"
function ReportsRevenue() {
  //console.log(datadatepick)
  const [data,setData]=useState([])
    useEffect(()=>{
		getData(setData)
    },[])

    let order =[]
    let time =[]
    let listrevenue = []
    let sumrevenue = 0
    let sumprofit = 0
    let sumquantity = 0
    //const sumOfOrders = (data) => {
      for (var i = 0; i < data.length; i++) {
        if (order.indexOf(data[i].Bill_Id) === -1) {
          order.push(data[i].Bill_Id)
        }
        if (time.indexOf(data[i].Buy_Time) === -1) {
          time.push(data[i].Buy_Time)
        }
        sumrevenue += data[i].Price
        sumprofit += data[i].Fund
        sumquantity += data[i].Quantity
      }
    //}
    sumprofit = sumrevenue - sumprofit
    console.log(sumprofit)
    
    for (let i = 0; i < time.length; i++){
      let temp = 0
      for (let j = 0; j < data.length; j++){
        if (data[j].Buy_Time == time[i]){
           temp += data[j].Price
        }
      }
      listrevenue.push(temp)
    }

    time.sort();
    const dataout = []
    for (let i = 0; i < time.length; i++){
      let temp = new Date(time[i])
      temp = temp.toLocaleDateString('en-US')
      const obj = {
        Buy_Time: temp,
        Revenue: listrevenue[i]
      }
      dataout.push(obj)
    }
    console.log(dataout)
  
  

    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
  
    const handleCheckInDate = (date) => {
      setCheckInDate(date);
      setCheckOutDate(null);
    };
    const handleCheckOutDate = (date) => {
      setCheckOutDate(date);
    };
  
    const RenderReport =  async ()=> {
      console.log(checkInDate)
      console.log(checkOutDate)
      _Render(checkInDate,checkOutDate,setData)
    }


    return(
    <div class='container bg-white'>
      <Header/>
      <div className="container mt-3">
            {/* <form method="get"> */}
            <div class ='row'>
            <div class ='col-md-3 col-sm-6 fw-bold'>
              <label>Check-in</label>
              <DatePicker
                selected={checkInDate}
                //minDate={new Date()}
                onChange={handleCheckInDate}
                placeholderText ="Start date"
                dateFormat="yyyy-MM-dd"
                name='start'
              />
            </div>
            <div class ='col-md-3 col-sm-6 fw-bold'>
              <label>Check-out</label>
              <DatePicker
                selected={checkOutDate}
                minDate={checkInDate}
                onChange={handleCheckOutDate}
                placeholderText ="End date"
                dateFormat="yyyy-MM-dd"
                name='end'
              />
            </div>
            <div class ='col-md-4 col-sm-12 mt-4'>
            <button type="button" class="btn btn-primary" onClick={RenderReport}>Xu???t b??o c??o</button>
            {/* <button type="submit" class="btn btn-primary">Xu???t b??o c??o</button> */}
            </div>
          </div>
          {/* </form> */}
        </div>




        <div class="row">
        <div class="col-md-3 col-sm-12">
        <div class="card widget-flat shadow">
        <div class="card-body">
          <div class="float-end">
          <i class="mdi mdi-pulse widget-icon"></i>
          </div>
          <h5 class="text-muted fw-normal mt-0" >T???ng doanh thu</h5>
          <h3 class="mt-3 mb-3">{sumrevenue.toFixed(2)}</h3>
          {/* <p class="mb-0 text-muted">
          <span class="text-success me-2">
            <i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
          <span class="text-nowrap">Since last month</span>
          </p> */}
        </div>
        </div>
        </div>
        <div class="col-md-3 col-sm-12">
        <div class="card widget-flat shadow">
        <div class="card-body">
          <div class="float-end">
          <i class="mdi mdi-pulse widget-icon"></i>
          </div>
          <h5 class="text-muted fw-normal mt-0" >T???ng l???i nhu???n</h5>
          <h3 class="mt-3 mb-3">{sumprofit.toFixed(2)}</h3>
          {/* <p class="mb-0 text-muted">
          <span class="text-success me-2">
            <i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
          <span class="text-nowrap">Since last month</span>
          </p> */}
        </div>
        </div>
        </div>
        <div class="col-md-3 col-sm-12">
        <div class="card widget-flat shadow">
        <div class="card-body">
          <div class="float-end">
          <i class="mdi mdi-pulse widget-icon"></i>
          </div>
          <h5 class="text-muted fw-normal mt-0" title="Growth">T???ng s??? h??a ????n</h5>
          <h3 class="mt-3 mb-3">{order.length}</h3>
          {/* <p class="mb-0 text-muted">
          <span class="text-success me-2">
            <i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
          <span class="text-nowrap">Since last month</span>
          </p> */}
        </div>
        </div>
        </div>
        <div class="col-md-3 col-sm-12">
        <div class="card widget-flat shadow">
        <div class="card-body">
          <div class="float-end">
          <i class="mdi mdi-pulse widget-icon"></i>
          </div>
          <h5 class="text-muted fw-normal mt-0">S??? l?????ng s???n ph???m</h5>
          <h3 class="mt-3 mb-3">{sumquantity}</h3>
          {/* <p class="mb-0 text-muted">
          <span class="text-success me-2">
            <i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
          <span class="text-nowrap">Since last month</span>
          </p> */}
        </div>
        </div>
        </div>
      </div>
      <Chart data={dataout} dataKey="Revenue" title="Doanh thu b??n h??ng" xaxis="Buy_Time"/>
    </div>
  )
}

export default ReportsRevenue;