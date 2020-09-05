import React, { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";
import TodoListItem from "./TodoListItem";

function Todolist() {
  const { todos } = useContext(TodoListContext);
  return (
    <div>
      {todos.length ? (
        <ul>
          {todos.map((todo) => {
            return <TodoListItem todo={todo} key={todo.id} />;
          })}
        </ul>
      ) : (
        <div>스케줄을 작성해주세요</div>
      )}
    </div>
  );
}

export default Todolist;
