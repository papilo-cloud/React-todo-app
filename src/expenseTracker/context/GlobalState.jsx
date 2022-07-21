import React,{useReducer} from "react";
import AppReducer from "./AppReducer";

const initialTrans = {
    transactions:[
        {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Salary', amount: 300},
        {id: 3, text: 'Book', amount: -10},
        {id: 4, text: 'Camera', amount: 150},
        {id: 5, text: 'Camerases', amount: 90},
        {id: 6, text: 'Television', amount: -50}
    ]
}



export const Globalcontext = React.createContext(initialTrans);

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialTrans)
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return(
        <Globalcontext.Provider
        value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </Globalcontext.Provider>
    )
}