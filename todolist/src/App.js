import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	state = {
		todos: [
			{ id: '001', name: '吃饭' },
			{ id: '002', name: '睡觉' },
			{ id: '003', name: '学vue' },
			{ id: '004', name: '学react' }
		],
		finished: [
			{ id: '005', name: '下载git' },
			{ id: '006', name: '下载npm' },
			{ id: '007', name: '下载yarn' },
			{ id: '008', name: '下载node' }
		]
	}
	addTodo = (todoObj) => {
		const { todos } = this.state
		const newTodos = [todoObj, ...todos]
		this.setState({ todos: newTodos })
	}
	todoToTop = (id) => {
		const { todos } = this.state
		let newTodos = todos.filter((todoObj) => {
			return todoObj.id !== id
		})
		const todoObj = todos.filter((todoObj) => {
			return todoObj.id === id
		})
		newTodos = [...todoObj, ...newTodos]
		this.setState({ todos: newTodos })
	}
	finishedToTop = (id) => {
		const { finished } = this.state
		let newFinished = finished.filter((finishedObj) => {
			return finishedObj.id !== id
		})
		const finishedObj = finished.filter((finishedObj) => {
			return finishedObj.id === id
		})
		newFinished = [...finishedObj, ...newFinished]
		this.setState({ finished: newFinished })
	}
	updateTodo = (id, done) => {
		if (done === true) {
			const { todos, finished } = this.state
			const newTodos = todos.filter((item) => {
				return item.id !== id
			})
			const newItem = todos.filter((item) => {
				return item.id === id
			})
			const newFinished = [...finished, ...newItem]
			console.log(newFinished);
			this.setState({ todos: newTodos, finished: newFinished })
		} else {
			const { todos, finished } = this.state
			const newFinished = finished.filter((item) => {
				return item.id !== id
			})
			const newItem = finished.filter((item) => {
				return item.id === id
			})
			const newTodos = [...todos, ...newItem]
			this.setState({ todos: newTodos, finished: newFinished })
		}
	}
	deleteTodo = (id) => {
		if (window.confirm("确定删除吗？")) {
			const { todos } = this.state
			const newTodos = todos.filter((todoObj) => {
				return todoObj.id !== id
			})
			this.setState({ todos: newTodos })
		}
	}
	deleteFinished = (id) => {
		if (window.confirm("确定删除吗？")) {
			const { finished } = this.state
			const newFinished = finished.filter((todoObj) => {
				return todoObj.id !== id
			})
			this.setState({ finished: newFinished })
		}
	}
	clearTodo = () => {
		this.setState({ todos: [], finished: [] })
	}
	render() {
		const { todos, finished } = this.state
		return (
			<div>
				<Header addTodo={this.addTodo} />
				<List todos={todos} finished={finished} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} deleteFinished={this.deleteFinished} todoToTop={this.todoToTop} finishedToTop={this.finishedToTop} />
				<Footer clearTodo={this.clearTodo} />
			</div>
		)
	}
}
