import React from 'react';

export default class TodoClear extends React.Component {
	constructor(props) {
		super(props);

		this.onClickClearBtn = this.onClickClearBtn.bind(this);
	}

	onClickClearBtn() {
		this.props.clearDoneTodos();
	}

	render() {
		return (
			<footer style= {{ display: this.props.display }}>
				<a
					id      = "clear-completed"
					onClick = {this.onClickClearBtn}>Clear completed</a>

				<div
					id="todo-count">
					{this.props.count} item left
				</div>
			</footer>
		);
	}
}

TodoClear.propTypes = {
	display        : React.PropTypes.string.isRequired,
	count          : React.PropTypes.number.isRequired,
	clearDoneTodos : React.PropTypes.func.isRequired
}
