import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.jsx';
import TodoToggle from './todotoggle.jsx';
import TodoList from './todolist.jsx';
import TodoClear from './todoclear.jsx';

var testData = [{
	id: '1',
	todoText: "122",
	status: "",
	time: "2 days ago"
}];

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<TodoToggle />
				<TodoList data = {testData} />
				<TodoClear />
			</div>
		);
	}
}