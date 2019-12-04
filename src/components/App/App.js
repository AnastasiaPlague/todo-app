import React, { Component } from "react";
import SearchPanel from "../SearchPanel/SearchPanel";
import Header from "../Header/Header";
import TodoList from "..//TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import "./App.css";

class App extends Component {
	maxId = 100;

	state = {
		todoData: [
			this.createTodoItem("Read a book"),
			this.createTodoItem("Do the dishes"),
			this.createTodoItem("Have a cuppa")
		],
		term: "",
		filter: "all"
	};

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		};
	}

	search = (arr, term) => {
		if (term.length === 0) {
			return arr;
		}
		return arr.filter(item => {
			return item.label.toLowerCase().includes(term.toLowerCase());
		});
	};

	onSearchChange = term => {
		this.setState({
			term
		});
	};

	filter(items, filter) {
		switch (filter) {
			case "all":
				return items;
			case "active":
				return items.filter(item => !item.done);
			case "done":
				return items.filter(item => item.done);
			default:
				return items;
		}
	}
	onFilterChange = filter => {
		this.setState({
			filter
		});
	};

	deleteItem = id => {
		this.setState(({ todoData }) => {
			const index = todoData.findIndex(el => el.id === id);
			const newDataArray = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
			return {
				todoData: newDataArray
			};
		});
	};

	addItem = text => {
		const newObject = this.createTodoItem(text);
		this.setState(({ todoData }) => {
			const newArr = [newObject, ...todoData];
			return {
				todoData: newArr
			};
		});
	};

	toggleProperty(arr, id, propName) {
		const index = arr.findIndex(el => el.id === id);
		const oldObject = arr[index];
		const newObject = { ...oldObject, [propName]: !oldObject[propName] };
		return [...arr.slice(0, index), newObject, ...arr.slice(index + 1)];
	}

	onToggleImportant = id => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, "important")
			};
		});
	};
	onToggleDone = id => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, "done")
			};
		});
	};

	render() {
		const { todoData, term, filter } = this.state;
		const visibleItems = this.filter(this.search(todoData, term), filter);
		const doneCount = todoData.filter(el => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className="todo-app">
				<Header toDo={todoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel onSearchChange={this.onSearchChange} />
					<ItemStatusFilter onFilterChange={this.onFilterChange} filter={filter} />
				</div>

				<TodoList
					onDeleted={this.deleteItem}
					todos={visibleItems}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
				/>
				<ItemAddForm onAdded={this.addItem} />
			</div>
		);
	}
}

export default App;
