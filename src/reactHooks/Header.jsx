import React,{useContext} from 'react'
import {GlobalContext} from './Contsxt'


const Header = ({text}) => {
    const {theme} = useContext(GlobalContext)
  return (
    <h1 style={{color: theme.primaryColor}} >{text}</h1>
  )
}

export default Header