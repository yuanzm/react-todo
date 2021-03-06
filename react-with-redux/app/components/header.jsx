import React from 'react';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = { todoText: '' };

		this.handleSubmit     = this.handleSubmit.bind(this);
		this.handleTodoChange = this.handleTodoChange.bind(this); 
	}

	// 监听输入框值的变化
	handleTodoChange(e) {
		this.setState({ todoText: e.target.value });
	}

	// 清空输入框的值
	clearTodoText() {
		this.setState({ todoText: '' });
	}

	handleSubmit(e) {
		let text = this.state.todoText.trim();
		e.preventDefault();

		// 判断输入值是否为空
		if ( !text )
			return;

		// 判断是否为回车事件
		if ( e && e.keyCode === 13 ) {
			// 通知外层组件新的todo已经成功创建
			this.props.addTodo(text);
			this.clearTodoText();
		}
	}

	render() {
		return (
			<header>
				<h1>Todos</h1>
				<input
					id          = "new-todo"
					type        = "text"
					placeholder = "What needs to be done?"
					value       = {this.state.todoText}
					onKeyUp     = {this.handleSubmit}
					onChange    = {this.handleTodoChange} />
			</header>
		);
	}
}

Header.propTypes = {
	addTodo: React.PropTypes.func.isRequired,
}
