//uuid
import {v4 as uuidv4} from 'uuid'

function itemReducer(shoppingItems,action) {
    if(action.type == 'add_item') {
        return [
            ...shoppingItems,
            {
                id:uuidv4(),
                name: action.itemName,
                quantity:1
            }
        ];
    } else if (action.type == 'increment_item') {
        const newShoppingItem = shoppingItems.map((item) => {
            if(item.id == action.itemId) {
                item.quantity++;
            }
            return item;
        });
        return newShoppingItem;
    } else if (action.type == 'decrement_item') {
        let newShoppingItem = shoppingItems.map((item) => {
            if(item.id == action.itemId) {
                item.quantity--;
            }
            return item;
        })
        newShoppingItem = newShoppingItem.filter((item) => item.quantity > 0);
        return newShoppingItem;
    }
}

export default itemReducer;