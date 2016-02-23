
$(document).ready(function(){

    //animating articles height on hower
    $('.why-us__article-header').hover(function(){
        $(this).find('h4').animate({paddingTop: '25',
                                    paddingBottom: '25'}).css('color', '#F58220');
    }, function(){
        $(this).find('h4').animate({paddingTop: '0',
                                    paddingBottom: '0'}).css('color','#231F20');
    });

    //map resize
    $('.map-text').click(function(){
        if($('.map-wrap').hasClass('map-wrap_small')&& $('#map').hasClass('map_small')) {
            $('.map-wrap').animate({marginTop: '-324px'}, 500).removeClass('map-wrap_small').addClass('map-wrap_big');
            $('#map').animate({height: '510px'}, 500).removeClass('map_small').addClass('map_big');
            $('.map-text').html('<p class="map-text">collapse map <i class="fa fa-angle-down"></i></p>');
        }
        else if ($('.map-wrap').hasClass('map-wrap_big')&& $('#map').hasClass('map_big')) {
            $('.map-wrap').animate({marginTop: '30px'}, 500).removeClass('map-wrap_big').addClass('map-wrap_small');
            $('#map').animate({height: '170px'}, 500).removeClass('map_big').addClass('map_small');
            $('.map-text').html('<p class="map-text map-text_expand">expand map <i class="fa fa-angle-up"></i></p>');
        }
    });
});