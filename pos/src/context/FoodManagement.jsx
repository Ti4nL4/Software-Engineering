import {useState, createContext, useEffect} from "react";
import {requireFoodList, createNewOrder} from '../api/services';


export const FoodManagement = createContext();


const FoodProvider = ({children}) => {

    const [foodList, setFoodList] = useState([]);
    const [cartItemList, setCartItemList] = useState([]);
    const [itemDetail,setItemDetail] = useState([]);

    useEffect(() =>{

        
        requireFoodList(setFoodList);
        
    }, []);


    function modifyAmountInCart(item, amount = 1) {

        const foundItems = cartItemList.filter(cartItem => cartItem.Id === item.Id);

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
        item.amount = item.amount < item.Instock ? item.amount + 1 : item.amount;
        setCartItemList([...cartItemList]);
    }
    function DecreaseItem(item) {
        item.amount = item.amount > 0 ? item.amount - 1 : 0;
        setCartItemList([...cartItemList]);
    }

    function removeItem(item) {

        const foundItems = cartItemList.filter(cartItem => cartItem.Id !== item.Id);

        setCartItemList(foundItems);
    }

    function placeOrder(callback) {

        const data = {
            User_Id: 1,
            items: cartItemList
        }

        createNewOrder(data, res => {
            
            console.log(res.isSuccess);
            callback(res.isSuccess);
            if (res.isSuccess)
                setCartItemList([]);
        });
        
    }


    const data = {
        foodList,
        cartItemList,
        modifyAmountInCart,
        IncreaseItem,
        DecreaseItem,
        itemDetail,
        setItemDetail,
        placeOrder,
        removeItem
    };

    return (
        <FoodManagement.Provider value={data}>
            {children}
        </FoodManagement.Provider>
    )
}

export default FoodProvider;