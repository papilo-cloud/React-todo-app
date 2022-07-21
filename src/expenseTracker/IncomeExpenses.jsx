import React, { useContext } from 'react'
import { Globalcontext } from './context/GlobalState'

const IncomeExpenses = () => {
  const {transactions} = useContext(Globalcontext);
  const amnt = transactions.map(x => x.amount)
  const income = amnt.filter(x => x > 0).reduce((x,y) => (x+y),0)
  const expense = amnt.filter(x => x < 0).reduce((x,y) => (x+y),0)

  return (
    <div>
        <div className='inc-exp-container'>
            <div>
              <h4>Income</h4>
              <p id='money-plus' className='money plus'>+${income}</p>
            </div>
            <div>
              <h4>Expense</h4>
              <p className='money minus'>-${Math.abs(expense)}</p>
            </div>
        </div>
    </div>
  )
}

export default IncomeExpenses