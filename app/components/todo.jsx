import React from 'react';
import ReactDOM from 'react-dom';

export default class Todo extends React.Component {
	constructor(props) {
		super(props);

		this.handleToggle = this.handleToggle.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	//处理todo切换状态事件
	handleToggle(e) {
		var checked = e.target.checked;

		var status = (  checked
					  ? 'done'
					  : ''  );

		// 通知上一层组件本todo已经切换状态
		this.props.onTodoChange(this.props.id, 'statusChange', status);
	}

	// 处理todo删除事件
	handleDelete(e) {
		// 通知上一层本todo已经删除
		this.props.onTodoChange(this.props.id, 'delete', '');		
	}

	render() {
		return (
			<li id={this.props.id} 
				className={this.props.status}>
				<div className="view">
					<input type="checkbox" className="toggle" checked={this.props.checked} onChange={this.handleToggle} />
					<label>{this.props.todoText}</label>
					<span className="phone">{this.props.time}</span>
					<a className="destroy" onClick={this.handleDelete} ></a>
				</div>
				<input className="edit" type="text" value={this.props.todoText} />
			</li>
		)
	}
}
