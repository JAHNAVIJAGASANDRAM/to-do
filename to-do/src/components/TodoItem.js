


export default function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
        <div className="todoItem">
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    )
}