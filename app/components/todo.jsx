import React from 'react';
import ReactDOM from 'react-dom';

export default class Todo extends React.Component {
	constructor(props) {
		super(props);

		this.handleToggle = this.handleToggle.bind(this);
	}

	//处理todo切换状态事件
	handleToggle() {

	}

	// 处理todo删除事件
	handleDelete() {

	}

	// 处理编辑事件
	handleEdit(e) {

	}

	render() {
		return (
			<li id={this.props.id} 
				className={this.props.status}>

				<div className="view">
					<input type="checkbox" className="toggle" />
					<label>{this.props.todoText}</label>
					<span className="phone">{this.props.time}</span>
					<a className="destroy"></a>
				</div>
				<input className="edit" type="text" value={this.props.todoText} />
			</li>
		)
	}
}
