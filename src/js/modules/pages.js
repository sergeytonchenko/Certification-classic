export const pageChange = function () {
    $('.pages__num').click(function() { 
        $('.pages__item a').removeClass('pages__link--active');
        $('.pages__item a').attr('href', "#");
        $(this).addClass('pages__link--active');
        $(this).removeAttr('href')
    })

    $('.pages__next').click(function() {        
            $('.pages__item a')
                .hasClass('pages__link--active')
                .next('.pages__item a')
                .addClass('pages__link--active');
                console.log($(this));            
        
    })
  }