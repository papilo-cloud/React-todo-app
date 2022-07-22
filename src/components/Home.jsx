import React, { useState } from 'react'
import Login from './Login'
import Apps from './Apps'
import User from './User'


const Home = () => {
    const [first, setfirst] = useState(false)
    const [users, setUsers] = useState('')
    const [users2, setUsers2] = useState('')

    // const getUser = () =>{
    //     console.log('Helo world')
    // }
    const handleLogin = (fName, lName) =>{
      setUsers(fName)
      setUsers2(lName)
  }
  return (
    <div className='home'>
        {users ?<Apps getUser={setfirst} first={first} users={users}/>:
        <Login handleLogin={handleLogin } />}
        <User fName={users} lName={users2} getUser={setfirst} first={first} />
    </div>
  )
}

export default Home