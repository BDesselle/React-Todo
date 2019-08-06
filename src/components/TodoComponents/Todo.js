import React from "react";

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: "line-through" } : null} // Ternery - If props.todo.completed is true change the textDecoration
      onClick={() => props.handleToggleComplete(props.todo.id)} // onClick runs event passed via props
    >
      {props.todo.task /* Sets the task name */}
    </div>
  );
};

export default Todo;
