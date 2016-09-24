(function($) {
    $(function() {
        var jcarouselArrowLeft = $('.jcarousel-arrow-left');
        var jcarouselArrowRight = $('.jcarousel-arrow-right');
        var elementList = $('.jcarousel-list');
        var pixelsOffset = 210;
        var currentLeftValue = 0;
        var elementsCount = elementList.find('li').length;
        var minimunOffset = - ((elementsCount - 3) * pixelsOffset);
        var maximumOffset = 0;

        jcarouselArrowLeft.on('click', function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += pixelsOffset;
                elementList.animate({left: currentLeftValue + 'px'}, 500);
            }
        });
        jcarouselArrowRight.on('click', function() {
            if (currentLeftValue != minimunOffset) {
                currentLeftValue -= pixelsOffset;
                elementList.animate({left: currentLeftValue + 'px'}, 500);
            }
        });
    });
})(jQuery);
