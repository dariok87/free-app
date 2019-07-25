import React from 'react';
import ToDoItem from './components/ToDoItem';
import toDosData from './ToDosData';

function App() {
  const todoItems = toDosData.map(item => <ToDoItem key={item.id} item={item}/>)

    return (

    <div className="to-do-list">
     <todoItems />
    </div>
    )
}

export default App;