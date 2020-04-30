$(function() {

  $('.intro-slider').slick({
    arrows: false,
    vertical: true,
    dots: true,
    dotsClass: 'intro-dots',
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          vertical: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]  
  })

  let header = $('#header'),
      scrollPos = $(window).scrollTop();

  $(window).on('scroll load resize', function() {
    scrollPos = $(this).scrollTop();

    if(scrollPos > 50) {
      header.addClass('fixed');
    } else{
      header.removeClass('fixed');
    }
  });

  $('#burger').on('click', function() {
    $('#nav').toggleClass('show');
    $('#burger').toggleClass('active');
  });


});