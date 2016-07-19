import React from 'react';

export default class TodoToggle extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange  = this.handleChange.bind(this);
	}


	handleChange(e) {
		let checked = e.target.checked;

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

TodoToggle.propTypes = {
	onChange   : React.PropTypes.func.isRequired,
	onAllChange: React.PropTypes.func.isRequired
}
