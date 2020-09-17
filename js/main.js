jQuery(document).ready(function(){
    
    $("#navbarNav ul li a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000, function(){});
    });

    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    //   });
    //   $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: true,
    //     focusOnSelect: true
    //   });
     
    //   $('a[data-slide]').click(function(e) {
    //     e.preventDefault();
    //     var slideno = $(this).data('slide');
    //     $('.slider-nav').slick('slickGoTo', slideno - 1);
    //   });

});