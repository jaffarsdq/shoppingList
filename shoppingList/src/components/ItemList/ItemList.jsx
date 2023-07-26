import Item from "../Item/Item"

function itemList({shoppingItems}) {
    return(
        <div className="shopping-items-wrapper">
           {
                shoppingItems && shoppingItems.map(item => {
                    return (
                        <Item
                            itemName = {item.name}
                            key={item.id}
                            itemQuantity = {item.quantity}
                        />        
                    )
                })
            }
        </div>
    )
}


export default itemList;