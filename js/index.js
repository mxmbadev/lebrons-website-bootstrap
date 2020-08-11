$(document).ready(function(){
    $('.nav .nav-item .nav-link').click(function(){
        $('.nav .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    })

    $('.nav .nav-item .nav-link').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
           return false;
          }
        }
    });
    // if ($(window).scrollTop() > 0) {
    //     $(".nav").css("position", "fixed");
    //     $(".nav").css("top", 0);
    // } else {
    //     $(".nav").css("position", "relative");
    // }
});
