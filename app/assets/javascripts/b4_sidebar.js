$(document).ready(function () {
    var trigger = $('.hamburger'),
        // overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        // if (isClosed == true) {
        //     // overlay.hide();
        //     trigger.removeClass('is-open');
        //     trigger.addClass('is-closed');
        //     isClosed = false;
        // } else {
        //     // overlay.show();
        //     trigger.removeClass('is-closed');
        //     trigger.addClass('is-open');
        //     isClosed = true;
        // }
    }

    $('.sideButton').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})