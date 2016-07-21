import React from 'react';

export default class TodoToggle extends React.Component {
	constructor(props) {
		super(props);
	}

	handleChange(e) {
		let status = (  e.target.checked
					  ? 'done'
					  : ''  );

		this.props.toggleAllTodos(status);
	}

	render() {
		return (
			<div>
				<input id="toggle-all" onChange={this.handleChange.bind(this)} type="checkbox" />
				<label>
					Mark all as complete
				</label>
			</div>
		);
	}
}
