import React,{useState} from 'react'
import EditableTimerList from './EditableTimerList'
import TogleableTimerForm from './TogleableTimerForm'

const timers =  [
    {
      title: 'Practice squat',
      project: 'Gym Chores',
      id: 1,
      elapsed: 5456099,
      runningSince: Date.now(),
      },
      {
      title: 'Bake squash',
      project: 'Kitchen Chores',
      id: 2,
      elapsed: 1273998,
      runningSince: null,
      },
  ]


const TimersDashBoard = () => {
  const [data, setData] = useState(timers)

  const handleCreateFormSubmit = (task) =>{
    const id = Math.floor(Math.random()* 1000) + 1
    const mewTask = {id, ...task}
    setData([...data, mewTask])
    // console.log(title);
  }
  return (
    <div className='grid'>
      <h1>Timers</h1>
          <div className="column">
              <EditableTimerList data={data} />
              <TogleableTimerForm onFormSubmit={handleCreateFormSubmit}/>
          </div>
      </div>
  )
}

export default TimersDashBoard