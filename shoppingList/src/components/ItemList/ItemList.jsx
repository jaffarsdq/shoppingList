import React from "react"

//components
import Item from "../Item/Item"

//css
import './itemList.css'

//toast
import { showError } from "../../utils/toasts"

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

function itemList({shoppingItems, AddQuantity, DecQuantity}) {
    return(
        <div className="shopping-items-wrapper">
           {
                shoppingItems && shoppingItems.map(item => {
                    return (
                        <div className="ItemListWrapper" key={item.id}>
                            <FontAwesomeIcon 
                                className="add-item change-quantity" 
                                icon={faPlus}
                                onClick={() => {
                                    AddQuantity(item.id)
                                }}
                            />
                            <Item
                                itemName = {item.name}
                                itemQuantity = {item.quantity}
                            /> 
                            <FontAwesomeIcon 
                                className="remove-item change-quantity" 
                                icon={faMinus}
                                onClick={() => {
                                    if(item.quantity == 1) showError(`${item.name} is removed from the list`)
                                    DecQuantity(item.id)
                                }}
                            />
                        </div>       
                    )
                })
            }
        </div>
    )
}


export default React.memo(itemList);