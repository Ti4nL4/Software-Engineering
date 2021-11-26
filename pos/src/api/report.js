import axios from 'axios';

const getData = async callback =>{
    try {
		const res =await axios.get('http://localhost:9001/reports/list')
		callback(res.data)
	  } catch (error) {
		console.log(error.message)
	  }
};

const _Render = async(checkInDate,checkOutDate, callback) => {

	try {
        const res = await axios.get('http://localhost:9001/reports'
        ,
        { 
          params:{
            start: checkInDate, end: checkOutDate
          }
        }
        )
        callback(res.data)
      } catch (error) {
        console.log(error.message)
      }
  
};

export {getData, _Render};