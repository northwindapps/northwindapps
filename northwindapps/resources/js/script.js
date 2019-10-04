$(document).ready(function(){
    $('h1').click(function(){
        $(this).css('background-color','#ff0008');
    });

     /* For the sticky navigation */
     $('.fries').waypoint(function(direction) {
        if (direction == "down") {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });

});