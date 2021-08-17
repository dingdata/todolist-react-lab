import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Buy Milk", isDone: true },
    { id: uuidv4(), name: "Do Push Up", isDone: false },
  ]);
};

const checklistDone = (id) => {
  const todoIndex = todos.findIndex((todos) => todos.id === id);
  const updatedTodos = [...todos];
  updatedTodos[todoIndex].isDone = !updatedTodos[todoIndex].isDone;
  setTodos(updatedTodos);
};
