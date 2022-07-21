import Task from "./Task"


function Tasks({tasks, onDelete, toggleComplete }) {
    return (
        <div className="tasks">
            {tasks.map(task => <Task key={task.id}
             {...task} onDelete={onDelete}
             toggleComplete={toggleComplete}/>
              )}
        </div>
    )
}

export default Tasks
