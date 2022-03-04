$(document).ready(function(){

    $(window).on('scroll',function(){
  
      var link = $('.navbar a.dot');
      var top = $(window).scrollTop();
  
      $('.sec').each(function(){
        var id = $(this).attr('id');
        var height = $(this).height();
        var offset = $(this).offset().top - 150;
        if (top >= offset && top < offset + height){
          link.removeClass('active');
          $('.navbar').find('[data-scroll="' + id + '"]') .addClass('active');
        }
      });
  
    });

    const demoDiv = document.querySelector("#demo");
window.addEventListener('scroll', function() {
  if (pageYOffset*0.0001 > 1 || pageYOffset*0.0001 < 0) { return; }
  else { demo.setAttribute('style', 'transform: scale('+pageYOffset*0.003+');'); }
    
  });

});