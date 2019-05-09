var IMG_NUMBER = 7;
var body = document.querySelector('body');

function paintImage(num){
  var image = document.createElement('img');
  image.src = `imgs/${num+1}.jpg`;
  image.classList.add('bgImage');
  body.appendChild(image);
}
function genRandom(){
  var number = Math.floor(Math.random()*IMG_NUMBER);
  return number;
}
function init(){
  var randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
