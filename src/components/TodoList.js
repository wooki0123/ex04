function TodoList({ $target, initialState }) {
  const $list = document.createElement("div");

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
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
