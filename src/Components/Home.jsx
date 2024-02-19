import React, { useState } from 'react'
import { nanoid } from 'nanoid'


import NewNote from './NewNote'
import Notes from './Notes'

const dummyTodo = "HEhe"

const Home = () => {
  const [todos,setTodos] = useState([])

  const handleAddTodo = (newTodo) =>{
    setTodos([...todos, {id:nanoid(), newTodo}])
  }

  const handleDelete = (todoId) =>{
    // console.log('id is:'+todoId)
    // const updatedTodos = todos.filter((item)=> item.id !== todoId)
    setTodos((prevTodos)=>{
      const updatedTodos = prevTodos.filter((item)=> item.id !== todoId)
      return updatedTodos
    })

  }

  return (
    <div className='home'>
      <NewNote handleAddTodo={handleAddTodo} />
      <Notes todos={todos} handleDelete={handleDelete} />
    </div>
  )
}

export default Home
