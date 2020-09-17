jQuery(document).ready(function(){
    
    $("#navbarNav ul li a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000, function(){});
    });

});