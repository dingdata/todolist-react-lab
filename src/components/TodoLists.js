import React from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID
import "./TodoList.css";
import TodoList from "./TodoList";

class TodoLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: [
        {
          id: uuidv4(), // 2. add uuid to the item
          title: "",
        },
      ],
    };
  }

  handleChange = (event) => {
    this.setState({ newTitleName: event.target.value });
  };

  addNewTodoList() {
    const { newTitleName: title } = this.state;
    console.log(`Title - ${title}`);
    if (!title || !title.length) {
      return;
    }

    this.setState({
      newList: [
        ...this.state.newList,
        {
          id: uuidv4(),
          title: title,
        },
      ],
    });
    console.log(this.state); //check state
  }

  displayAllTodoList() {
    return this.state.newList.map((newlist) => {
      return <TodoList title={newlist.title} />;
    });
  }

  render() {
    return (
      <div>
        <div></div>
        <div className="text_align">Add new List</div>
        <input
          className="input"
          type="text"
          onChange={this.handleChange}
          placeholder="Take a break"
        />
        <button
          className="button"
          alt="Add New List"
          onClick={() => this.addNewTodoList()}
        >
          Add new List
        </button>
        <div>{this.displayAllTodoList()}</div>
      </div>
    );
  }
}

export default TodoLists;
