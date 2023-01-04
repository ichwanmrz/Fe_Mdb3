import '../pages/todo.css'
import React, { useState } from 'react'

const TodoCreate = (props) => {

const [getInput, setInput] = useState('')
const handleSubmit = (event) => {
    event.preventDefault()
    const newTodo = {
        id: Math.floor(Math.random()* 100) + 1,
        title: getInput
    }
    props.onCreateTodo(newTodo)
    setInput('')
}

const handleInput = (event) => {
    setInput(event.target.value)
    console.log(getInput);
}

  return (
    <div className='todo'>
    <form onSubmit={handleSubmit}>
        <input type="text" value={getInput} onChange={handleInput}/>
        <button type="submit">Add</button>
    </form>
    </div>
  )
}

export default TodoCreate