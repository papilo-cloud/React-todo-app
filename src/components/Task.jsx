import { MdDelete} from 'react-icons/md'
import { useState } from "react"

const Task = ({id, name,handleEdit,onDelete,toggleComplete,completed}) => {

    const [newTask, setNewTask] = useState(name)
    const [editing, setEditing] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        handleEdit(id,newTask)
        setEditing(false)
    }

   const renderEditing = <form className="edit" onSubmit={handleSubmit}>
        <div>
        <label>
            <input type="text" 
            value={newTask}
            onChange={e => setNewTask(e.target.value)}/>
        </label>
        </div>
        <div className="edit-btn">
            <button className="calcel-btn" 
            type='button'
            onClick={()=> setEditing(false) }>C</button> 
            <button className="save" type="submit">S</button> 
        </div>
        
   </form>

   const renderView = <div className='task' onDoubleClick={() => setEditing(true)}>
   <label className='label stl'>
       <p className="styl">{name}</p>
       <input type="checkbox" 
            checked={completed}
            style={{background:'red'}}
            readOnly
            onClick={() => toggleComplete(id)}
        />
       <span className='checkmark'></span>
   </label>     
   <div className="task-btn">
       <button className="delete-btn" 
       onClick={()=> onDelete(id) }>
            <MdDelete />
        </button> 
   </div>         
</div>
   
    return (
        <>
        {editing ? renderEditing: renderView}
        </>
    )
}

export default Task
