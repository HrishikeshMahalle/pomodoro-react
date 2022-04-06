import "./App.css";
import AddTodo from "./Components/Elements/AddTodo/addTodo";
import EditTodo from "./Components/Elements/EditTodo/editTodo";
import MainContent from "./Components/Home/mainContent";
import Sidebar from "./Components/Home/sidebar";
import Todo from "./Components/TodoPage/Todo";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<GlobalProvider>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<div className='App'>
								<Sidebar />
								<MainContent />
								<div className='edit'>
								<h3>Add data</h3>
									<AddTodo />
								<h3>Edit data</h3>
									<EditTodo />
								</div>
							</div>
						}
					/>
					<Route path='/todo/:id' element={<Todo />} />
				</Routes>
			</Router>
		</GlobalProvider>
	);
}

export default App;
