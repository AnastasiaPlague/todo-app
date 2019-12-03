import React from "react";
import SearchPanel from "../SearchPanel/SearchPanel";
import Header from "../Header/Header";
import TodoList from "..//TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import "./App.css";

const App = () => {
	const todoData = [
		{ label: "Drink tea", important: false, id: 1 },
		{ label: "Read book", important: true, id: 2 },
		{ label: "Do the dishes", important: false, id: 3 }
	];
	return (
		<div className="todo-app">
			<Header toDo={1} done={3} />
			<div className="top-panel d-flex">
				<SearchPanel />
				<ItemStatusFilter />
			</div>

			<TodoList onDeleted={(id) => console.log('del', id)}todos={todoData} />
		</div>
	);
};

export default App;