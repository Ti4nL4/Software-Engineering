import {useState, createContext, useEffect} from "react";
import {requireFoodList} from '../api/services';


export const FoodManagement = createContext();


const FoodProvider = ({children}) => {

    const [foodList, setFoodList] = useState([]);
    const [cartItemList, setCartItemList] = useState([]);
    const [itemDetail,setItemDetail] = useState([]);

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

    function IncreaseItem(item) {
        item.item.amount = item.item.amount < item.item.quantity ? item.item.amount + 1 : item.item.amount;
        setCartItemList([...cartItemList]);
    }
    function DecreaseItem(item) {
        item.item.amount = item.item.amount > 0 ? item.item.amount - 1 : 0;
        setCartItemList([...cartItemList]);
    }



    const data = {
        foodList,
        cartItemList,
        modifyAmountInCart,
        IncreaseItem,
        DecreaseItem,
        itemDetail,
        setItemDetail
    };

    return (
        <FoodManagement.Provider value={data}>
            {children}
        </FoodManagement.Provider>
    )
}

export default FoodProvider;