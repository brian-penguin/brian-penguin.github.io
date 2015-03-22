$( document ).ready(function() {
  $('.arrow').click(function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('.hello-content').offset().top
    }, 1000);
  });
});
