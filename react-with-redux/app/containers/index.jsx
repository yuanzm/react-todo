import React                 from 'react';
import { bindActionCreators} from 'redux';
import {connect}             from 'react-redux';
import Header                from '../components/header.jsx';
import TodoList              from '../components/todolist.jsx';
import TodoClear             from '../components/todoclear.jsx';
import TodoToggle            from '../components/todotoggle.jsx';
import * as Actions          from '../actions/index.js';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {todos, actions} = this.props;

		return (
			<div>
				<Header 
					addTodo={actions.addTodo} />

				<TodoToggle
					{...actions} />

				<TodoList
					todos   = {todos}
					actions = {actions} />

				<TodoClear
					{...actions}
					count   = {todos.filter(todo => todo.status === '').length}
					display = { todos.length ? 'block' : 'none' } />
			</div>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
}

let mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
