import React from 'react'
import img from './images/papilo.jpg'

const User = ({lName,fName}) => {
  return (
    <div className='users'>
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