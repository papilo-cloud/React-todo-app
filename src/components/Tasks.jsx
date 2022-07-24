import Task from "./Task"


function Tasks({tasks, onDelete, toggleComplete,handleEdit,FILTERS,filter }) {
    return (
        <div className="tasks">
            {tasks.filter(FILTERS[filter]).map(task => <Task key={task.id}
             {...task} onDelete={onDelete}
             handleEdit={handleEdit}
             toggleComplete={toggleComplete}/>
              )}
        </div>
    )
}

export default Tasks
 