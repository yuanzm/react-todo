import React from 'react';
import Todo from './todo.jsx';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { todos, actions } = this.props;

		let todoNodes = todos.map(
			(todo) => (<Todo
				{...actions}
				id 		     = {todo.id}
				key          = {todo.id}
				status       = {todo.status}
				checked      = {todo.status === 'done' ? 'checked' : ''}
				todoText     = {todo.todoText}
				time         = {todo.time} />)
		);

		return (
			<ul id="todo-list">
				{todoNodes}
			</ul>
		);
	}
}
