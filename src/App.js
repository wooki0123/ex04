import TodoForm from "./components/TodoForm.js";
import TodoHeader from "./components/TodoHeader.js";
import TodoList from "./components/TodoList.js";

function App({ $target }) {
  const initialState = ["할일 1", "할일 2", "할일 3"];
  const $page = document.createElement("div");

  $target.appendChild($page);

  const header = new TodoHeader({ $target: $page });

  header.setState("안녕");

  new TodoForm({ $target: $page });
  const list = new TodoList({ $target: $page, initialState });

  list.setState([...initialState, "할일 4"]);
}
export default App;
