function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");
  $target.appendChild($form);

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    const $input = $form.querySelector("input");

    onSubmit($input.value);
  });

  this.render = () => {
    $form.innerHTML = `<input type="text" placeholder="할 일을 입력하세요." />
    <button>추가</button>
    `;
  };

  this.render();
}

export default TodoForm;
