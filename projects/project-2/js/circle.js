$(document).ready(function(){;})

// const demoDiv = document.querySelector("#demo");
// window.addEventListener('scroll', function() {
//   if (pageYOffset*0.0001 > 1 || pageYOffset*0.0001 < 0) { return; }
//   else { demo.setAttribute('style', 'transform: scale('+pageYOffset*0.003+');'); }
// });

const clickArea = document.getElementById('click-area');
clickArea.addEventListener('click', evt => {
  console.log('clicked');
  const pointerX = evt.pageX;
	const pointerY = evt.pageY;
  console.log(pointerX, pointerY)
});

// document.getElementById("click-area").addEventListener("click", myFunction);

// function myFunction() {
//   const pointerX = evt.pageX;
// 	const pointerY = evt.pageY;
//   console.log(pointerX, pointerY)
//   document.getElementById("click-area").innerHTML = "!!!";
// }