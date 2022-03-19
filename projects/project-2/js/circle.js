$(document).ready(function(){
  // const demoDiv = document.querySelector("#demo");
  // window.addEventListener('scroll', function() {
  //   if (pageYOffset*0.0001 > 1 || pageYOffset*0.0001 < 0) { return; }
  //   else { demo.setAttribute('style', 'transform: scale('+pageYOffset*0.003+');'); }
  // });

  const clickArea = document.getElementById('click-area');
  const img = document.querySelector('.flower');
  let hasClicked = false;
  clickArea.addEventListener('click', evt => {
    console.log('clicked');
    const pointerX = evt.pageX;
    const pointerY = evt.pageY;
    const offsetX = img.width / 2;
    const offsetY = img.height / 2;
    console.log(pointerX, pointerY);
    if (hasClicked) {
      const clone = img.cloneNode();
      clickArea.appendChild(clone);
      clone.setAttribute('style', `visibility: visible; top: ${pointerY - offsetY}px; left: ${pointerX - offsetX}px`);
    } else {
      img.setAttribute('style', `visibility: visible; top: ${pointerY - offsetY}px; left: ${pointerX - offsetX}px`);
      hasClicked = true;
    }
  });

  // document.getElementById("click-area").addEventListener("click", myFunction);

  // function myFunction() {
  //   const pointerX = evt.pageX;
  // 	const pointerY = evt.pageY;
  //   console.log(pointerX, pointerY)
  //   document.getElementById("click-area").innerHTML = "!!!";
  // }
});