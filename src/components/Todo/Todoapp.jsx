import React, { useState } from "react";
import "./Todoapp.css";
import { AiOutlineClose } from "react-icons/ai";

const Todoapp = ({
  addTodo,
  setHasTask,
  hasTask,
  todos,
  toggleCheck,
  deleteTodo,
}) => {
  return (
    <div className="todos p-4 container bg-light p-4 mt-4 rounded-3 shadow-lg ">
      <h3 className="text-primary fw-bold">To-dos list</h3>

      <div className="addTodo row mt-4 bg-light shadow-lg rounded-2 p-4 ">
        <h5 class="text-dark fw-normal ps-0 pb-1 ">
          📝 What do you want to do?
        </h5>
        <input
          type="text"
          placeholder="Add To-Do"
          id="newTodo"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              document.getElementById("add").click();
            }
          }}
        />
        <button
          id="add"
          onClick={() => {
            const addTextInput = document.getElementById("newTodo");
            if (addTextInput.value !== "") {
              addTodo(addTextInput.value);
              addTextInput.value = "";
              setHasTask(true);
            }
          }}
        >
          Add
        </button>
      </div>

      <h1 className="mt-4">Task at hand</h1>
      {hasTask ? null : <p> 😕 You haven't had any tasks on your list</p>}
      <ul className="todoList list-group mt-3">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`list-group-item ${todo.checked ? "checked" : ""}`}
          >
            <div className="todo-content">
              <input
               
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleCheck(index)}
                className="form-check-input me-3 "
              />
              <label
                style={{
                  color: todo.checked ? "green" : "black",
                }}
                class="form-check-label fw-bold"
              >
                {" "}
                {todo.checked ? " 😙 Good job! " : "🤓 " + todo.text}
              </label>
            </div>
            <button className="delete " onClick={() => deleteTodo(index)}>
              <AiOutlineClose className="btn-delete-icon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todoapp;
