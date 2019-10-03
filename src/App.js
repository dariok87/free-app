/*
Create event handler in the App component for when the checkbox is clicked('which is an 'onChange event')
Pass the method down to the TodoItem component.
In the TodoItem Component make it so when the 'onChange event happens , it calls the 'handleChange' method and passes the id of the todo into the function
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

  }

  render() {
    const todoItems = this.state.todo.map(item => <TodoItem key={item.id} item={item} />)

    return (
      <div className="to-do-list">
        {todoItems}
      </div>
    )
  }
}

export default App;