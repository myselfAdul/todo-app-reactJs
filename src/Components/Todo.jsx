import React from 'react'

const Todo = (props) => {
    const {title, desc} = props.todo
    const {id} = props
    const date = new Date()

    const cross = (id) =>{
        props.handleDelete(id)
        // console.log(id)
        // alert(id)
    }
    
  return (
    <div>
        <article className='todo'>
            <div className='shampoo'>
                <h2>{title}</h2>
                <p className='desc'>{desc}</p>
            </div>
            <div>
                <button onClick={()=>{cross(id)}} className='dlt-btn'>X</button>
            </div>
            
        </article>
        <h5>{date.toLocaleDateString()}</h5>
      
    </div>
  )
}

export default Todo
