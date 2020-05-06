$(function() {

  // Smooth Scrolling
  $('[data-scroll]').on('click', function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $('html, body').animate({
      scrollTop: elementOffset - 140
    }, 1000);
  });


  // Video
  let video = $('video')[0];
  let playBtn = $('#play-btn');
  let closeBtn = $('#close-btn');

  playBtn.on('click', function(event) {
    event.preventDefault();

    playBtn.css('opacity', '0');
    closeBtn.css('opacity', '1');
    $('.overlay').css('opacity', '0')
    video.play();

  });

  closeBtn.on('click', function (event) {
    event.preventDefault();

    playBtn.css('opacity', '1');
    closeBtn.css('opacity', '0');
    $('.overlay').css('opacity', '0.6')
    video.pause();
  })

  // Burger
  $('#burger').on('click', function() {
    $('#nav').toggleClass('show');
    $('.burger__item').toggleClass('active');
  })

});
