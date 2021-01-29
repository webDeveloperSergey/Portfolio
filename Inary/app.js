$(document).ready(function() {


  $('.partner-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('[data-scroll]').on('click', function(event) {
    event.preventDefault();

    let blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $('html, body').animate({
      scrollTop: blockOffset
    }, 1000)

  })

});
