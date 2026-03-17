function TodoList({ $target, initialState }) {
  const $list = document.createElement("div");

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  $list.addEventListener("click", (e) => {
    if (e.target.classList.contains("del_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      console.log(id);
    }
  });

  this.render = () => {
    $list.innerHTML = `
      <ul>
        ${this.state.map((item) => `<li>${item.id} / ${item.text} / <button class="del_btn" data-id="${item.id}">X</button></li>`).join("")}
      </ul>
    `;
  };

  this.render();

  $target.appendChild($list);
}

export default TodoList;
