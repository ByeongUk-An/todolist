import React, { useState, createContext, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const initState = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initState);

  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { text, id: uuid() }]);
  };
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onClear = () => {
    setTodos([]);
  };

  const selectItem = (id) => {
    const item = todos.find((todo) => todo.id === id);

    setEdit(item);
  };

  const editTodo = (text, id) => {
    const newTodo = todos.map((todo) => (todo.id === id ? { text, id } : todo));
    setTodos(newTodo);
    setEdit(null);
  };

  return (
    <TodoListContext.Provider
      value={{
        todos,
        addTodo,
        onRemove,
        onClear,
        selectItem,
        editTodo,
        edit,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
