import React, {useState} from "react";
import "./Focuszone.css";
import Todoapp from "../Todo/Todoapp";

const Focuszone = () => {
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

  const remainingTasks = todos.filter((todo) => !todo.checked).length;
  const completedTasks = todos.filter((todo) => todo.checked).length;

  const renderMessage = () => {
    if (todos.length === 0) {
      // No todos added from the start
      return (
        <div className="container text-center bg-light shadow-lg p-4 mt-3 mb-3 rounded-2">
          <h5 className="text-dark fw-normal height-highest fw-semibold">
            🤗 Anything you want to do today?
          </h5>
          <p>Start by adding your todo list below</p>
        </div>
      );
    } else if (completedTasks === todos.length) {
      // All todos are checked (completed)
      return (
        <div className="container text-center bg-light shadow-lg p-4 mt-3 mb-3 rounded-2">
          <h5 className="text-success fw-normal mb-0 height-complete">
          🥳 Yayy, You have completed all tasks.
          </h5>
          <p className="mb-0 mt-2">Time to recharge!</p>
        </div>
      );
    } else if (remainingTasks === 0) {
      // No tasks are remaining, but not all are completed
      return (
        <div className="container text-center bg-light shadow-lg  p-4 mt-3 mb-3 rounded-2 height-2">
          <h5 className="text-danger fw-semibold text-primary mb-0">
            👨‍💻   Time for focus
          </h5>
          <p className="fw-normal mt-2">
            You have {completedTasks} completed task(s) left to completed
          </p>
        </div>
      );
    } else {
      // There are remaining tasks to be completed
      return (
        <div className="container text-center bg-light shadow-lg    p-4 mt-3 mb-3 rounded-2 height-2">
          <h5 className="text-danger fw-semibold text-primary mb-0">
            👨‍💻 Time for focus
          </h5>
          <p className=" fw-normal mt-2">
            You have {remainingTasks} task(s) left to completed
          </p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="container bg-light p-4 mt-1 rounded-3 shadow-lg">
        <h3 className="text-primary c-un fw-bold">Work to finish!</h3>
        {renderMessage()}
        <ul className="todoList list-group mt-3"></ul>
      </div>
      <Todoapp
        todos={todos}
        hasTask={hasTask}
        setHasTask={setHasTask}
        toggleCheck={toggleCheck}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
      />
    </>
  );
};

export default Focuszone;
