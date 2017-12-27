
$(document).ready(function(){
    var ua = navigator.userAgent;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)){
        $('#irabLink').hide();
    }
    else if(/Chrome/i.test(ua))
    {
        $('#irabLink').show();
    }
    else{
        alert("not a mobile");
        $('#irabLink').show();
    }

});


$('body').scrollspy({ target: '#navbar-example' });

$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
                callback();
            }
        });
        return this;
    }
});

/*
var waypoint = new Waypoint({
    element: document.getElementById('home'),
    handler: function() {

        $('#cardD').animateCss('bounceInRight');
        $('.inHome').animateCss('zoomIn');
        $('#cardD1').animateCss('lightSpeedIn');
        $('.regBtn').animateCss('flipInX');

    }
});
*/

/*var waypoint1 = new Waypoint({
    element: document.getElementById('instSect'),
    handler: function() {

        $('#instItems').animateCss('jello');

    },
    offset: "20%"
});*/

var waypoint2 = new Waypoint({
    element: document.getElementById('regbott'),
    handler: function() {

        $('#regbott').animateCss('headShake');

    },
    offset: "80%"
});


$('.rounded-circle').hover(function () {
    $(this).animateCss('pulse')
});

$('#myCarousel').on('slide.bs.carousel', function () {

    $('#cardD').animateCss('bounceInRight');
    $('.inHome').animateCss('zoomIn');
    $('#cardD1').animateCss('lightSpeedIn');
    $('.regBtn').animateCss('flipInX');

});
