import axios from "axios";

const url = 'https://fierce-sands-72710.herokuapp.com/food';


const requireFoodList = callback =>{

    // fetch(url).then(response => response.json())
    // .then(data => callback(data));

    axios.get(url)
      .then(res => {
        const data = res.data;
        console.log("res");
        callback(data);
      })
      .catch(error => console.log(error));
};


export {requireFoodList};