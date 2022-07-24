import {BsSave} from 'react-icons/bs'
import { MdDelete} from 'react-icons/md'
import { useState } from "react"
import { BiUndo } from 'react-icons/bi'

const Task = ({id, name,handleEdit,onDelete,toggleComplete,completed, taskType, FILTERS}) => {

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
                onClick={()=> setEditing(false) }>
                <BiUndo className='editbtn' />
            </button> 
            <button className="save" type="submit">
                <BsSave className='editbtn' />
            </button> 
        </div>
        
   </form>

   const renderView = <div className='task' onDoubleClick={() => setEditing(true)}>
   <label className='label stl'>
       <p className="styl">{name}</p>
       <input type="checkbox" 
            checked={completed}
            readOnly
            onClick={() => toggleComplete(id)}
        />
       <span className={taskType? 'checkmark taskType':'checkmark'}></span>
   </label>     
   <div className="task-btn">
       <button className="delete-btn" 
       onClick={()=> onDelete(id) }>
            <MdDelete className='editbtn' />
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
