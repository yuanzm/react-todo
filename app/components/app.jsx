import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.jsx';
import TodoToggle from './todotoggle.jsx';
import TodoList from './todolist.jsx';
import TodoClear from './todoclear.jsx';

export default class App extends React.Component {
	// 构造函数
	constructor(props) {
		super(props);

		this.states = {
			data: this.loadTodosFromLocal()
		};
		console.log(this.states);

		this.handleTodoCreate = this.handleTodoCreate.bind(this);
	}

	// 保存一条新的todo，同时缓存到localStorage
	saveOneTodo(todo) {
		this.setState({data: this.states.data.push(todo)})
		// TODO: save it to localStorage
		if ( window.localStorage )
			window.localStorage.setItem('__local_todos_data__', JSON.stringify({data: this.states.data}));
	}

	// 为todo添加必要信息
	todoFactory(todo) {
		var data = this.states.data;

		todo.id     = data.length + 1;
		// TODO：add time
		todo.time   = 'now';
		todo.status = '';

		return todo;
	}

	// 成功创建一条todo的回调
	handleTodoCreate(todo) {
		var newTodo = this.todoFactory(todo);

		this.saveOneTodo(newTodo);
	}

	// 从本地加载todos
	loadTodosFromLocal() {
		var local = JSON.parse(localStorage.getItem('__local_todos_data__')),
			_data = (  local
					 ? local.data
					 : []  );

		return _data;
	}

	render() {
		return (
			<div>
				<Header onTodoCreate={this.handleTodoCreate} />
				<TodoToggle />
				<TodoList data={this.states.data} />
				<TodoClear />
			</div>
		);
	}
}