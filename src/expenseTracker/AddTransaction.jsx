import React,{useContext, useState} from 'react'
import { Globalcontext } from './context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const {addTransaction} = useContext(Globalcontext)

    function handleText(e) {
        setText(e.target.value)
    }
    function handleAmount(e) {
        setAmount(e.target.value)
    }

    const handleCreate = () => {

        const newTransaction = {
            id: Math.random()* 10000,
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

  return (
    <>
    <h3>Add new Transaction</h3>
    <div className='form-control'>
        <form onSubmit={e => {e.preventDefault(); handleCreate()}} >
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text"
                value={text}
                onChange={handleText}
                 placeholder='Enter text...'/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)
                </label>
                <input type="number"
                value={amount}
                onChange={handleAmount}
                 placeholder='Enter amount...'/>
            </div>
            <button className='btn'>Add transaction</button>
        </form>
    </div>
    </>
  )
}

export default AddTransaction