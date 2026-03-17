function TodoList({ $target }) {
  const $ul = document.createElement("ul");
  $ul.innerHTML = `
      <li>할 일 1</li>
      <li>할 일 2</li>
      <li>할 일 3</li>
    `;
  $target.appendChild($ul);
}

export default TodoList;
