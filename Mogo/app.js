$(document).ready(function() {


    /* accordion */
    $('.accordion__item').click(function() {
       $(this).toggleClass('active').next().slideToggle();
       $('.accordion__item').not(this).removeClass('active').next().slideUp();
    });

    /* fixed header */
    let header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if(scrollOffset >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }


    /* smoothing scroll */
    $('[data-scroll]').on('click', function () {
        event.preventDefault();

        let $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;


        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);

    })


    /* Menu NAv Toggle */
    $('#nav-toggle').on('click', function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
    });



});

