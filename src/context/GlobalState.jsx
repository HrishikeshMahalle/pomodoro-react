import React, { createContext, useReducer, useState } from "react";

import appReducer from "./AppReducer";

const initialState = {
	todos: [
		{
			id: 1,
			title: "ADD progressbar",
			description: "lorem pusad pune Express",
			time: 1,
		},
		{
			id: 2,
			title: "title 2",
			description: "lorem pusad",
			time: 2,
		},
	],
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState);
	const [passId, setPassId] = useState("1");

	function addTodo(todo) {
		dispatch({
			type: "ADD_TODO",
			payload: todo,
		});
	}

	function editTodo(todo) {
		dispatch({
			type: "EDIT_TODO",
			payload: todo,
		});
	}

	function deleteTodo(id) {
		dispatch({
			type: "DELETE_TODO",
			payload: id,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				todos: state.todos,
				addTodo,
				editTodo,
				deleteTodo,
				passId,
				setPassId,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
