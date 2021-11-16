import Chart from '../components/Chart'
import BasicDateRangePicker from '../components/Datepick'
import Header from '../components/Header';
import React,{ useState, useEffect } from 'react';
import axios from 'axios';

import DatePicker from "react-datepicker";
import '../components/Datepick.css'
import "react-datepicker/dist/react-datepicker.css";
// const data= [{date: "2019-01-03", count: 15},
//              {date: "2019-01-05", count: 18},
//              {date: "2019-01-06", count: 32},
//              {date: "2019-01-07", count: 30},
//              {date: "2019-01-08", count: 100},
//              {date: "2019-01-09", count: 20},
//              {date: "2019-01-10", count: 50}
//             ]
function ReportProduct() {

    //const data = [{"Buy_Time":"2021-11-13T17:00:00.000Z","User_Id":1,"Bill_Id":1,"Product_Id":1,"Quantity":1,"Product_Name":"Súp","Price":5,"Fund":3.12},{"Buy_Time":"2021-11-13T17:00:00.000Z","User_Id":1,"Bill_Id":1,"Product_Id":2,"Quantity":3,"Product_Name":"BBQ","Price":15.2,"Fund":10.65},{"Buy_Time":"2021-11-11T17:00:00.000Z","User_Id":2,"Bill_Id":2,"Product_Id":1,"Quantity":2,"Product_Name":"Súp","Price":5,"Fund":3.12},{"Buy_Time":"2021-11-11T17:00:00.000Z","User_Id":2,"Bill_Id":2,"Product_Id":3,"Quantity":5,"Product_Name":"Trái cây","Price":4,"Fund":1.23}]
    const [data,setdata]=useState('')
    
    useEffect(()=>{
      const getData = async ()=>{
        try {
          const res = await axios.get('http://localhost:9001/reports/list')
          // console.log(res.data.data[3].User_Id)
          // console.log(res.data['data'][0].Buy_Time)
          setdata(res.data)
          //console.log(res.data)
        } catch (error) {
          console.log(error.message)
        }
      }
      getData()
    },[])
    console.log(data)
    let time = []
    let count = []
    for (let i = 0; i< data.length; i++) {
      if (time.length == 0 ){
        time.push(data[i].Buy_Time)
      }
      else {
        let check = false
        for (let j = 0; j < time.length; j++){
          if (data[i].Buy_Time==time[j]){
            check = true
          }
        }
        if (check == false){
          time.push(data[i].Buy_Time)
        }
      }
    }
    console.log(time)
    for (let i = 0; i < time.length; i++){
      let temp = 0
      for (let j = 0; j < data.length; j++){
        if (data[j].Buy_Time == time[i]){
           temp += data[j].Quantity
        }
      }
      count.push(temp)
    }
    console.log(count)
    time.sort();
    const dataout = []
    for (let i = 0; i < count.length; i++){
      let temp = new Date(time[i])
      temp = temp.toLocaleDateString('en-US')
      const obj = {
        Buy_Time: temp,
        Quantity: count[i]
      }
      dataout.push(obj)
    }
    console.log(dataout)

    let tienidol = {data: data}




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
      try {
        const res = await axios.get('http://localhost:9001/reports'
        ,
        { 
          params:{
            start: checkInDate, end: checkOutDate
          }
        }
        )
        // console.log(res.data.data[3].User_Id)
        // console.log(res.data['data'][0].Buy_Time)
        setdata(res.data)
        console.log(res, 'nguyenthucquan')
      } catch (error) {
        console.log(error.message)
      }
    }
    
  return(
    
    <div class='container'>
      <Header/>
        <div className="container">
            {/* <form method="get"> */}
            <div class ='row'>
            <div class ='col-md-3 col-sm-6'>
              {/* <label>Check-in</label> */}
              <DatePicker
                selected={checkInDate}
                //minDate={new Date()}
                onChange={handleCheckInDate}
                placeholderText ="Start date"
                dateFormat="yyyy-MM-dd"
                name='start'
              />
            </div>
            <div class ='col-md-3 col-sm-6'>
              {/* <label>Check-out</label> */}
              <DatePicker
                selected={checkOutDate}
                minDate={checkInDate}
                onChange={handleCheckOutDate}
                placeholderText ="End date"
                dateFormat="yyyy-MM-dd"
                name='end'
              />
            </div>
            <div class ='col-md-3 col-sm-12'>
            <button type="button" class="btn btn-primary" onClick={RenderReport}>Xuất báo cáo</button>
            {/* <button type="submit" class="btn btn-primary">Xuất báo cáo</button> */}
            </div>
          </div>
          {/* </form> */}
        </div>
      {console.log(tienidol.data,'quanidol')}
      <Chart data={dataout} dataKey="Quantity" title="Sản phẩm" xaxis="Buy_Time"/>
    </div>
  )
}

export default ReportProduct;