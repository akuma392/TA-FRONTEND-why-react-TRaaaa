let input = document.querySelector('#text');

let root = document.querySelector('ul');

let allTodos = [];

function handleEvent(event) {
  root.innerHTML = '';
  if (event.keyCode === 13 && event.target.value !== '') {
    allTodos.push({
      todo: event.target.value,
      isWatched: false,
    });
    event.target.value = '';
  }
  createUI();
}

function handleWatch(event) {
  let id = event.target.dataset.id;
  console.log(event.target.dataset.id);
  allTodos[id].isWatched = !allTodos[id].isWatched;
  createUI();
}

function createUI(data = allTodos, rootElm = root) {
  rootElm.innerHTML = '';
  data.forEach((elm, index) => {
    let li = document.createElement('li');

    let p = document.createElement('p');
    p.innerText = elm.todo;

    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    h4.setAttribute('data-id', index);
    if (elm.isWatched) {
      h4.innerText = 'watched';
    } else {
      h4.innerText = 'to watch';
    }
    div.addEventListener('click', handleWatch);

    div.append(h4);
    let nav = document.createElement('nav');
    let span = document.createElement('span');
    span.setAttribute('data-id', index);

    span.addEventListener('click', deleteTodo);
    span.innerText = 'X';
    nav.append(span);
    li.append(p, div, nav);
    rootElm.append(li);
  });
}

function deleteTodo(event) {
  console.log(event.target);
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  createUI(allTodos);
}

createUI();
input.addEventListener('keyup', handleEvent);
