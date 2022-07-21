import React, { useContext } from 'react'
import { GlobalContext } from './Contsxt';

const LogOut = () => {
  const {state, dispatch} = useContext(GlobalContext)
  const {users} = state
  return (
        <form onSubmit={e => {e.preventDefault(); dispatch({type: 'LOGOUT'})}}>
        Logged in as: <b>{users}</b> 
        <input type="submit" value="Logout" />
        </form>
  )
}

export default LogOut 