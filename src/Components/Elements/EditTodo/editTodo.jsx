import React,{useState,useContext,useEffect } from 'react';

import { GlobalContext } from '../../../context/GlobalState'

export default function EditTodo() {
    const {todos, editTodo, passId} = useContext(GlobalContext)

    const [selectedTodo, setSelectedTodo] = useState({
        id:null,
        title:"",
        description:"",
        date:""
    })
    console.log(passId)
    const currentTodoId = passId;

    useEffect(()=>{
        const todoId = currentTodoId;
        const selectedTodo = todos.find((currentTodo)=> currentTodo.id === parseInt(todoId))
        setSelectedTodo(selectedTodo)
    },[currentTodoId,todos])

    const handleOnChange = (userKey, newValue)=>{
      setSelectedTodo({...selectedTodo,[userKey]:newValue})
    }

    const onSubmit = (e)=>{
      e.preventDefault();
      editTodo(selectedTodo)
    }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={selectedTodo.title}
          onChange={(e)=> handleOnChange("title",e.target.value)} 
          placeholder="Enter Name"
         />
        <input
          type="text"
          value={selectedTodo.description}
          onChange={(e)=> handleOnChange("description",e.target.value)} 
          placeholder="Enter Name"
         />
        <input
          type="text"
          value={selectedTodo.time}
          onChange={(e)=> handleOnChange("time",e.target.value)} 
          placeholder="Enter Name"
         />
         <input type="submit" />
      </form>
    </div>
  )
}
