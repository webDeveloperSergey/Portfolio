$(document).ready(function(){
  $('.why__slider').slick({
    slidesToShow: 1,
    arrows: false,
    centerMode: false,
    infinite: false,
    slidesToScroll: 1
  });

  $('.friendly__slider').slick({
    slidesToShow: 1,
    arrows: false,
    centerMode: true,
    slidesToScroll: 1
  });

  $('.invite__slider').slick({
    slidesToShow: 2,
    arrows: false,
    centerMode: false,
    infinite: false,
    slidesToScroll: 1
  });
});