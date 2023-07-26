//hooks
import { useState } from "react"

//components
import Header from "../Header/Header"
import InputItem from "../InputItem/InputItem"
import ItemList from "../ItemList/ItemList"

//toast
import { ToastContainer } from "react-toastify"

//uuid
import {v4 as uuidv4} from 'uuid'


export default function ShoppingList() {

    const [shoppingItems, setShoppingItems] = useState([]);

    function handleAddItem(itemName) {
         setShoppingItems(
            [
                ...shoppingItems,
                {
                    id:uuidv4(),
                    name: itemName,
                    quantity:1
                }
             ]
         )
    }

    function handleAddQuantity(itemId) {
        const newShoppingItem = shoppingItems.map((item) => {
            if(item.id == itemId) {
                item.quantity++;
            }
            return item;
        })
        setShoppingItems(newShoppingItem);
    }

    function handleDecQuantity(itemId) {
        let newShoppingItem = shoppingItems.map((item) => {
            if(item.id == itemId) {
                item.quantity--;
            }
            return item;
        })
        newShoppingItem = newShoppingItem.filter((item) => item.quantity > 0)
        setShoppingItems(newShoppingItem);
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