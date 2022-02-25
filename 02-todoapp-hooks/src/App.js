import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    handleFilter();
  }, [todos, status]);

  // function
  const handleFilter = () => {
    switch (status) {
      case "completed":
        return setFilteredTodos(
          todos.filter((todo) => todo.completed === true)
        );
      case "uncompleted":
        return setFilteredTodos(
          todos.filter((todo) => todo.completed === false)
        );
      default:
        return setFilteredTodos(todos);
    }
  };

  
  return (
    <div className="App">
      <header>
        <h1>Okey's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
