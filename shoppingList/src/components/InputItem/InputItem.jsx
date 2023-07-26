//css
import './input.css'

//toasts
import {showSuccess} from '../../utils/toasts';

//toasts css
import 'react-toastify/dist/ReactToastify.css';

//hooks
import { useState } from 'react';

function Input({addItem}) {
    
    const [itemName,setItemName] = useState('');
    return (
        <div className="inputItem-wrapper">
            <input 
                className='inputItem'
                type="text"
                placeholder="Add an Item..."
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <button className='addBtn' 
                onClick={() =>{ 
                    addItem(itemName)
                    setItemName('')
                    showSuccess('Successfully added an Item')
                }}
            >
                Add
            </button>
        </div>
    )
}

export default Input;