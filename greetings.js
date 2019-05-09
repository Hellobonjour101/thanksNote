var form = document.querySelector('.js-form');
var input = form.querySelector('input');
var greetings = document.querySelector('.js-greetings');

function saveName(cv){
  localStorage.setItem('currentUser',cv);
}
function handleSubmit(event){
  event.preventDefault();
  var currentValue = input.value;
  saveName(currentValue);
  paintGreeting(currentValue);
}
function askForName(){
  form.classList.add('showing');
  form.addEventListener('submit',handleSubmit);
}
function paintGreeting(cv){
  form.classList.remove('showing');
  greetings.classList.add('showing');
  greetings.innerText=`Hello Bonjour, ${cv}`;
}
function loadName(){
  var currentUser = localStorage.getItem('currentUser');
  if(currentUser == null){
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}
function init(){
  loadName();
}
init();
