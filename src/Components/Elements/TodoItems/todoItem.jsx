import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./todoItem.css";
import { GlobalContext } from "../../../context/GlobalState";

export default function TodoItem({ todo: { id, title, description, time } }) {
	console.log("todoitem");

	const { deleteTodo, setPassId } = useContext(GlobalContext);
	return (
		<>
			<div className='todoItem'>
				<div className='toit'>
					<Link to={`/todo/${id}`} className='todo-title'>
						{title}
					</Link>
					<div className='todo-description'>
						{description}
						{time}
					</div>
					<div className='todo-btns'>
						<button onClick={(e) => setPassId(id)}>Edit</button>
						<button onClick={(e) => deleteTodo(id)}>Delete</button>
					</div>
				</div>
			</div>
		</>
	);
}
