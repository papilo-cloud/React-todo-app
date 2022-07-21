import React ,{useState, useEffect}from 'react'
import Form2 from './Form2'

const data = [
    {
        id:1,
        todo:'Eat',
        complete: false
    },
    {
        id:2,
        todo:'Sleep',
        complete: false
    }
]

const Form1 = () => {

  const [todos, setTodos] = useState(data)

    const addTask = (task) =>{
        const id = Math.random()*1000
        const newTodo = {id:id, todo:task, complete:false}
        setTodos([...todos, newTodo])
    }

    
    useEffect(() => {
      const tod = JSON.parse(localStorage.getItem('todos'))
      if (tod) {
        setTodos(tod)
      }
    }, [])

    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])
 
    

  return (
    <div>
    <Form2 addTask={addTask}/>
   
    <div>
      {todos.map(tod => <ul key={tod.id}>
        <li>{tod.todo}</li>
      </ul> )}
    </div>
    </div>
  )
}

export default Form1