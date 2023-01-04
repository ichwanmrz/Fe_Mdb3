import './todo.css'   
import React, { useState } from 'react'
import ListTodo from '../components/ListTodo'
import TodoCreate from '../components/TodoCreate'

const Todo = () => {
    const [getTodos, setTodos] = useState([ 
        { id: 1, title: 'eat'},
        { id: 2, title: 'sleep'},
        { id: 3, title: 'code'},
    ]);

const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo))
    console.log(getTodos);
}

  return (
    <div className='todo'>
        <h3>Todo List</h3>
        <TodoCreate onCreateTodo={eventCreateTodo}/>
        <ListTodo dataTodo={getTodos}/>
    </div>
  )
}

export default Todo