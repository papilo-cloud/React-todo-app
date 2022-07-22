import {useState, useEffect} from 'react'
import AddForms from './AddForms'
import Button from './Button'
import Header from './Header'
import Login from './Login'
import Tasks from './Tasks'
import '../index.css'

const Apps = ({getUser}) => {

    const [btn, setBtn] = useState(true)
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                name: 'Pay for rent',
                completed: true,
            },
            {
                id: 2,
                name: 'Daily meetings with team',
                completed: false,
            },
            {
                id: 3,
                name: 'Check emails',
                completed: false,
            },
            {
                id: 4,
                name: 'Lunch with Emma',
                completed: false,
            },
            {
                id: 5,
                name: 'Meditations',
                completed: false,
            }
        ]
    )
    const [users, setUsers] = useState('jide')

    const addTasks = (txt) =>{
        const rand = Math.random() * 100000
        const newTask = {id:rand, name:txt, completed:false}
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
    const handleLogin = (user) =>{
        setUsers(user)
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

    return (
        <div className='app-container'>
          { users?<> <Button onClick={onAdds}
             curText={btn ? p : y}
             selectStyle={btn}/>

            { btn ?<>
                <Header users={users} getUser={getUser}/>
                {tasks.length > 0 ? <Tasks 
                
                toggleComplete={toggleComplete}
                handleEdit ={handleEditTask}
                tasks={tasks} onDelete={onDelete}/>: 'Nothing to Show'}</>: 
                <AddForms 
                addTask ={addTasks} onAdd={() => setBtn(!btn)}/> }
                </>:
                <Login handleLogin={handleLogin } />}
        </div>
    )
}
export default Apps


