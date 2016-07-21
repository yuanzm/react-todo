import React from 'react';

export default class Todo extends React.Component {
	constructor(props) {
		super(props);

		this.handleToggle = this.handleToggle.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit   - this.handleEdit.bind(this);
	}

	// 处理todo切换状态事件
	handleToggle() {
		this.props.toggleTodo(this.props.id);
	}

	// 处理todo删除事件
	handleDelete() {
		this.props.delTodo(this.props.id);
	}

	handleEdit() {
		
	}

	render() {
		return (
			<li
				id        = {this.props.id}
				className = {this.props.status} >
				<div
					className="view" >
					<input
						type      = "checkbox"
						className = "toggle"
						checked   = {this.props.checked}
						onChange  = {this.handleToggle} />

					<label>{this.props.todoText}</label>
					<span className="phone">{this.props.time}</span>
					<a 
						className = "destroy"
						onClick   = {this.handleDelete} ></a>
				</div>
				<input
					onChange  = {this.handleEdit}
					className = "edit"
					type      = "text"
					value     = {this.props.todoText} />
			</li>
		);
	}
}

Todo.propTypes = {
	id           : React.PropTypes.number.isRequired,
	status       : React.PropTypes.string.isRequired,
	checked      : React.PropTypes.string.isRequired,
	time         : React.PropTypes.string.isRequired,
	todoText     : React.PropTypes.string.isRequired,
	toggleTodo   : React.PropTypes.func.isRequired,
	delTodo      : React.PropTypes.func.isRequired,
}
