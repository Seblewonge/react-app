import React, { useState } from 'react'

const EditTodoForm = ({editTodo,task}) => {
    const [value , setValue]= useState(task.task);

    const handlsubmit =e =>{
        e.preventDefault();
       editTodo(value,task.id)
       setValue("")
    }; 
  return (
    <div>
      <form className='TodoForm' onSubmit={handlsubmit}>
      <input type='text' className='todo-input' value={value} placeholder='Update Task' 
       onChange={(e)=>{
       setValue(e.target.value)
       
       }}>
      </input>
      <button type='submit' className='todo-btn'>Update Task</button>
      </form>
    </div>
  )
}

export default EditTodoForm
