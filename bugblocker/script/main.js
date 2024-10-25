//mobile menu

$(document).ready(function () {
    $('.mobile-nav-button').on('click', function () {
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1 white-menu");
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2 white-menu");
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3 white-menu");

        $('.mobile-menu').toggleClass('mobile-menu--open');
        $('.bg-dark-overlay').toggleClass('bg-open');
        
        return false;
    });

    

    
 
   
});


// read more

