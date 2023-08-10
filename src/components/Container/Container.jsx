import React, { useState } from "react";
import Todoapp from "../Todo/Todoapp";
import "./Container.css";
import Header from "../Header/Header";
import Focuszone from "../Focuszone/Focuszone";
import Timer from "../Timer/Timer";
import Container1 from "../Container1/Container1";

const Container = ({ activeStates, handleElementClick, todos }) => {
 
  return (
    <div className="container w-50 pt-4 pb-5 container d-flex ">
      <Header
        activeStates={activeStates}
        handleElementClick={handleElementClick}
      />
      <Container1 todos={todos} />
      
    </div>
  );
};

export default Container;
