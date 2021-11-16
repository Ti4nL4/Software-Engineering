import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './Datepick.css'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
const datadatepick = []
const Datepick = () => {
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
      datadatepick = res.data
      console.log(res, 'nguyenthucquan')
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
   
      <div className="container">
        <form method="get">
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
        {/* <button type="button" class="btn btn-primary">Xuất báo cáo</button> */}

        </div>
      </div>
      </form>
    </div>
  );
      };

export {Datepick, datadatepick};