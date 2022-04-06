export default function appReducer(state, action) {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos:[...state.todos, action.payload],
            }
        case "EDIT_TODO":
            const updatedTodo = action.payload;

            const updatedTodos = state.todos.map((todo)=>{
                if(todo.id === updatedTodo.id){
                    return updatedTodo;
                }
                return todo;
            })
            return {
                ...state,
                todos:updatedTodos
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((todo)=>todo.id !== action.payload),
            };
        case "PASS_ID":
            return action.payload

            default:
                return state;
    }
};
