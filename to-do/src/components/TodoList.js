import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <div className="todoList">
            {todos.length === 0 ? (
                <p>No tasks available. Add a new task!</p>
            ) : (
            todos.map((todo) => (  
                <TodoItem
                    key={todo.id}
                    todo={todo} 
                    toggleComplete={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))
        )}
        </div>
    )

}