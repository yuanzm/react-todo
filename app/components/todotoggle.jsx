import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoToggle extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange  = this.handleChange.bind(this);
	}

	handleChange(e) {
		var checked = e.target.checked;

		this.props.onAllChange(checked);
	}

	render() {
		return (
			<div>
				<input id="toggle-all" onChange={this.handleChange} type="checkbox" />
				<label>
					Mark all as complete
				</label>
			</div>
		);
	}
}