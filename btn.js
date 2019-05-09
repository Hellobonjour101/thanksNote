var btn = document.querySelector('.btn');

function clearStorage(){
  localStorage.clear();
  location.reload();
}
function init(){
  btn.addEventListener('click',clearStorage);
}
init();
