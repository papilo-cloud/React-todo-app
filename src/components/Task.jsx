

const Task = ({task, onDelete}) => {
   
    return (
        <div className='task'>
            <label className='label'>
                <h4 className="styl">{task.name}</h4>
                <input type="checkbox" />
                <span className='checkmark'></span>
            </label>     
            <span className="delete-btn" onClick={()=> onDelete(task.id) }>A</span>           
        </div>
    )
}

export default Task
