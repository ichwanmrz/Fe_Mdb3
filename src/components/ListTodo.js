import React from 'react'
import "../pages/todo.css"

const ListTodo = (props) => {

  console.log(props.dataTodo);
    return (
    <div className='todo'>
        <ul>{ 
       props.dataTodo.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>
       })
    }</ul>
    </div>
  )
}

export default ListTodo