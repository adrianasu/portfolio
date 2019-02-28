
function watchHamburguer() {
    $('.js-nav-container').on('click', '.js-nav-toggle-button', function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        $('.site-nav').toggleClass('open');
    })

    $('.js-nav-container').on('click', 'a', function (event) {
        if( $('.site-nav').hasClass('open') === true ){
            event.stopPropagation();
            event.stopImmediatePropagation();
            $('.site-nav').toggleClass('open');
        }
    })
}

$(watchHamburguer);