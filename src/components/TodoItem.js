import React from 'react';

function TodoItem(props) {
    return (
    <div className="to-do-item">
      <input type="checkbox" />
      <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItem;