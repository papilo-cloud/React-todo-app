import React, { useContext } from 'react'
import { Globalcontext } from './context/GlobalState'

const Transaction = ({text, amount,id}) => {
  const {deleteTransaction} = useContext(Globalcontext)

    const sign = amount < 0? '-':'+'
  return (
    <>
        <li className={amount < 0 ? 'minus': 'plus'}>
          {text} <span>${sign}{Math.abs(amount)}</span>
          <button className="delete-btn"
          onClick={() =>deleteTransaction(id)}>x</button>
        </li> 
    </>
  )
}

export default Transaction