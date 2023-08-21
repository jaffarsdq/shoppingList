//css
import './input.css'

//toasts
import {showSuccess} from '../../utils/toasts';

//toasts css
import 'react-toastify/dist/ReactToastify.css';

// Context import
import { ShoppingDispatchContext } from '../providers/shoppingContext';

//hooks
import { useContext } from 'react';

//react-hook-form
import {useForm} from 'react-hook-form'

function Input() {
    
    const {register, handleSubmit, formState: { errors }} = useForm();

    const dispatch = useContext(ShoppingDispatchContext);

    const handleFormSubmission = (data) => {
        dispatch({
            type: 'add_item',
            itemName: data.item
        })
        showSuccess('Successfully added item');
    }

    return (
        <div className="inputItem-wrapper">
            <form onSubmit={handleSubmit(handleFormSubmission)}>
                <input
                    className='inputItem'
                    type="text"
                    placeholder="Add an Item..."
                    name="item"
                    {...register("item",{required : true, minLength : 3})}
                />
                <button className='addBtn'>
                    Add
                </button>
            </form>
            <div className='error-indication'>
                {errors.item && errors.item.type == 'required' && <p>Item is missing</p>}
                {errors.item && errors.item.type == 'minLength' && <p>Item must contain above 2 letters</p>}
            </div>
        </div>
    )
}

export default Input;