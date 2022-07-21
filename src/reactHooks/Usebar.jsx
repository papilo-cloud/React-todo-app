import React, { useContext } from 'react'
import { GlobalContext } from './Contsxt'
import Login from './Login'
import LogOut from './LogOut'
import Register from './Register'

const Usebar = () => {
  const {state} = useContext(GlobalContext)
  const {users} = state
  if (users) {
    return <LogOut/>
  } else {
    return(
    <>
        <Login/>
        <Register/>
    </>)
  }
}
 
export default Usebar