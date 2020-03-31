import React, { Component } from 'react'
import todosData from './todosData'
import TodoItem from './components/TodoItem'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }

  }
  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} completed={item.completed} text={item.text} />)
    return (
      <div>
        {todoItems}
      </div>
    )
  }
}
