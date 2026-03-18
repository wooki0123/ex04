import TodoItem from "./TodoItem.js";

function TodoList({ $target, initialState, onClick, onChange }) {
  const $list = document.createElement("div");

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  $list.addEventListener("click", (e) => {
    if (e.target.classList.contains("del_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      onClick(id);
    } else if (e.target.classList.contains("toggle_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      onChange(id);
    }
  });

  const $ul = document.createElement("ul");
  $list.appendChild($ul);

  this.render = () => {
    $ul.innerHTML = ``;
    this.state.forEach((item) => {
      new TodoItem({ $target: $ul, item });
    });
  };

  this.render();

  $target.appendChild($list);
}

export default TodoList;
