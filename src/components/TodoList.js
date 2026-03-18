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
    }
  });
  $list.addEventListener("click", (e) => {
    if (e.target.classList.contains("toggle_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      onChange(id);
    }
  });

  this.render = () => {
    $list.innerHTML = ``;
    const $ul = document.createElement("ul");

    this.state.map((item) => {
      new TodoItem({ $target: $ul, item });
    });

    $list.appendChild($ul);
  };

  /* 삼항 연산자 대신 &&(AND) 연산자를 쓸 경우
    <li style="${item.checked && "text-decoration: line-through"}">
      <input type="checkbox" class="toggle_btn" data-id="${item.id}" ${item.checked && "checked"} />
      <span>${item.id} / ${item.text}</span>
      <button class="del_btn" data-id="${item.id}">X</button>
    </li>
  */

  this.render();

  $target.appendChild($list);
}

export default TodoList;
