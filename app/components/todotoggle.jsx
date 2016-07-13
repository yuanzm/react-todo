import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoToggle extends React.Component {
	render() {
		return (
			<div>
				<input id="toggle-all" type="checkbox" />
				<label>
					Mark all as complete
				</label>
			</div>
		);
	}
}