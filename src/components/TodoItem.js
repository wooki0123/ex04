function TodoItem({ $target, item }) {
  const $li = document.createElement("li");

  $target.appendChild($li);

  this.render = () => {
    $li.style.textDecoration = item.checked ? "line-through" : "none";
    $li.innerHTML = `<input type="checkbox" class="toggle_btn" data-id="${item.id}" ${item.checked ? "checked" : ""}/>
            <span>${item.id} / ${item.text}</span> 
        <button class="del_btn" data-id="${item.id}">X</button>
        `;
  };

  this.render();
}

export default TodoItem;
