import React,{useState, useContext} from 'react'

import { GlobalContext } from '../../../context/GlobalState'



export default function AddTodo() {

    const {addTodo, todos} = useContext(GlobalContext)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [time, setTime] = useState("")

    const onSubmit = (e) =>{
        e.preventDefault();
        const newTodo = {
            id: todos.length + 1,
            title,
            description,
            time,
        };
        addTodo(newTodo)
    };


  return (
    <>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Enter title'
                value={title}
                onChange={(e)=> setTitle(e.target.value)} 
             />
            <input
                type="text"
                placeholder='Enter description'
                value={description}
                onChange={(e)=> setDescription(e.target.value)} 
             />
            <input
                type="text"
                placeholder='Enter time'
                value={time}
                onChange={(e)=> setTime(e.target.value)} 
             />
             <input type="submit" />
        </form>
    </>
  )
}
