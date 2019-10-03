import React from 'react';

function TodoItem(props) {
  return (
    <div className="to-do-item">
      <input type="checkbox" checked={props.item.completed} onChange={() => console.log("changing")}/>
      <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItem;