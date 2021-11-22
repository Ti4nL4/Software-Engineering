import axios from "axios";

// const url = 'https://fierce-sands-72710.herokuapp.com/food';
const url = 'http://localhost:3000/';


const requireFoodList = callback =>{

    // fetch(url).then(response => response.json())
    // .then(data => callback(data));
  
    axios.get(url + 'product')
      .then(res => {
        
        const data = res.data;
        // console.log(data);
        callback(data);
      })
      .catch(error => console.log(error));
};

const createNewOrder = (data, callback) => {

    console.log(data);
    axios.post(url + 'add-bill', data)
    .then(res => {callback(res.data)
      console.log(res);
    }
    )
    .catch(error => callback(error))
  
};

export {requireFoodList, createNewOrder};