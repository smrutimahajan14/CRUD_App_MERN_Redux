import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, createTodo } from '../redux/actions/todoActions';

const TodoList = () => {
  const [task, setTask] = useState('');

  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);
  const { todos, loading, error } = todoList;

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(createTodo(task));
      setTask('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="New Task" 
        />
        <button type="submit">Add Todo</button>
      </form>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>
              {todo.task}
              {/* Add buttons for edit and delete */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
