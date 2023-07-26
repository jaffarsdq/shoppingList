import Item from "../Item/Item"

//css
import './itemList.css'

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

function itemList({shoppingItems}) {
    return(
        <div className="shopping-items-wrapper">
           {
                shoppingItems && shoppingItems.map(item => {
                    return (
                        <div className="ItemListWrapper" key={item.id}>
                            <FontAwesomeIcon className="add-item change-quantity" icon={faPlus}/>
                            <Item
                                itemName = {item.name}
                                itemQuantity = {item.quantity}
                            /> 
                            <FontAwesomeIcon className="remove-item change-quantity" icon={faMinus}/>
                        </div>       
                    )
                })
            }
        </div>
    )
}


export default itemList;