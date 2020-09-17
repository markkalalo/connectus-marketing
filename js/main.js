jQuery(document).ready(function(){
    
    var browserWindow = $(window);

    browserWindow.on('load', function() {
        $('.preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
    
    $("#navbarNav ul li a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000, function(){});
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        autoplay: 3000, // time for slides changes
        smartSpeed: 3000, // duration of change of 1 slide
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

});