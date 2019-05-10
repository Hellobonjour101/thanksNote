var clockContainer = document.querySelector('.js-clock');
var clockTitle = document.querySelector('h1');

function getTime(){
  var date = new Date();
  date.toString();
var hours = date.getHours();
console.log(hours);
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  clockTitle.innerHTML = `${
    hours<10 ? `0${hours}` : hours
  }:${
    minutes<10 ? `0${minutes}` : minutes
  }:${
    seconds<10 ? `0${seconds}` : seconds
  }`;
}
function init(){
 getTime();
 setInterval(getTime,1000);
}
init();
