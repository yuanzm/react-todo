import React      from 'react';
import Header     from './header.jsx';
import TodoToggle from './todotoggle.jsx';
import TodoList   from './todolist.jsx';
import TodoClear  from './todoclear.jsx';

export default class App extends React.Component {
	// 构造函数
	constructor(props) {
		super(props);

		this.states = {
			data: this.loadTodosFromLocal(),
		};

		this.handleTodoCreate 		= this.handleTodoCreate.bind(this);
		this.onOneTodoChangeHandler = this.onOneTodoChangeHandler.bind(this);
		this.onAllChangeHandler     = this.onAllChangeHandler.bind(this);
		this.onClearDonehandler     = this.onClearDonehandler.bind(this);
	}

	// 处理清除已经完成的todo
	onClearDonehandler() {
		let newData = this.states.data.filter(todo => todo.status === '');

		// why setState not work?
		this.states.data = newData;
		this.setState({ data: newData });
		this.syncToLocal();
	}

	onOneTodoChangeHandler(id, _event, eventText) {
		let temptodo = this.states.data.find(todo => ( todo.id === id ));

		switch (_event) {
		case 'statusChange':
			temptodo.status = eventText;
			this.forceUpdate();
			break;
		case 'delete':
			this.states.data.splice(this.states.data.indexOf(temptodo), 1);
			this.forceUpdate();
			break;
		default:
		}

		this.syncToLocal();
	}

	// 处理点击切换所有todo状态选择框事件
	onAllChangeHandler(checked) {
		let newStatus = (  checked
						 ? 'done'
						 : ''  );

		this.states.data.map(todo => ( todo.status = newStatus ));
		this.forceUpdate();
	}

	// 成功创建一条todo的回调
	handleTodoCreate(todo) {
		let newTodo = this.todoFactory(todo);

		this.saveOneTodo(newTodo);
	}

	// 为todo添加必要信息
	todoFactory(_todo) {
		const todo = _todo;
		const data = this.states.data;

		todo.id     = data.length + 1;
		// TODO：add time
		todo.time   = 'now';
		todo.status = '';

		return todo;
	}

	// 保存一条新的todo，同时缓存到localStorage
	saveOneTodo(todo) {
		this.setState({ data: this.states.data.push(todo) });

		this.syncToLocal();
	}

	// 将最新的数据保存到localStorage
	syncToLocal() {
		let stringData = JSON.stringify({ data: this.states.data });

		if ( window.localStorage )
			window.localStorage.setItem('__local_todos_data__', stringData);
	}

	// 从本地加载todos
	loadTodosFromLocal() {
		let local = JSON.parse(localStorage.getItem('__local_todos_data__'));
		let rdata = (  local
					 ? local.data
					 : []  );

		return rdata;
	}

	render() {
		return (
			<div>
				<Header onTodoCreate={this.handleTodoCreate} />

				<TodoToggle onAllChange={this.onAllChangeHandler} />

				<TodoList
					data={this.states.data}
					onOneTodoChange={this.onOneTodoChangeHandler} />

				<TodoClear
					display     = {this.states.data.length ? 'block' : 'none'}
					count       = {this.states.data.filter(todo => todo.status === '').length}
					onClearDone = {this.onClearDonehandler} />
			</div>
		);
	}
}
