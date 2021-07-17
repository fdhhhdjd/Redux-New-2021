import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  todosSelector,
  markComplete,
  deleteButon,
  getAllTodos,
  getTodos,
} from "../store/reducers/TodoSlice";
import TodoForm from "./TodoForm";

const Todo = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const ToggleTodoComplete = (todoID) => {
    dispatch(markComplete(todoID));
  };

  const DeleteSingleTodo = (todoID) => {
    dispatch(deleteButon(todoID));
  };

  //useEffect
  useEffect(() => {
    //send request to jsonplaceholder
    //dispatch
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.complete ? "completed" : ""}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.complete}
              //this la do bi loi ,todo.id la: todoID
              onChange={ToggleTodoComplete.bind(this, todo.id)}
            />
            <button onClick={DeleteSingleTodo.bind(this, todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
