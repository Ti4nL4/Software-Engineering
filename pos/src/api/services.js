
const url = 'https://mysterious-caverns-04457.herokuapp.com/product';


const requireFoodList = callback =>{

    fetch(url).then(response => response.json())
    .then(data => callback(data));
};


export {requireFoodList};