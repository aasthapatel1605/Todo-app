import {useState} from "react";

import "../styles/TodoList.css";
export default function TodoList() {
  const [todos, setTodos] = useState(["Learn React"]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">My Todo List</h1>

      <div className="todo-input-group">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={updateTodoValue}
          onKeyPress={(e) => e.key === "Enter" && addNewTask()}
          className="todo-input"
        />
        <button onClick={addNewTask} className="todo-add-btn">
          Add Task
        </button>
      </div>

      <h4 className="tasks-title">Tasks To Do</h4>

      {todos.length === 0 ? (
        <p className="empty-state">No tasks yet! Add one above ✨</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <span>{todo}</span>
              <button
                onClick={() => deleteTask(index)}
                className="delete-btn"
                aria-label="Delete task"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}