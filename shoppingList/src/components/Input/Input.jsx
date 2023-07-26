import './Input'


function Input() {
    return (
        <div className="inputItem-wrapper">
            <input 
                className='inputItem'
                type="text"
                placeholder="Add an Item..."
            />
            <button className='addBtn'>
                Add
            </button>
        </div>
    )
}

export default Input;