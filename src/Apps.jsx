import {useState} from 'react'
import AddForms from './components/AddForms'
import Button from './components/Button'
import Header from './components/Header'
import Tasks from './components/Tasks'

const Apps = () => {

    const [btn, setBtn] = useState(true)
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                name: 'Pay for rent',
                reminder: false,
            },
            {
                id: 2,
                name: 'Daily meetings with team',
                reminder: false,
            },
            {
                id: 3,
                name: 'Check emails',
                reminder: false,
            },
            {
                id: 4,
                name: 'Lunch with Emma',
                reminder: false,
            },
            {
                id: 5,
                name: 'Meditations',
                reminder: false,
            }
        ]
    )

    const addTasks = (txt) =>{
        const rand = Math.random() * 1000
        const newTask = {id:rand, name:txt}
        setTasks([...tasks, newTask])
    }

    const onDelete = (id) =>{
        const del = tasks.filter(tssk => tssk.id !== id)
         console.log(del);
         setTasks(del)
    }
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

            { btn ? <div className='app-data'>
                <Header />
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete}/>: 'Nothing to Show'}

            </div> : 
            <div className='app-form'>
                <AddForms addTask ={addTasks} onAdd={() => setBtn(!btn)}/>
            </div> }
        </div>
    )
}
export default Apps


