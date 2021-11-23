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
const requireRecentBill = callback =>{

  axios.get(url + 'recent-bill')
    .then(res => {
      
      const data = res.data;
      callback(data);
    })
    .catch(error => console.log(error));
};
const requireCustomer = callback =>{

  axios.get(url + 'customer')
    .then(res => {
      const data = res.data;
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

const createNewProduct =(data)=>{
  axios.post(url +'add-product',data)
    .then(res=>{
      console.log("SSSS");
    })
    .catch(err=>{
      console.log(err)
    })
}

const deleteProduct =(id)=>{
  
  console.log(id);
  const dId={
    id:id
  }
  axios.post(url +'delete-product',dId)
  .then(res=>{
    console.log("ssss");
  })
  .catch(err=>console.log(err))
}
const getProductByType =(type,callback)=>{
  axios.get(url + 'get-product-by-type',type)
  .then(res => {
    
    const data = res.data;
    // console.log(data);
    callback(data);
  })
  .catch(error => console.log(error));
}
const updateProduct=(data,callback)=>{
  axios.post(url + 'update-product', data)
  .then(res=>{
    console.log("EditSuccess")
  })
  .catch(err=>console.log(err))
}
const deleteCustomer =(id)=>{
  console.log(id);
  const dId={
    id:id
  }
  axios.post(url +'delete-customer',dId)
  .then(res=>{
    console.log("delete-customer");
  })
  .catch(err=>console.log(err))
}

export {requireFoodList, createNewOrder,createNewProduct,
  deleteProduct,getProductByType,updateProduct,requireRecentBill,
  requireCustomer,deleteCustomer
};