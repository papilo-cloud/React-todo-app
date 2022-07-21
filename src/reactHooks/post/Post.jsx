import React,{useContext} from 'react'
import { GlobalContext } from '../Contsxt'


const Post = ({title, author, content}) => {
  const {theme} = useContext(GlobalContext)
  return (
    <div className='post'>
        <h3 style={{color: theme.secondaryColor}}>{title} </h3>
        <div>{content} </div>
        <i>Written by <b>{author}</b> </i>
    </div>
  )
}

export default Post