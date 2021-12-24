import React, { useState, useEffect, useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import reducer from "../reducers/reducer"
import AppContext from "../contexts/AppContext";

import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import TodosTable from "./TodosTable";


const App = () => {
  const result = localStorage.getItem("todos");
  const initialStates = result ? JSON.parse(result) : []
  
  const [states, dispatch] = useReducer(reducer, initialStates)
  
  const [currentTodo, setCurrentTodo] = useState({});
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentBody, setCurrentBody] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const value = {
    currentTodo, 
    setCurrentTodo,
    currentTitle,
    setCurrentTitle,
    currentStatus,
    setCurrentStatus,
    currentBody,
    setCurrentBody,
    isEdit,
    setIsEdit
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(states))
  }, [states])

  

  
  
  return (
    <AppContext.Provider value={value}>
      {isEdit ? (
      <div className="container">
        <h2>Todo App</h2>
        <h3>Edit Todo</h3>
        <EditTodo states={states} dispatch={dispatch} />
      </div>
      ) : (
      <div className="container">
        <h2>Todo App</h2>
        <h3>Add Todo</h3>
        <AddTodo dispatch={dispatch} />
      </div>
      )}
      <div className="container">
        <TodosTable states={states} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
}

export default App;