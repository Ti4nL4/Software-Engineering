import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './Datepick.css'
import "react-datepicker/dist/react-datepicker.css";

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
  const RenderReport =()=> {
    console.log(checkInDate)
    console.log(checkOutDate)
  }
  return (
   
      <div className="container">
        <div class ='row'>
        <div class ='col-md-3 col-sm-6'>
          {/* <label>Check-in</label> */}
          <DatePicker
            selected={checkInDate}
            minDate={new Date()}
            onChange={handleCheckInDate}
            placeholderText ="Start date"
          />
        </div>
        <div class ='col-md-3 col-sm-6'>
          {/* <label>Check-out</label> */}
          <DatePicker
            selected={checkOutDate}
            minDate={checkInDate}
            onChange={handleCheckOutDate}
            placeholderText ="End date"
          />
        </div>
        <div class ='col-md-3 col-sm-12'>
        <button type="button" class="btn btn-primary" onClick={RenderReport}>Xuất báo cáo</button>
        </div>
      </div>
    </div>
  );
      };

export default Datepick;

// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import DateRangePicker from '@mui/lab/DateRangePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import Box from '@mui/material/Box';

// export default function BasicDateRangePicker() {
//   const [value, setValue] = React.useState([null, null]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DateRangePicker
//         startText="Check-in"
//         // endText="Check-out"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(startProps, endProps) => (
//           <React.Fragment>
//             <TextField {...startProps} />
//             <Box sx={{ mx: 2 }}> to </Box>
//             <TextField {...endProps} />
//           </React.Fragment>
//         )}
//       />
//     </LocalizationProvider>
//   );
// }
