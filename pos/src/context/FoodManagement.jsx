import {useState, createContext, useEffect} from "react";
import {requireFoodList} from '../api/services';


export const FoodManagement = createContext();


const FoodProvider = ({children}) => {

    const [foodList, setFoodList] = useState([]);
    const [cartItemList, setCartItemList] = useState([]);

    useEffect(() =>{

        requireFoodList(setFoodList);

    }, []);


    function modifyAmountInCart(item, amount = 1) {

        const foundItems = cartItemList.filter(cartItem => cartItem._id === item._id);

        if (foundItems.length === 0) {
            let cartItem = {...item, amount: amount};
            setCartItemList([...cartItemList, cartItem]);
        }
        else {
            foundItems[0].amount += amount;
            foundItems[0].amount = foundItems[0].amount > 0 ? foundItems[0].amount : 0;
            setCartItemList([...cartItemList]);
        }
    }


    const data = {
        foodList,
        cartItemList,
        modifyAmountInCart
    };

    return (
        <FoodManagement.Provider value={data}>
            {children}
        </FoodManagement.Provider>
    )
}

export default FoodProvider;