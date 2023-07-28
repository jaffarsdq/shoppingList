//hooks
import { useReducer } from "react"

//components
import Header from "../Header/Header"
import InputItem from "../InputItem/InputItem"
import ItemList from "../ItemList/ItemList"

//toast
import { ToastContainer } from "react-toastify"

//reducer
import itemReducer from "../../reducers/itemReducer"


export default function ShoppingList() {

   const [shoppingItems, dispatch] = useReducer(itemReducer,[]);

    function handleAddItem(itemName) {
         dispatch({
            type: 'add_item',
            itemName: itemName
         })
    }

    function handleAddQuantity(itemId) {
        dispatch({
            type: 'increment_item',
            itemId: itemId
        })
    }

    function handleDecQuantity(itemId) {
        dispatch({
            type: 'decrement_item',
            itemId: itemId
        })
    }

    return (
        <>
            <Header/>
            <ToastContainer/>
            <div className="current-shopping-list">
                <InputItem addItem={handleAddItem}/>
                <ItemList 
                    shoppingItems={shoppingItems}
                    AddQuantity={handleAddQuantity}
                    DecQuantity={handleDecQuantity}
                />
            </div>
        </>
    )
}