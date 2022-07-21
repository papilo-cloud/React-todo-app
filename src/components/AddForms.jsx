import { useState } from "react"

const AddForms = ({addTask, onAdd}) => {
    const [text, setText] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!text) {
            alert('type in something');
            return 
        }
        console.log({text});
        addTask(text)
        setText('')
    }

    const handleChange = (e)=>{
        setText(e.target.value);
    }


    return (
        
        <div className='form-input'>
            <button className="cancel" onClick={onAdd}>X</button>
            <form className="add-form" onSubmit={handleSubmit}>
                <input className="text"
                    type="text" 
                    placeholder="Enter new task"
                    id='textName' 
                    onChange={handleChange}
                    value={text} />
                <div className="buttons">
                    <button className="date">Today</button>
                    <button
                        type='submit' 
                        className="form-btn"><span></span>
                    </button>
                </div>
        </form>
        <div className="menus">

        </div>
        </div>
    )
}

export default AddForms
