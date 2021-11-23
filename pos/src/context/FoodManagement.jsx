import {useState, createContext, useEffect} from "react";
import {requireFoodList, createNewOrder,requireRecentBill} from '../api/services';


export const FoodManagement = createContext();


const FoodProvider = ({children}) => {

    const [foodList, setFoodList] = useState([]);
    const [cartItemList, setCartItemList] = useState([]);
    const [itemDetail,setItemDetail] = useState([]);
    const [recentBill,setRecentBill] = useState([])

    useEffect(() =>{

        requireFoodList(setFoodList);
        requireRecentBill(setRecentBill)

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
        item.item.amount = item.item.amount < item.item.Instock ? item.item.amount + 1 : item.item.amount;
        setCartItemList([...cartItemList]);
    }
    function DecreaseItem(item) {
        item.item.amount = item.item.amount > 0 ? item.item.amount - 1 : 0;
        setCartItemList([...cartItemList]);
    }

    function placeOrder(callback) {

        const data = {
            User_Id: 1,
            items: cartItemList
        }

        createNewOrder(data, res => {
            console.log(res);
            callback(res.data);
            setCartItemList([]);
        });
        
    }


    const data = {
        setFoodList,
        foodList,
        cartItemList,
        modifyAmountInCart,
        IncreaseItem,
        DecreaseItem,
        itemDetail,
        setItemDetail,
        placeOrder,
        recentBill
    };

    return (
        <FoodManagement.Provider value={data}>
            {children}
        </FoodManagement.Provider>
    )
}

export default FoodProvider;