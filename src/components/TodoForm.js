import React, { useContext, useState, useEffect } from "react";
import { TodoListContext } from "../contexts/TodoListContext";

function TodoForm() {
  const { addTodo, onClear, editTodo, edit } = useContext(TodoListContext);

  const [text, setText] = useState("");

  const controllChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const controllSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      addTodo(text);
      setText("");
    } else {
      editTodo(text, edit.id);
    }
  };

  useEffect(() => {
    if (edit) {
      setText(edit.text);
      console.log(edit);
    } else {
      setText(" ");
    }
  }, [edit]);

  return (
    <form onSubmit={controllSubmit}>
      <input
        onChange={controllChange}
        type="text"
        placeholder="할 일을 입력해 주세요"
        required
        value={text}
      />
      <button type="submit">{edit ? "수정" : "등록"}</button>
      <button onClick={onClear}>초기화</button>
    </form>
  );
}
export default TodoForm;
