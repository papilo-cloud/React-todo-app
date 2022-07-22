import React, { useState } from 'react'
import Login from './Login'
import Apps from './Apps'
import User from './User'


const Home = () => {
    const [first, setfirst] = useState(true)
    const [users, setUsers] = useState('jide')
    const [users2, setUsers2] = useState('jide')

    const getUser = () =>{
        console.log('Helo world')
    }
    const handleLogin = (fName, lName) =>{
      setUsers(fName)
      setUsers2(lName)
  }
  return (
    <div className='home'>
        <Apps getUser={getUser} users={users}/>
        <Login handleLogin={handleLogin } />
        <User fName={users} lName={users2} />
    </div>
  )
}

export default Home