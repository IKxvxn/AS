//TODO APP

var yo = require('yo-yo')
const uuidv1 = require('uuid/v1');

var state = [];

var el = list(state, add)
 
function list (items, onclick) {

  var input = yo`<input type="text" id="todoVal">`
  return yo`<div>
    TODO
    ${input}
    <button id="addTodoButt" onclick=${onclick}>Add</button>
    <ul>
      ${items.map(function (item) {
        return yo`<li id="${item.id}">${item.value}<button onclick=${done}>Done</button></li>`
      })}
    </ul>
  </div>`
}

function add () {
  // add a new random number to our list 
  var num = uuidv1()

  var todo = {};
    todo.id = uuidv1();
    todo.value = document.getElementById('todoVal').value;
    todo.status = 'pending';
    state = [
      ...state,
      todo
    ];

  
  // construct a new list and efficiently diff+morph it into the one in the DOM 
  var newList = list(state, add)
  yo.update(el, newList)
}
 
function done (ev) {
  // add a new random number to our list 
  var id = ev.target.parentNode.getAttribute('id')
    state = state.filter(function(el, i) {
      return id !== el.id;
    });

 var newList = list(state, add)
  yo.update(el, newList)
}
 
document.body.appendChild(el)