$(document).ready(function(){
  var link = $('.navbar a.dot');
    $(window).on('scroll',function(evt){
  
        

      var top = $(window).scrollTop();
  
      $('.section').each(function(){
        var id = $(this).attr('id');
        var height = $(this).height();
        var offset = $(this).offset().top - 150;
        if (top >= offset && top < offset + height){
          link.removeClass('active');
          $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
        }
      });
  
    });

    link.click(function(evt) {
console.log(evt);
link.removeClass('active');
/*
link.each(function(index, el) {
  console.log(el);
el.removeClass('active');
})
*/
      evt.target.classList.add('active');
    })

    const demoDiv = document.querySelector("#demo");
window.addEventListener('scroll', function() {
  if (pageYOffset*0.0001 > 1 || pageYOffset*0.0001 < 0) { return; }
  else { demo.setAttribute('style', 'transform: scale('+pageYOffset*0.003+');'); }
    
  });

});