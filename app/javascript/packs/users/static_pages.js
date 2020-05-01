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
    autoplaySpeed: 5000
  });

  $('.hero-home .fa-angle-up').click(function() {
    $(this).parent().parent().next().trigger('prev.owl.carousel');
  });

  $('.hero-home .fa-angle-down').click(function() {
    $(this).parent().parent().next().trigger('next.owl.carousel');
  });

  $('#recommended-book-slide').owlCarousel({
    margin: 20,
    loop: false,
    lazyLoad: true,
    items: 5,
    rewind: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      1440: {
        items: 5
      }
    }
  });

  $('#new-book-slide').owlCarousel({
    margin: 0,
    loop: true,
    lazyLoad: true,
    items: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('#author-slide').owlCarousel({
    margin: 0,
    loop: true,
    lazyLoad: true,
    items: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false
  });

  $('.author-book-slide').each(function() {
    $(this).owlCarousel({
      rtl: true,
      startPosition: 1,
      margin: 0,
      loop: false,
      lazyLoad: true,
      rewind: true,
      items: 3,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 3,
          margin: 15
        },
        1024: {
          items: 4
        },
        1440: {
          items: 4,
          margin: 15
        }
      }
    });
  });

  $('.slider .fa-angle-left').click(function() {
    $(this).parent().next().trigger('prev.owl.carousel');
  });

  $('.slider .fa-angle-right').click(function() {
    $(this).parent().next().trigger('next.owl.carousel');
  });

  $('.author-slide .fa-angle-left').click(function() {
    $(this).parent().next().trigger('prev.owl.carousel');
  });

  $('.author-slide .fa-angle-right').click(function() {
    $(this).parent().next().trigger('next.owl.carousel');
  });

  $('.book-slide .fa-angle-left').click(function() {
    $(this).parent().next().trigger('prev.owl.carousel');
  });

  $('.book-slide .fa-angle-right').click(function() {
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
