import React from "react";

const styles = {
  todoUlContainer: {
    display: "flex",
    flexDirection: "column",
    justiifyContent: "center",
    alignItems: "center",
    marginTop: "5px",
    width: "100%",
    heigth: "auto",
    padding: "10px"
  },
  todoItem: {
    margin: "5px 0",
    display: "flex"
  },
  todoS: {
    marginRight: "5px"
  }
};
export default function TodoItem({ todos, handleDeleteItem }) {
  if (todos.length) {
    return (
      <div style={styles.todoUlContainer}>
        {todos.map((todo) => (
          <div key={todo} style={styles.todoItem}>
            <div style={styles.todoS}>{todo}</div>
            <button onClick={() => handleDeleteItem(todo)}>X</button>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
