import React from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID
import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      todos: [
        {
          id: uuidv4(), // 2. add uuid to the item
          name: "Buy Milk",
          isDone: false,
        },
        {
          id: uuidv4(), // 3.add uuid to the item
          name: "Do push up",
          isDone: true,
        },
      ],
    };
  }

  handleChange = (event) => {
    this.setState({ newItemName: event.target.value });
  };

  addNewTodo() {
    const { newItemName: name } = this.state;
    if (!name || !name.length) {
      return;
    }

    this.setState({
      newItemName: "",
      todos: [
        ...this.state.todos,
        {
          id: uuidv4(),
          name: name,
          isDone: false,
        },
      ],
    });
  }
  createSetTodo(todo) {
    return (isDone) => {
      const currentTodo = this.state.todos.filter(
        (todoToFilter) => todoToFilter.id === todo.id
      )[0];
      currentTodo.isDone = isDone;
      this.setState({ todos: [...this.state.todos] });
    };
  }

  createDeleteTodo(todo) {
    return () => {
      const todosWithoutItem = this.state.todos.filter(
        (todoToFilter) => todoToFilter.id !== todo.id
      );
      this.setState({ todos: [...todosWithoutItem] });
    };
  }

  displayTodos() {
    return this.state.todos.map((todo) => {
      // 4. add a method that can change the status of isDone
      document.title = todo.title;
      const setTodo = this.createSetTodo(todo);
      const deleteTodo = this.createDeleteTodo(todo);

      return (
        <TodoItem
          key={todo.id}
          name={todo.name}
          isDone={todo.isDone}
          setTodo={setTodo}
          title={todo.title}
          deleteTodo={deleteTodo} // added delete as a prop
        />
      );
    });
  }

  render() {
    return (
      <div>
        {/* <div className="text_align">Add new to do list</div>
        <input
          className="input"
          type="text"
          value={this.state.listName}
          onChange={this.handleChangeList}
          placeholder="Add New List Name"
        />
        <div className="button">
          <button
            className="button"
            alt="Add New"
            onClick={() => this.addNewTodo()}
          >
            Add New List
          </button>
        </div> */}
        <div>
          <title>{this.state.title}</title>
        </div>
        <div className="text_align">{this.state.title}</div>
        <input
          className="input"
          type="text"
          value={this.state.newItemName}
          onChange={this.handleChange}
          placeholder="Take a break"
        />
        <button
          className="button"
          alt="Add New"
          onClick={() => this.addNewTodo()}
        >
          Add To do Item
        </button>
        <div>{this.displayTodos()}</div>
      </div>
    );
  }
}

export default TodoList;
