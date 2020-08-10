$(function(){

  $('.works-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
    dots:false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  $('.contributor-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
    dots:false,
    autoplay: true,
    smartSpeed: 900,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  $('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
    e.preventDefault();
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});