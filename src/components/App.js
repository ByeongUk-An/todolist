import React from "react";
import Header from "./Header.js";
import styled from "styled-components";
import TodoListContextProvider from "../contexts/TodoListContext";
import Todolist from "./Todolist.js";
import TodoForm from "./TodoForm.js";

const Wrap = styled.div`
  width: 600px;
  height: 800px;
  background: greenyellow;
  margin: 0 auto;
`;

function App() {
  return (
    <TodoListContextProvider>
      <Wrap>
        <Header />
        <TodoForm />
        <Todolist />
      </Wrap>
    </TodoListContextProvider>
  );
}

export default App;
