import {useState, useEffect} from "react";
import {getData, _Render} from '../api/report';

import Chart from '../components/Chart'
import Header from '../components/Header';
import DatePicker from "react-datepicker";
import '../components/Datepick.css'
import "react-datepicker/dist/react-datepicker.css";


function ReportPro() {
    const [data,setData]=useState('')
    
    useEffect(()=>{
      getData(setData)
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

    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
  
    const handleCheckInDate = (date) => {
      setCheckInDate(date);
      setCheckOutDate(null);
    };
    const handleCheckOutDate = (date) => {
      setCheckOutDate(date);
    };
    
    const RenderReport = ()=> {
      console.log(checkInDate)
      console.log(checkOutDate)
      _Render(checkInDate,checkOutDate,setData)
    }
    
  return(
    
    <div class='container bg-white' style={{  height: "750px"}}>
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
            <div class ='col-md-3 col-sm-12 mt-4'>
            <button type="button" class="btn btn-primary" onClick={RenderReport}>Xuất báo cáo</button>
            {/* <button type="submit" class="btn btn-primary">Xuất báo cáo</button> */}
            </div>
          </div>
          {/* </form> */}
        </div>
      <Chart data={dataout} dataKey="Quantity" title="Sản phẩm" xaxis="Buy_Time"/>
    </div>
  )
}

export default ReportPro;