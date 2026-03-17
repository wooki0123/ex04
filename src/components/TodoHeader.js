function TodoHeader({ $target }) {
  const $h1 = document.createElement("h1");

  $h1.innerText = "오늘 할 일";
  $target.appendChild($h1);
}

export default TodoHeader;
