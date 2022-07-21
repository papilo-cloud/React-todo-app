import React,{useContext, useEffect, useState} from 'react'
import appReducer from './Reducer'
import Usebar from './Usebar'
import './hook.css'
import CreatePost from './post/CreatePost'
import PostList from './post/PostList'
import Header from './Header'
import { AppProvider, GlobalContext } from './Contsxt'
import ChangeThemes from './ChangeThemes'


const App = () => {
  const {state} = useContext(GlobalContext)
  const {users} = state;
  console.log(state)

  useEffect(() => {
   if (users) { 
      document.title =`${users} - REACT HOOKS BLOG`}
   else{
    document.title = 'REACT HOOKS BLOG'
   }
   
  }, [users])
  
  return (
      
      <div className='app'>
        <Header text='React Hooks Blog' />
        <ChangeThemes />
        <Usebar />
        {users && <CreatePost/>}
        <PostList />
      </div>
  )
}

export default App