import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export class AddTodo extends Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("Please enter your todo")
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    toast.success('🦄 Wow so easy!')
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <>
        <h1>To Do</h1>
        <input value={title} onChange={(e) => this.handleOnChangeTitle(e)} />
        <button type="button" onClick={() => this.handleAddTodo()}>
          Add
        </button>
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
      </>
    );
  }
}
export default AddTodo;
