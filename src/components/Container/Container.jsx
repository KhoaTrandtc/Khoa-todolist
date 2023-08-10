import React, { useState } from "react";
import Todoapp from "../Todo/Todoapp";
import "./Container.css";
import Header from "../Header/Header";
import Focuszone from "../Focuszone/Focuszone";
import Timer from "../Timer/Timer";
import Container1 from "../Container1/Container1";

const Container = ({ activeStates, handleElementClick }) => {
  const [todos, setTodos] = useState([]);
  const [hasTask, setHasTask] = useState(false);

  const toggleCheck = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      );
      return updatedTodos;
    });
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
    if (todos.length === 1) {
      setHasTask(false);
    }
  };

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, { text: todo, checked: false }]);
  };
  return (
    <div className="container w-50 pt-4 pb-5 container d-flex ">
      <Header
        activeStates={activeStates}
        handleElementClick={handleElementClick}
      />
      <Container1 todos={todos} />
      <Todoapp
        todos={todos}
        hasTask={hasTask}
        setHasTask={setHasTask}
        toggleCheck={toggleCheck}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
      />
    </div>
  );
};

export default Container;
