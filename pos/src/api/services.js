import axios from "axios";

// const url = 'https://fierce-sands-72710.herokuapp.com/food';
const url = 'http://localhost:3000/';
const dataS={"product_name":"Cháo yến Yến Việt đậu xanh","Product_Type":"Cháo","Price":12000,"Fund":8000,"Product_Description":"Là dòng sản phẩm cháo yến ăn liền tiện lợi từ thương hiệu Yến Việt. Cháo yến Yến Việt đậu xanh thịt bằm ly 50g có chứa tổ yến tự nhiên cùng rau thịt tươi sấy thăng hoa mang hương vị đậu xanh thịt bằm tươi ngon và giàu dinh dưỡng là lựa chọn hoàn hảo cho bữa ăn tiện lợi, đơn giản những vẫn đủ chất","Instock":10,"Image":"https://cdn.tgdd.vn/Products/Images/2564/191290/bhx/chao-yen-yenviet-dau-xanh-thit-bam-ly-50g-2-org.jpg"}


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

const createNewProduct =()=>{
  axios.post(url +'add-product',dataS)
    .then(res=>{
      console.log("SSSS");
    })
    .catch(err=>{
      console.log(err)
    })
}

export {requireFoodList, createNewOrder,createNewProduct};