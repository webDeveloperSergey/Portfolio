$('#write_meat').click(function () {
    $('.wrapper').css('filter', 'blur(5px)');
    $('.js-overlay-campaing').fadeIn();
    $('.js-overlay-campaing').addClass('disable');
});

///////закрыть на крестик
$('.js-close-campaing').click(function () {
    $('.js-overlay-campaing').fadeOut();
    $('.wrapper').css('filter', 'none');
});

///закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaing');

    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaing').fadeOut();
        $('.wrapper').css('filter', 'none');
    }
});