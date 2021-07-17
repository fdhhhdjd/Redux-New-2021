import React from "react";
import { useSelector } from "react-redux";
import { todosSelector } from "../store/reducers/TodoSlice";
const Navbar = () => {
  const todos = useSelector(todosSelector);
  return (
    <div className="navbar">
      <h1 style={{ textAlign: "center" }}>My Redux App 2020-2021</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total Todo: {todos.length}</li>
      </ul>
    </div>
  );
};

export default Navbar;
