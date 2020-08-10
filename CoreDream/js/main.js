$(function() {

  let header = $('#header'),
      intro = $('#intro'),
      introH = intro.innerHeight(),
      scrollPos = $(window).scrollTop();

  $(window).on('scroll', function() {
    scrollPos = $(this).scrollTop();

    if(scrollPos > introH - 960) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });

  $(window).on('scroll', function() {
    $('.features__block').each(function() {
      let elementPos = $(this).offset().top;
      let topOfWindow = $(window).scrollTop();

      if(elementPos < topOfWindow + 650) {
        $(this).addClass('animate__slideInLeft');
      }
    });
  });

  $(window).on('scroll', function() {
    $('.features__info-count').each(function() {
      let elementPos = $(this).offset().top;
      let topOfWindow = $(window).scrollTop();

      if(elementPos < topOfWindow + 650) {
        $(this).addClass('animate__fadeIn');
      }
    });
  });

  $(window).on('scroll', function() {
    $('.usual__card-simple').each(function() {
      let elementPos = $(this).offset().top;
      let topOfWindow = $(window).scrollTop();

      if(elementPos < topOfWindow + 650) {
        $(this).addClass('animate__fadeIn');
      }
    });
  });
  $(window).on('scroll', function() {
    $('.sellest__card-small, .sellest__card-big').each(function() {
      let elementPos = $(this).offset().top;
      let topOfWindow = $(window).scrollTop();

      if(elementPos < topOfWindow + 650) {
        $(this).addClass('animate__slideInLeft');
      }
    });
  });


  $('.unusual-slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt="">',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          prevArrow: 0,
          nextArrow: 0
        }
      }
    ]
  });

  $('#burger').on('click', function(){
    $('#nav').toggleClass('active');
    $('#burger').toggleClass('close');
  })

})
