function TodoList({ $target }) {
  const $list = document.createElement("div");

  this.state = ["할일 1", "할일 2", "할일 3"];

  this.setState = (nextState) => {
    this.state = [...this.state, nextState];
    this.render();
  };

  this.render = () => {
    $list.innerHTML = `
      <ul>
        ${this.state.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
  };

  this.render();

  $target.appendChild($list);
}

export default TodoList;
