/*
1. Create event handler in the App component for when the checkbox is clicked('which is an 'onChange event')
2. Pass the method down to the TodoItem component.
3. In the TodoItem Component make it so when the 'onChange event happens , it calls the 'handleChange' method and passes the id of the todo into the function
*/

import React from 'react';
import TodoItem from './TodoItem';
import todoData from './todoData';

class App extends React.Component  {
  constructor() {
    super()
    this.state = {
      todo: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodo = prevState.todo.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todo: updatedTodo
      }
    })
  }

  render() {
    const todoItems = this.state.todo.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

    return (
      <div className="to-do-list">
        {todoItems}
      </div>
    )
  }
}

export default App;