import React, { Component } from 'react';
import TodoItem from './TodoItem';
// import PropTypes from 'prop-types';

class Todos extends Component {
	render() {
		return this.props.todos.map((todo) => (
			<TodoItem
				key={todo.id}
				todo={todo}
				toggleComplete={this.props.toggleComplete}
				deleteTodo={this.props.deleteTodo}
			/>
		));
	}
}

// Prop Types ( IS THIS NEEDED? )
// Todos.propTypes = {
// 	todo: PropTypes.array.isRequired
// };

export default Todos;
