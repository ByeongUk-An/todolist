import React, { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";

function TodoListItem({ todo }) {
  const { onRemove, selectItem } = useContext(TodoListContext);

  return (
    <li>
      <span>{todo.text}</span>
      <div>
        <button onClick={() => selectItem(todo.id)}>
          <i className="fas fa-pen"></i>
        </button>
        <button onClick={() => onRemove(todo.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoListItem;
