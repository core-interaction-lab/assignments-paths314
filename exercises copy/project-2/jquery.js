$(document).ready(function() {alert("[hello hello hello]"); })

const demoDiv = document.querySelector("#demo");
window.addEventListener('scroll', function() {
  if (pageYOffset*0.0001 > 1 || pageYOffset*0.0001 < 0.2) { return; }
  else { demo.setAttribute('style', 'transform: scale('+pageYOffset*0.0001+');'); }
});