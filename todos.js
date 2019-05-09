var todos = [];
var todoForm = document.querySelector('.js-todoForm');
var todoInput = todoForm.querySelector('input');
var todoList = document.querySelector('.js-todoList');

function deleteTodo(event){
  var btn = event.target;
  var li = btn.parentNode;
  todoList.removeChild(li);

  var cleanTodos = todos.filter(function(a){
    return a.id !== parseInt(li.id);
  });
  todos = cleanTodos;
  saveTodos();
}
function saveTodos(){
  localStorage.setItem('todos',JSON.stringify(todos));
}
function paintTodo(cv){
  var li = document.createElement('li');
  var delBtn = document.createElement('button');
  delBtn.innerText = "Delete";
  delBtn.classList.add('deleteBtn');
  var span = document.createElement('span');
  span.innerText = `${todos.length + 1}. ${cv} `;

  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = todos.length + 1;
  //console.log(li.id);

  var todoObj = {
    id:todos.length + 1,
    text:cv
  }
  //console.log(todoObj);
  todos.push(todoObj);
  //console.log(todos);
  saveTodos();

  delBtn.addEventListener('click',deleteTodo);
}
function handleSubmit(event){
  event.preventDefault();
  var currentValue = todoInput.value;
  paintTodo(currentValue);
  todoInput.value = "";
}
function loadTodos(){
  var loadedTodos = localStorage.getItem('todos');
  if(loadedTodos == null){
    todoForm.addEventListener('submit',handleSubmit);
  }else{
    todoForm.addEventListener('submit',handleSubmit);
     var parsedTodos = JSON.parse(loadedTodos);
     parsedTodos.forEach(function(a){
       paintTodo(a.text);
     });
  }
}
function init(){
  loadTodos();
}
init();
