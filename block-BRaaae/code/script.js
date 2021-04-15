let input = document.querySelector('#text');

let root = document.querySelector('ul');

let allTodos = [];

function handleEvent(event) {
  // root.innerHTML = '';
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

// function elm(type, attr = {}, ...children) {
//   let element = document.createElement(type);
//   for (let key in attr) {
//     if (key.startsWith('data-')) {
//       element.setAttribute(key, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }

//   children.forEach((child) => {
//     if (typeof child === 'object') {
//       element.append(child);
//     }
//     if (typeof child === 'string') {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });

//   return element;
// }

let elm = React.createElement;
function createUI(data = allTodos, rootElm = root) {
  let ui = data.map((movie, index) => {
    let span = elm('span', { 'data-id': index }, 'X');
    // span.addEventListener('click', deleteTodo);
    let div = elm(
      'div',
      {},
      elm('h4', { 'data-id': index }, movie.isWatched ? 'watched' : 'to watch')
    );
    // div.addEventListener('click', handleWatch);
    let li = elm('li', {}, elm('p', {}, movie.todo), div, elm('nav', {}, span));

    return li;
  });

  ReactDOM.render(ui, rootElm);
}

function deleteTodo(event) {
  console.log(event.target);
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  createUI(allTodos);
}

createUI();
input.addEventListener('keyup', handleEvent);
