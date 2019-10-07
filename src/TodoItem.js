import React from 'react';

function TodoItem(props) {
  const completedStyle = {
    font: "Italic",
    color: "blue",
    textDecoration: "line-through"
  }
  
  return (
    <div className="to-do-item">
      <input 
        type="checkbox"
        checked={props.item.completed} 
        onChange={(event) => props.handleChange(props.item.id)}
      />
      <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItem;