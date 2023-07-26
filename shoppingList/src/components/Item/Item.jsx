import './Item.css'

function Item({itemName,itemQuantity}) {
    return(
        <div className="item-wrapper">
            <div className="itemName">
                {itemName}
            </div>
            <div className="itemQuantity">
                {itemQuantity}
            </div>
        </div>
    )
}

export default Item;