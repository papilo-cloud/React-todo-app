import React from 'react'

const FilterButtons = ({item ,setFilter}) => {
  return (
    <div>
        <button onClick={() => setFilter(item) } className='filter-btn'>
            {item}
        </button>
    </div>
  )
}

export default FilterButtons