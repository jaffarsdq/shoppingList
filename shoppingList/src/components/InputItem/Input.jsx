import './input.css'

//toasts
import {showSuccess} from '../../utils/toasts';
//toasts css
import 'react-toastify/dist/ReactToastify.css';


function Input() {
    return (
        <div className="inputItem-wrapper">
            <input 
                className='inputItem'
                type="text"
                placeholder="Add an Item..."
            />
            <button className='addBtn' onClick={() => showSuccess('Successfully added an Item')}>
                Add
            </button>
        </div>
    )
}

export default Input;