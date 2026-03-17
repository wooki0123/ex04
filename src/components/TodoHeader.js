function TodoHeader({ $target }) {
  const $h1 = document.createElement("h1");
  $target.appendChild($h1);
  this.state = "오늘 할 일";

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $h1.innerText = this.state;
  };

  this.render();
}

export default TodoHeader;
