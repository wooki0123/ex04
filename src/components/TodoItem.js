function TodoItem({ $target, item }) {
  const $list = document.createElement("li");

  $target.appendChild($list);

  this.render = () => {
    $list.innerHTML = `<li style="text-decoration: ${item.checked ? "line-through" : "none"}"><input type="checkbox" class="toggle_btn" data-id="${item.id}" ${item.checked && "checked"}/>
            <span>${item.id} / ${item.text}</span> 
        <button class="del_btn" data-id="${item.id}">X</button></li>`;
  };

  this.render();
}

export default TodoItem;
