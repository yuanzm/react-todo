import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo.jsx';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.onTodoChangeHandler = this.onTodoChangeHandler.bind(this);
	}

	onTodoChangeHandler(id, _event, eventText) {
		// 如果未找到，不执行后续操作
		if ( !this.props.data.find( todo => todo.id === Number(id) ) )
			return;

		this.props.onOneTodoChange(Number(id), _event, eventText);
	}

	render() {
		var todoNodes = this.props.data.map((todo) => 
			(
				<Todo
					onTodoChange = {this.onTodoChangeHandler}
					id 		     = {todo.id}
					status       = {todo.status}
					checked      = {todo.status === 'done'? 'checked': '' }
					todoText     = {todo.todoText}
					time         = {todo.time} />
			)
		);

		return (
			<ul id="todo-list">
				{todoNodes}
			</ul>
		);
	}
}