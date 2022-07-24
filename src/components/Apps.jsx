import {useState, useEffect} from 'react'
import AddForms from './AddForms'
import Button from './Button'
import Header from './Header'
import Tasks from './Tasks'
import '../index.css'
import Information from './Information'

const Apps = ({getUser,users,first, tasks, setTasks,FILTERS,filter}) => {

    const [btn, setBtn] = useState(true)
    
    

    const addTasks = (txt,type) =>{
        const rand = Math.random() * 100000
        const newTask = {id:rand, name:txt, completed:false, taskType:type}
        setTasks([...tasks, newTask])
    }

    const onDelete = (id) =>{
        const del = tasks.filter(tssk => tssk.id !== id)
         console.log(del);
         setTasks(del)
    }
    const toggleComplete = (id) =>{
        const toggle = tasks.map(task => {
            if (id === task.id) {
                return {...task, completed:!task.completed}
            }
            return task
        });
        setTasks(toggle)
    }
    const handleEditTask = (id, tsk) =>{
        const newTask = tasks.map(task => {
            if (id === task.id) {
                return {...task, name:tsk}
            }
            return task
        })
        setTasks(newTask)
    }
    
    // useEffect(() => {

    //     const todo = JSON.parse(localStorage.getItem('task'))
    //     if (todo) {
    //         setTasks(todo)
    //     }
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem('task', JSON.stringify(tasks))
    // }, [tasks])

    // const getUser = () =>{
    //     console.log('Helo world')
    // }

    
    const p = '+' 
    const y = 'new task'
    const onAdds = ()=>{
        setBtn(!btn)
    }
    // const length = tasks.filter(task => !task.taskType)

    return (
        <div className='app-container'>
          <> <Button onClick={onAdds}
             curText={btn ? p : y}
             selectStyle={btn}/>

            { btn ?<>
                <Header users={users} 
                first={first} tasks={tasks} getUser={getUser}/>
                {tasks.length > 0 ? <Tasks 
                FILTERS={FILTERS}
                filter={filter}
                toggleComplete={toggleComplete}
                handleEdit ={handleEditTask}
                tasks={tasks} onDelete={onDelete}/>: <Information /> }</>: 
                <AddForms 
                addTask ={addTasks} 
                tasks={tasks}
                onAdd={() => setBtn(!btn)}/> }
                </>:
                
        </div>
    )
}
export default Apps


