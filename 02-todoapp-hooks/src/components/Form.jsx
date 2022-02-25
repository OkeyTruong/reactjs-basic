import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos,setStatus }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if(inputText.length === 0){
        alert("loi")
        return;
    }
    setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 100),
          text: inputText,
          completed: false,
        },
      ]);
    setInputText("");
  };
  const handleStatus = e =>{
    setStatus(e.target.value)
  }
  return (
    <form>
      <input onChange={handleInputText} value={inputText} type="text" className="todo-input" />
      <button onClick={handleSubmitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
