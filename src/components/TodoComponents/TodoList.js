// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todos.map((
        todo // Mapping out the todos into individual Todo components
      ) => (
        <Todo
          handleToggleComplete={props.handleToggleComplete} // handleToggleComplete runs event passed via props
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
