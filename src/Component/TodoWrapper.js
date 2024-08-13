import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
    const [todos ,setTodos] = useState([]);

    const addTodo = (todo) =>{
        setTodos([...todos ,{id:uuidv4(),task:todo,
          complated: false , isEditing:false},
        ]);
        // console.log(todos);
    }
    const toggleComplete= (id) =>{
      setTodos(todos.map((todo)=>todo.id=== id?{...todo,complated:!todo.complated}:todo
      
      )
    );
    }
       const deleteTodo= (id) =>{
        setTodos(todos.filter((todo )=> todo.id!==id));
       }
       const editTodo =( id) =>{
        setTodos(todos.map((todo) =>todo.id ===id ?{...todo,isEditing: !todo.isEditing}:todo));
       }
       const editTask= (task ,id)=>{
        setTodos(todos.map((todo) => todo.id ===id ?{...todo,task,isEditing:!todo.isEditing}:todo));
       };
  return (
    <div  className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo)=>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task ={todo}/>
        ):(
      <Todo task ={todo} key={todo.id}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo} editTodo={editTodo}/>
        
      ))}
    </div>
  )
}

export default TodoWrapper
