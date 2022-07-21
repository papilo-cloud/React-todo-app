import React from 'react'
import AddTransaction from './AddTransaction'
import Balance from './Balance'
import { GlobalProvider } from './context/GlobalState'
import Header from './Header'
import IncomeExpenses from './IncomeExpenses'
import './tracker.css'
import TransactionList from './TransactionList'

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses /> 
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
      
    </div>
  )
}

export default App