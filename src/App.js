import React from 'react';
import TodoItem from './TodoItem';
import todoData from './todoData';

class App extends React.Component  {
  constructor() {
    super()
    this.state = {
      todo: todoData
    }
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