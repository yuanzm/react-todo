import React      from 'react';
import ReactDOM   from 'react-dom';
import Header     from './header.jsx';
import TodoToggle from './todotoggle.jsx';
import TodoList   from './todolist.jsx';
import TodoClear  from './todoclear.jsx';

export default class App extends React.Component {
	// 构造函数
	constructor(props) {
		super(props);

		this.states = {
			data: this.loadTodosFromLocal()
		};

		this.handleTodoCreate 		= this.handleTodoCreate.bind(this);
		this.onOneTodoChangeHandler = this.onOneTodoChangeHandler.bind(this);
		this.onAllChangeHandler     = this.onAllChangeHandler.bind(this);
		this.onClearDonehandler     = this.onClearDonehandler.bind(this);
	}

	// 将最新的数据保存到localStorage
	syncToLocal() {	
		if ( window.localStorage )
			window.localStorage.setItem('__local_todos_data__', JSON.stringify({data: this.states.data}));
	}

	// 保存一条新的todo，同时缓存到localStorage
	saveOneTodo(todo) {
		this.setState({data: this.states.data.push(todo)})

		this.syncToLocal();
	}

	// 从本地加载todos
	loadTodosFromLocal() {
		var local = JSON.parse(localStorage.getItem('__local_todos_data__')),
			_data = (  local
					 ? local.data
					 : []  );

		return _data;
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

	// 处理清除已经完成的todo
	onClearDonehandler() {
		var newData = this.states.data.filter(todo => todo.status === '');

		// why setState not work?
		this.states.data = newData;
		this.setState({data: newData});
		this.syncToLocal();
	}	

	onOneTodoChangeHandler(id, _event, eventText) {
		var todo = this.states.data.find( todo => todo.id === id  );

		switch(_event) {
			case 'statusChange':
				todo.status = eventText;
				this.forceUpdate();
				break
			case 'delete':
				this.states.data.splice(this.states.data.indexOf(todo), 1);
				this.forceUpdate();
				break;
		}

		this.syncToLocal();
	}

	// 处理点击切换所有todo状态选择框事件
	onAllChangeHandler(checked) {
		var newStatus = (  checked
						 ? 'done'
						 : ''  ); 

		this.states.data.map(todo => todo.status = newStatus);
		this.forceUpdate();
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
					display={this.states.data.length ? 'block' : 'none'} 
					count={this.states.data.filter(todo => todo.status === '').length}
					onClearDone={this.onClearDonehandler} />
			</div>
		);
	}
}