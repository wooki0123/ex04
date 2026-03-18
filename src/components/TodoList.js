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
    $list.innerHTML = `
      <ul>
        ${this.state
          .map(
            (
              item,
            ) => `<li><input type="checkbox" class="toggle_btn" data-id="${item.id}" ${item.checked ? "checked" : ""}/>${JSON.stringify(item.checked)}
            <span>${item.id} / ${item.text}</span> 
        <button class="del_btn" data-id="${item.id}">X</button></li>`,
          )
          .join("")}
      </ul>
    `;
  };

  this.render();

  $target.appendChild($list);
}

export default TodoList;
