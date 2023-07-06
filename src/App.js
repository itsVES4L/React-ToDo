import "./App.css";
import TodoList from "./Components/TodoList";

//context Provider
import ShowContextProvider from "./context/ShowContextProvider";

function App() {
  return (
    <ShowContextProvider>
      <TodoList />
    </ShowContextProvider>
  );
}

export default App;
