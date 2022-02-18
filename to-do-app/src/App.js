import logo from "./logo.svg";
import "./App.css";
import ListTodo from "./ListTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
