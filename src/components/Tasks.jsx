import Task from "./Task"


function Tasks({tasks, onDelete, toggleComplete,handleEdit }) {
    return (
        <div className="tasks">
            {tasks.map(task => <Task key={task.id}
             {...task} onDelete={onDelete}
             handleEdit={handleEdit}
             toggleComplete={toggleComplete}/>
              )}
        </div>
    )
}

export default Tasks
