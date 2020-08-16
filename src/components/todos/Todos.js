import React, { useState } from "react";
import TodoItem from "./TodoItem";

const styles = {
  todoContainer: {
    display: "flex",
    flexDirection: "column",
    justiifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    width: "100%",
    heigth: "auto",
    padding: "10px"
  },
  todoInput: {
    margin: "10px 0"
  }
};
export default function Todos() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);
  const handleItem = (e) => {
    e.preventDefault();
    setItem(e.target.value);
  };
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };
  const handleAddItem = () => {
    if (item) {
      setTodos((state) => state.concat([item]));
      setItem("");
    }
  };
  const handleDeleteItem = (todo) => {
    const newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
  };
  return (
    <>
      <div style={styles.todoContainer}>Todos</div>
      <div style={styles.todoInput} onKeyPress={handleEnterKey}>
        <input name="item" value={item} onChange={handleItem} />{" "}
        <button onClick={handleAddItem}>Add Todo</button>
      </div>
      <TodoItem todos={todos} handleDeleteItem={handleDeleteItem} />
    </>
  );
}
