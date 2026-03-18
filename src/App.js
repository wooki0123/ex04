import TodoForm from "./components/TodoForm.js";
import TodoHeader from "./components/TodoHeader.js";
import TodoList from "./components/TodoList.js";
import { getItem, setItem } from "./storage.js";

function App({ $target }) {
  const $page = document.createElement("div");

  const initialState = getItem("todos");

  let lastId = 4;

  $target.appendChild($page);

  const header = new TodoHeader({ $target: $page });

  header.setState("안녕");

  const onSubmit = (text) => {
    const nextState = [...list.state, { id: lastId, text, checked: false }];
    list.setState(nextState);
    setItem("todos", JSON.stringify(nextState));
    lastId++;
  };

  const onClick = (id) => {
    const nextState = list.state.filter((item) => item.id !== id);
    list.setState(nextState);
    setItem("todos", JSON.stringify(nextState));
  };

  const onChange = (id) => {
    const checkState = list.state.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item,
    );
    list.setState(checkState);
    setItem("todos", JSON.stringify(checkState));
  };

  new TodoForm({ $target: $page, onSubmit });

  const list = new TodoList({
    $target: $page,
    initialState,
    onClick,
    onChange,
  });
}
export default App;
