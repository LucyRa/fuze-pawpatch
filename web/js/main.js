$(function () {
    // Event handler for mobile navigation
    $('.nav-control').on('click', () => {
        $('.nav-items').toggleClass('showNav');
    });

    // Event handler for 'Let's go walkies' buttons
    $('.walkies-alert').on('click', () => {
        alert('Page coming soon!');
    });
});