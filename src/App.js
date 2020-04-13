import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Get tax stuff to Mom',
				completed: false
			},
			{
				id: 2,
				title: 'Call Mom',
				completed: false
			},
			{
				id: 3,
				title: 'Install swaybar',
				completed: false
			}
		]
	};
	// we're in App.js, so we're talking state next, not props
	toggleComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};
	deleteTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)]
		});
	};
	render() {
		return (
			<div className="App">
				<h1>Todos</h1>
				<Todos
					todos={this.state.todos}
					toggleComplete={this.toggleComplete}
					deleteTodo={this.deleteTodo}
				/>
			</div>
		);
	}
}

export default App;
