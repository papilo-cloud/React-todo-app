import EditableTimer from './EditableTimer'

const EditableTimerList = ({data}) => {
  console.log(data);
  return (
      <div className='timers'>
          {data.map(timer => <EditableTimer key={timer.id} {...timer} />)}
      </div>
    )
}
export default EditableTimerList
