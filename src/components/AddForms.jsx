import { useState } from "react"
import { BsFlag, BsFolderPlus, BsMoonStars } from "react-icons/bs"

const AddForms = ({addTask, onAdd}) => {
    const [text, setText] = useState('')
    const [taskTypes, setTaskTypes] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!text) {
            alert('type in something');
            return 
        }
        console.log({text});
        addTask(text, taskTypes)
        setText('')
    }

    const handleChange = (e)=>{
        setText(e.target.value);
    }

    return (
        
        <div className='form-input'>
            <button className="cancel" onClick={onAdd}>X</button>
            <form className="add-form" onSubmit={handleSubmit}>
                <label>
                <input className="text"
                    type="text" 
                    placeholder="Enter new task"
                    id='textName' 
                    onChange={handleChange}
                    value={text} />
                    </label>
                <div className="buttons">
                    <label className="task-type">
                    <input type="checkbox" 
                        onClick={() => setTaskTypes(!taskTypes)}
                    />
                    <span className="type" >{taskTypes?'business': 'personal'}</span>
                    </label>
                    <button
                        type='submit' 
                        className="form-btn"><span></span>
                    </button>
                </div>
                
        </form>
        <div className="menus">
            <div>
                <BsFolderPlus className="plus"/>
                <BsFlag />
                <BsMoonStars />
            </div>
        </div>
        </div>
    )
}

export default AddForms
