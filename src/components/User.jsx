import React from 'react'
import { BsCaretLeft } from 'react-icons/bs'
import img from './images/papilo.jpg'

const User = ({lName,fName,first,getUser}) => {
  return (
    <div className={first ? 'users open':'users'}>
      <button className='butn'>
        <BsCaretLeft onClick={() => getUser(!first)} className='bs'/>
      </button>
        <div className='img'>
          <img src={img} width={100} alt="user image" />
        </div>
        <h1>
          {fName} {lName}
        </h1>
        <div className="data">
          <ul>
            <li>template</li>
            <li>categories</li>
            <li>analytic</li>
            <li>settings</li>
          </ul>
        </div>
    </div>
  )
}

export default User