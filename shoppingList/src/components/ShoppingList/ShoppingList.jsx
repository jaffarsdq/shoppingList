import Header from "../Header/Header"
import InputItem from "../InputItem/Input"
import ItemList from "../ItemList/ItemList"

const shoppingItems = [
    {id: 1, name: 'Apple', quantity:2},
    {id: 2, name: 'Orange', quantity:1}
]


export default function ShoppingList() {
    return (
        <>
            <Header/>
            <div className="current-shopping-list">
                <InputItem/>
                <ItemList shoppingItems={shoppingItems}/>
            </div>
        </>
    )
}