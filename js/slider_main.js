jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 5000);
  
    var slideCount = $('#slider_main ul li').length;
    var slideWidth = $('#slider_main ul li').width();
    var slideHeight = $('#slider_main ul li').height();
    var slideHeightImg = $('#slider_main ul li img').height();
    var slideWidthImg = $('#slider_main ul li img').width();
    var sliderUlWidth = slideCount * slideWidth;
  
    $('#slider_main').css({ width: slideWidthImg, height: slideHeightImg });
  
    $('#slider_main ul').css({ width: sliderUlWidth, marginLeft: - slideWidthImg });

    $('#slider_main ul li').css({ height: slideHeightImg });
  
    $('#slider_main ul li:last-child').prependTo('#slider ul');

    function moveRight() {
        $('#slider_main ul').animate({
            left: - slideWidthImg
        }, 500, function () {
            $('#slider_main ul li:first-child').appendTo('#slider_main ul');
            $('#slider_main ul').css('left', '');
        });
    };

    
    // $("#glavna").hide();

    function load_main() {
        $("#glavna").fadeIn(1000);
    }

    // $("#glavna").fadeOut(); 
    $(".arrow_down").mouseenter(function  () {
        $(this).css("color","gray").mouseout(function  () {
             $(this).css("color","white");
        });

    }).click(function  () {
        // $(".slider_header").slideUp(500);
        // $("#glavna").fadeIn(1000);
        
        
    });



































    
});
    
   