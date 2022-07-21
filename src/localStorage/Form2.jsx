import React,{useState} from 'react'

const Form2 = ({addTask}) => {

  const [name, setName] = useState('')
  const submit = (e) =>{
    e.preventDefault()
    addTask(name)
  }
  return (
    <form onSubmit={submit}>
        <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='full name' />
        <input type="submit" value="Submit" />
    </form>
  )
}

export default Form2