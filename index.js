// Make scrollToTop button appear and disappear
function watchScrollTopBtn(){
    $(window).scroll(function(){
        $(window).scrollTop()>280 ?
            $('.js-toTop').addClass('show')
            : $('.js-toTop').removeClass('show');
    })
}

// Open/close hamburger menu
function toggleOpenClass(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    $('.site-nav').toggleClass('open');
}

function watchMobileNavBar() {
    // Listen for a click on hamburger button
    $('.js-nav-container').on('click', '.js-nav-toggle-button', toggleOpenClass);

    // If an option is selected, close the menu
    $('.js-nav-container').on('click', 'a', function(event){
        if( $('.site-nav').hasClass('open') === true ){
            toggleOpenClass(event);
        }
    })

    // If the menu is open and user clicks on any part
    // of the body, close the menu.
    $('body').on('click', function(event){
        if ($('.site-nav').hasClass('open') === true) {
            toggleOpenClass(event);
        }
    })
}

function main(){
    watchMobileNavBar();
    watchScrollTopBtn();
}

$(main);