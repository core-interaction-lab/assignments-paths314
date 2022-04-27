// $(document).ready(function() {alert("accessorize!"); })

const storedClothes = localStorage.getItem('myClothes');

if (storedClothes) {
    const wardrobe = JSON.parse(storedClothes);
    console.log(wardrobe);
}

const wardrobe = document.getElementById('my-clothes');

$(document).ready(function() {$("#hat1").draggable(); })
$(document).ready(function() {$("#hat2").draggable(); })
$(document).ready(function() {$("#hat3").draggable(); })
$(document).ready(function() {$("#bag1").draggable(); })
$(document).ready(function() {$("#bag2").draggable(); })
$(document).ready(function() {$("#bag3").draggable(); })
$(document).ready(function() {$("#bag4").draggable(); })
$(document).ready(function() {$("#bag5").draggable(); })
$(document).ready(function() {$("#bag6").draggable(); })
$(document).ready(function() {$("#chain1").draggable(); })
$(document).ready(function() {$("#chain2").draggable(); })
$(document).ready(function() {$("#bclet1").draggable(); })
$(document).ready(function() {$("#bclet2").draggable(); })
$(document).ready(function() {$("#sunnies").draggable(); })
$(document).ready(function() {$("#tie").draggable(); })