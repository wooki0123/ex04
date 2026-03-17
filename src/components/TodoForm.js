function TodoForm({ $target }) {
  const $form = document.createElement("form");
  $form.innerHTML = `<input type="text" placeholder="할 일을 입력하세요." />
    <button>추가</button>
  `;
  $target.appendChild($form);
}

export default TodoForm;
