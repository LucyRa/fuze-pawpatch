$(function () {
    // Event handler for mobile navigation
    $('.nav-control').on('click', () => {
        $('.nav-items').toggleClass('showNav');
    });

    // Event handler to close cookies bar
    $('.cookie-bar-control').on('click', () => {
        $('.cookies-bar').addClass('display-none');
    });

    // Event handler for 'Let's go walkies' buttons
    $('.coming-soon').on('click', () => {
        alert('Coming soon!');
    });

    // Event handler for scroll to content
    $('.scroll-to-content').on('click', () => {
        $('html, body').animate({
            scrollTop: $("#homeContent").offset().top
        }, 2000);
    });
});