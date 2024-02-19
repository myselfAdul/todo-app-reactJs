import React, { useState } from 'react'
import {nanoid} from 'nanoid'

const NewNote = (props) => {
    const [todo, setTodo] = useState({
        title:'',
        desc:''
    })

    const handleOnChange = (e) =>{
        const name = e.target.name
        setTodo({...todo, [name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(todo)
        props.handleAddTodo(todo)
        setTodo({title:"", desc:""})
    }

  return (
      <form className='form' onSubmit={handleSubmit} >
        <div className='form-field'>
            <label htmlFor="title">Title:</label>
            <input type="text" id='title' name='title' 
            placeholder='Provide a title...'
            value={todo.title}
            onChange={handleOnChange}
            />
        </div>
        <div className='form-field'>
            <label htmlFor="desc">Desc:</label>
            <textarea wrap='hard' type="text" id='desc' name='desc' placeholder='Description of peras...'
            // maxLength='80'
            value={todo.desc}
            onChange={handleOnChange}
            />
        </div>

        <div className='add-btn'>
        <button type='submit'>Add Todo</button>
        </div>        
      </form>
    
  )
}

export default NewNote
