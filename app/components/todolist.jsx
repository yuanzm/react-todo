import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo.jsx';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var todoNodes = this.props.data.map((todo) => 
			(
				<Todo
					id 		 = {todo.id}
					status   = {todo.status}
					todoText = {todo.todoText}
					time     = {todo.time} />
			)
		);

		return (
			<ul id="todo-list">
				{todoNodes}
			</ul>
		);
	}
}