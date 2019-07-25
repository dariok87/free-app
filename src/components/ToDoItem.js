import React from 'react';

function ToDoItem(props) {
    return (
    <div className="to-do-item">
      <input type="checkbox" />
      <p>{props.todo.text}</p>
    </div>
  )
}

export default ToDoItem;