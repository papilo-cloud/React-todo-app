import {useState, useEffect} from 'react'
import AddForms from './components/AddForms'
import Button from './components/Button'
import Header from './components/Header'
import Tasks from './components/Tasks'
import './index.css'

const Apps = () => {

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
        console.log(toggle)
    }
    useEffect(() => {

        const todo = JSON.parse(localStorage.getItem('task'))
        if (todo) {
            setTasks(todo)
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(tasks))
    }, [tasks])

    
    const p = '+' 
    const y = 'new task'
    const onAdds = ()=>{
        setBtn(!btn)
    }

    return (
        <div className='app-container'>
            <Button onClick={onAdds}
             curText={btn ? p : y}
             selectStyle={btn}/>

            { btn ?<>
                <Header />
                {tasks.length > 0 ? <Tasks 
                toggleComplete={toggleComplete}
                tasks={tasks} onDelete={onDelete}/>: 'Nothing to Show'}</>: 
                <AddForms 
                addTask ={addTasks} onAdd={() => setBtn(!btn)}/> }
        </div>
    )
}
export default Apps


