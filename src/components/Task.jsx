import { useState } from "react"

const Task = ({id, name, onDelete,toggleComplete,completed}) => {
   console.log(completed)
   
    return (
        <div className='task'>
            <label className='label stl'>
                <h4 className="styl">{name}</h4>
                <input type="checkbox" 
                checked={completed}
                style={{background:'red'}}
                onClick={() => toggleComplete(id)}/>
                <span className='checkmark'></span>
            </label>     
            <span className="delete-btn" 
            onClick={()=> onDelete(id) }>A</span>           
        </div>
    )
}

export default Task
