import React from 'react'
import Blogs from './Blogs'

const Bloglists = ({blogs}) => {
  return (
    
    <div>
        {blogs.map((blg, i) =>
        <Blogs {...blg} key={i}/>
         )}
    </div>
  )
}

export default Bloglists