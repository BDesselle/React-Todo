import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

// Class Declaration
class App extends React.Component {
  // Cunstructor Method
  // Initializing state, using super() because App extends Component
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        },
        {
          task: "Throw Away Cookies",
          id: 1528872704358,
          completed: false
        }
      ],
      todo: ""
    };
  }

  // addTodo event - When a todo is added
  addTodo = e => {
    e.preventDefault(); // Prevent an event's default action
    const todos = this.state.todos.slice(); // Assigning todos to a sliced copy of the this.state.todos array
    todos.push({ task: this.state.todo, completed: false, id: Date.now() }); // Pushing the 'new' todo's task, completion state, and id ( which is being set using Date.now() )
    this.setState({ todos, todo: "" }); // Setting todos to state, aswell as setting todo back to an empty string
  };

  // changeTodo event - When the TodoForm is changed
  changeTodo = e => this.setState({ [e.target.name]: e.target.value }); // Setting the target.name/value to state

  // toggleTodoComplete event - When a todo is completed
  toggleTodoComplete = id => {
    let todos = this.state.todos.slice(); // Assigning todos to a sliced copy of the this.state.todos array
    todos = todos.map(todo => {
      // Mapping the todos to todo
      if (todo.id === id) {
        // If todo.id is strictly equal to id
        todo.completed = !todo.completed; // Assigning todo.completed to (logical)not !todo.completed
        return todo; // Return the updated version of todo
      } else {
        // Else
        return todo; // Return todo
      }
    });
    this.setState({ todos }); // Set these changes to state
  };

  // clearCompletedTodos -
  clearCompletedTodos = e => {
    e.preventDefault(); // Prevent an event's default action
    let todos = this.state.todos.slice(); // Assigning todos to a sliced copy of the this.state.todos array
    todos = todos.filter(todo => !todo.completed); // Assigning todos to a filtered version, the filter being !todo.completed ( filters out the the todos with !todo.completed )
    this.setState({ todos }); // Set these changes to state
  };

  render() {
    return (
      <div>
        <TodoForm
          value={this.state.todo} // Assigning props
          handleTodoChange={this.changeTodo} // Assigning props
          handleAddTodo={this.addTodo} // Assigning props
          handleClearTodos={this.clearCompletedTodos} // Assigning props
        />
        <TodoList
          handleToggleComplete={this.toggleTodoComplete} // Assigning props
          todos={this.state.todos} // Assigning props
        />
      </div>
    );
  }
}

export default App;
