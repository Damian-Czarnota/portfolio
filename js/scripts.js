
$(document).ready(function() {
  $(".add").toggleClass("boxHide boxShow");
});

$(document).ready(function() { 
$('a[href^="#"]').on('click', function(event) {	
var target = $( $(this).attr('href') );	
if( target.length ) {
event.preventDefault();
$('html, body').animate({scrollTop: target.offset().top - 120}, 1000);
}
});
});

$(window).scroll(function () {
    showText()
});

function showText() {
    var text = $('.hideText')
    var text_position = text.position();
    if ($(window).scrollTop() >= text_position.top-800) {
        text.addClass('showText');

    } else {
        text.removeClass('showText');
    }
};
