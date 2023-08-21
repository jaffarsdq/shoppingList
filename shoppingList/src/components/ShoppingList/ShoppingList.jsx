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

// Context imports
import { ShoppingItemsContext, ShoppingDispatchContext } from '../providers/shoppingContext';

//css import
import './ShoppingList.css'


export default function ShoppingList() {

   const [shoppingItems, dispatch] = useReducer(itemReducer,[]);

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
            <ShoppingItemsContext.Provider value={shoppingItems}>
                <ShoppingDispatchContext.Provider value={dispatch}>
                    <Header/>
                    <ToastContainer/>
                    <div className="current-shopping-list">
                        <InputItem/>
                        <ItemList 
                            AddQuantity={handleAddQuantity}
                            DecQuantity={handleDecQuantity}
                        />
                    </div>
                </ShoppingDispatchContext.Provider>
            </ShoppingItemsContext.Provider>
        </>
    )
}