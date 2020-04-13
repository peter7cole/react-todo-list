import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/todo/Todos';
import AddTodo from './components/todo/AddTodo';
import About from './components/pages/About';
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
			<Router>
				<div className="App">
					<div className="container">
						<Header />
						<Route
							exact
							path="/"
							render={(props) => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									<Todos
										todos={this.state.todos}
										toggleComplete={this.toggleComplete}
										deleteTodo={this.deleteTodo}
									/>
								</React.Fragment>
							)}
						/>
						<Route path="/about" component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
