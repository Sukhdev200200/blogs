import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  //console.log(todos)
  return (
    <div >
    
    {todos.map((todo)=>(
      <div className='flex flex-row justify-around py-4' key={todo.id}>
      <div >{todo.text}</div>
      <button onClick={()=>dispatch(removeTodo(todo.id))} className='text-white bg-indigo-500 border-0 py-2 px-6 focus: outline-none hover:bg-indigo-600 rounded'>Delete</button>
      </div>
    ))}
    </div>
  )
}

export default Todos