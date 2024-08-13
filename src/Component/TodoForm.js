import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value , setValue]= useState("");
    const handlsubmit =e =>{
        e.preventDefault();
        if(value){
        addTodo(value)
        setValue('');
        }
    }; 
  return (
  
      <form className='TodoForm' onSubmit={handlsubmit}>
      <input type='text' className='todo-input' value={value} placeholder=' what is the task today?' 
       onChange={(e)=> setValue(e.target.value)}/>
      
      <button type='submit' className='todo-btn'>Add Task</button>
      </form>
   
  )
}

export default TodoForm
