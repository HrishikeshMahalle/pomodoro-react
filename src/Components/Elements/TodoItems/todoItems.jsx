import React,{useContext} from 'react'
import TodoItem from './todoItem'
import './todoItems.css'
import { GlobalContext } from '../../../context/GlobalState'

export default function TodoItems() {
  const { todos }  = useContext(GlobalContext)
  return (
    <div className='todoItems'>
        {todos && todos.map(todo => 
          <TodoItem todo={todo} key={todo.id}/>
        )}
    </div>
  )
}
