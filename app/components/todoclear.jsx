import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoClear extends React.Component {
	render() {
		return (
			<footer>
		      	<a id="clear-completed">Clear completed</a>
		      	<div id="todo-count">item left</div>
		    </footer>
		);
	}
}