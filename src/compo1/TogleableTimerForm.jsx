import React, { useState } from 'react'
import TimerForm from './TimerForm'

 const TogleableTimerForm = ({onFormSubmit}) => {
    const [isOpen, setIsOpen] = useState(false)


    const handleOpen = () =>{
        setIsOpen(!isOpen)
    }
    const handleFormClose = () =>{
        setIsOpen(!isOpen)
    }
    const handleFormSubmit = (task) =>{
        onFormSubmit(task)
        setIsOpen(!isOpen)
    }

    if (isOpen) {
        return <TimerForm
        onFormClose = { handleFormClose }
        onFormSubmit = { handleFormSubmit }
         />
    }
    return(
        <div className="aligned">
            <button className="icon"
             onClick={handleOpen}>
                +
            </button>
        </div>
    )
  }
  export default  TogleableTimerForm
