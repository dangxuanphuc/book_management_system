import 'bxslider/dist/jquery.bxslider.min'
import 'owl.carousel/dist/owl.carousel.min';

$(document).ready(function() {
  $('#hero-slide').owlCarousel({
    margin: 0,
    loop: true,
    lazyLoad: true,
    items: 1,
    animateIn: 'fadeInDown',
    animateOut: 'fadeOutDown',
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.hero-home .fa-angle-up').click(function() {
    $(this).parent().parent().next().trigger('prev.owl.carousel');
  });

  $('.hero-home .fa-angle-down').click(function() {
    $(this).parent().parent().next().trigger('next.owl.carousel');
  });

  $('#recommended-book-slide').owlCarousel({
    margin: 20,
    loop: true,
    lazyLoad: true,
    items: 5,
  });

  $('#author-book-slide').owlCarousel({
    margin: 0,
    loop: true,
    lazyLoad: true,
    items: 3,
  });

  $('.fa-angle-left').click(function() {
    $(this).parent().next().trigger('prev.owl.carousel');
  });

  $('.fa-angle-right').click(function() {
    $(this).parent().next().trigger('next.owl.carousel');
  });

  if($('.home-page')[0]) {
    $('.wrapper').css('margin-top', '0');
    $('.navbar-fixed-top').css({
      'background': 'linear-gradient(#ffffff,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0))',
      'box-shadow': 'none'
    });
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() > 280) {
      $('.navbar-fixed-top').css({
        'background': 'white',
        'box-shadow': '2px 4px 30px #d9d6d6'
      });
    } else {
      $('.navbar-fixed-top').css({
        'background': 'linear-gradient(#ffffff,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0))',
        'box-shadow': 'none'
      });
    }
  });
});
