import React, { useContext } from 'react'
import { Globalcontext } from './context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const {transactions,deleteTransaction} = useContext(Globalcontext)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((word, i) => <Transaction key={i} {...word}
        />)}
        
      </ul>
    </>
  )
}

export default TransactionList