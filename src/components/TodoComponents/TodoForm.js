import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange} // onChnage runs event passed via props
        type="text"
        name="todo"
        value={props.value} // value assigned to value passed via props
        placeholder="Add a todo..."
      />
      <button
        onClick={props.handleAddTodo} // onClick runs event passed via props
      >
        Add Todo
      </button>
      <button
        onClick={props.handleClearTodos} // onClick runs event passed via props
      >
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
