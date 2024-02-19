import React from 'react'

import Todo from './Todo'


const Notes = (props) => {
  const {handleDelete} =props

  return (
    <div>
        {props.todos.map((todo)=>
        <Todo key={todo.id} 
        todo={todo.newTodo} 
        id={todo.id} 
        handleDelete={handleDelete} />)}
      
    </div>
  )
}

export default Notes
