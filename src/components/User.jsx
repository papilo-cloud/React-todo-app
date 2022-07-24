import React from 'react'
import { BsCaretLeft } from 'react-icons/bs'
import FilterButtons from './FilterButtons'
import img from './images/papilo.jpg'

const User = ({lName,fName,first,getUser,FILTERSITEM, setFilter}) => {
  
  

  return (
    <div className={first ? 'users open':'users'}>
      <button className='butn' onClick={() => getUser(!first)}>
        <BsCaretLeft className='bs'/>
      </button>
        <div className='img'>
          <img src={img} width={100} alt="user image" />
        </div>
        <h1>
          {fName} {lName}
        </h1>
        <div className="data">
          <p>Filter By:</p>
           {FILTERSITEM.map(item => <FilterButtons key={item} item={item} setFilter={setFilter} /> )}
        </div>
    </div>
  )
}

export default User