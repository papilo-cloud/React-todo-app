import React, { useState } from 'react'
import Login from './Login'
import Apps from './Apps'
import User from './User'


const Home = () => {
    const [first, setfirst] = useState(false)
    const [users, setUsers] = useState('')
    const [users2, setUsers2] = useState('')
    const [tasks, setTasks] = useState([])

    const [filter, setFilter] = useState('All')

    const FILTERS = { 
      All: () => true,
      active: task => !task.completed,
      completed: task => task.completed
    }

    const FILTERSITEM = Object.keys(FILTERS)

  
    const handleLogin = (fName, lName) =>{
      setUsers(fName)
      setUsers2(lName)
  }
  return (
    <div className='home'>
        {users ?<Apps FILTERS={FILTERS} filter={filter} tasks={tasks}  setTasks={setTasks} getUser={setfirst} first={first} users={users}/>:
        <Login handleLogin={handleLogin } />}
        <User setFilter={setFilter} FILTERSITEM={FILTERSITEM} fName={users} lName={users2} getUser={setfirst} first={first} />
    </div>
  )
}

export default Home