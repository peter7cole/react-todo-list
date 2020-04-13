import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		};
	};

	render() {
		const { id, title } = this.props.todo; // destructured the variables for the return to make them easier to reference
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						onChange={this.props.toggleComplete.bind(this, id)}
					/>{' '}
					{title}
					<button
						onClick={this.props.deleteTodo.bind(this, id)}
						style={buttonStyle}
					>
						X
					</button>
				</p>
			</div>
		);
	}
}

// Prop Types
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

const buttonStyle = {
	background: '#ffb300',
	color: '#fff',
	border: 'none',
	padding: '5px 8px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right',
	outline: 'none'
};

export default TodoItem;
