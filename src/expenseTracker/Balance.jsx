import React, { useContext } from 'react'
import { Globalcontext } from './context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(Globalcontext)
  const amnt = transactions.map(x => x.amount)
  const amount = amnt.reduce((x,y) =>
    (x+y),0
  )
  return (
    <div>
        <h4>Your Balance</h4>
        <h1>${amount}</h1>
    </div>
  )
}

export default Balance