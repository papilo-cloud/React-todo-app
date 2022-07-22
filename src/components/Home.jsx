import React, { useState } from 'react'
import Apps from './Apps'
import User from './User'


const Home = () => {
    const [first, setfirst] = useState(true)
    const getUser = () =>{
        console.log('Helo world')
    }
  return (
    <div className='home'>
        <Apps getUser={getUser}/>
        <User />
    </div>
  )
}

export default Home