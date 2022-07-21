import React, {  } from 'react'
import Timer from './Timer'
import TimerForm from './TimerForm'
import './timers.css'

const EditableTimer = ({title,project,elapsed,runningSince}) => {
const editFormOpen = false
  if ( editFormOpen ) {
        return <TimerForm title={title} project={project} />
    } else {
        return (
            <Timer
            title={title}
            project={project}
            elapsed={elapsed}
            runningSince={runningSince} />
          ) 
    }
  }
export default EditableTimer
