import TodoForm from "./components/TodoForm.js";
import TodoHeader from "./components/TodoHeader.js";
import TodoList from "./components/TodoList.js";

function App({ $target }) {
  const initialState = [
    { id: 1, text: "할일1", checked: false },
    { id: 2, text: "할일2", checked: false },
    { id: 3, text: "할일3", checked: false },
  ];
  const $page = document.createElement("div");

  let lastId = 4;

  $target.appendChild($page);

  const header = new TodoHeader({ $target: $page });

  header.setState("안녕");

  const onSubmit = (text) => {
    list.setState([...list.state, { id: lastId, text, checked: false }]);
    lastId++;
  };

  new TodoForm({ $target: $page, onSubmit });

  const list = new TodoList({ $target: $page, initialState });

  onSubmit("할일4");
}
export default App;
