import React, { Component } from 'react';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/todo/Todos';
import AddTodo from './components/todo/AddTodo';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
	state = {
		todos: [
			{
				id: uuidv4(),
				title: 'Finish Project',
				completed: false
			},
			{
				id: uuidv4(),
				title: 'Cook Dinner',
				completed: false
			},
			{
				id: uuidv4(),
				title: 'Call Parents',
				completed: false
			}
		]
	};

	// Toggle the To Do Item Checkbox
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

	// Delete To Do Item
	deleteTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)]
		});
	};

	// Add To Do Item
	addTodo = (title) => {
		const newTodo = {
			id: uuidv4(),
			title,
			completed: false
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<AddTodo addTodo={this.addTodo} />
					<Todos
						todos={this.state.todos}
						toggleComplete={this.toggleComplete}
						deleteTodo={this.deleteTodo}
					/>
				</div>
			</div>
		);
	}
}

export default App;
