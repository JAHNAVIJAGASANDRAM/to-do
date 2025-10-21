import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  const[todos,setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
      return JSON.parse(savedTodos);
    }else{
      return [];
    }
  }
  );

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  const addTodo=(task)=>{
    const newTodo={
      id:Date.now(),
      task:task,
      completed:false,
    };
    setTodos([...todos,newTodo]);
  };
  
  const toggleTodo=(id)=>{
    setTodos(
      todos.map((todo)=>
      todo.id===id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };
  const deleteTodo=(id)=>{
    setTodos(todos.filter((todo)=> todo.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>To-Do List</h1>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </header>
    </div>
  );
}

export default App;
