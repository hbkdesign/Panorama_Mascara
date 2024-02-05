$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();

    $('#parallax1').css('background-position', 'center ' + ((scrolledY*0.5)) + 'px');
    $('#parallax2').css('background-position', 'center ' + ((scrolledY*0.4)) + 'px');
    $('#parallax3').css('background-position', 'center ' + ((scrolledY*0.3)) + 'px');
    $('#parallax4').css('background-position', 'center ' + ((scrolledY*0.2)) + 'px');
    $('#parallax5').css('background-position', 'center ' + ((scrolledY*0.1)) + 'px');


});