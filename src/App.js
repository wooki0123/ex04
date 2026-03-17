import TodoForm from "./components/TodoForm.js";
import TodoHeader from "./components/TodoHeader.js";
import TodoList from "./components/TodoList.js";

function App({ $target }) {
  const $page = document.createElement("div");

  $target.appendChild($page);

  const header = new TodoHeader({ $target: $page });

  header.setState("안녕");

  new TodoForm({ $target: $page });
  new TodoList({ $target: $page });
}
export default App;
