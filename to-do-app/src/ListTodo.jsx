import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import AddTodo from "./AddTodo";

export class ListTodo extends Component {
  state = {
    listTodo: [
      { id: 1, title: "python" },
      { id: 2, title: "java" },
      { id: 3, title: "C++" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });
  };
  handleOnChangTodo = (e) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = e.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  handleEditTodo = (todo) => {
    const { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    // save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...listTodo];
      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);

      listTodoCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodo: listTodoCopy,
        editTodo: {},
      });
      toast.success("Update todo succeed!");
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };
  handleDeleteTodo = (todo) => {
    this.setState({
      listTodo: this.state.listTodo.filter((item) => item.id !== todo.id),
    });
    toast.success("Delete todo succeed!");
  };
  render() {
    const { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    return (
      <div className="todoContainer">
        <AddTodo addNewTodo={this.addNewTodo} />
        
        <ul className="listTodo">
          {listTodo &&
            listTodo.length > 0 &&
            listTodo.map((todo, index) => (
              <li key={todo.id} className="ItemTodo">
                {isEmptyObj === true ? (
                  <span>
                    {index + 1} - {todo.title}
                  </span>
                ) : (
                  <>
                    {editTodo.id === todo.id ? (
                      <span>
                        {index + 1} -
                        <input
                          value={editTodo.title}
                          onChange={(e) => this.handleOnChangTodo(e)}
                        />
                      </span>
                    ) : (
                      <span>
                        {index + 1} - {todo.title}
                      </span>
                    )}
                  </>
                )}
                <button
                  className="btn btnEdit"
                  onClick={() => this.handleEditTodo(todo)}
                >
                  {isEmptyObj === false && editTodo.id === todo.id
                    ? "Save"
                    : "Edit"}
                </button>
                <button
                  className="btn btnDelete"
                  onClick={() => this.handleDeleteTodo(todo)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    );
  }
}

export default ListTodo;
