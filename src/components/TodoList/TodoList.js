import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
	const elements = todos.map(item => {
		const { id, ...itemProps } = item;

		return (
			<li key={id} className="list-group-item">
				<TodoListItem
					{...itemProps}
					onDeleted = {() => onDeleted(id)}
					onToggleDone = {() => onToggleDone(id)}
					onToggleImportant = {() => onToggleImportant(id)}
				/>
			</li>
		);
	});
	//using spread operator for todos array of objects to make code more conscise, avoiding label=item.label
	return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
