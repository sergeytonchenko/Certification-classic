export const pageChange = function () {
    $('.pages__num').click(function() { 
        $('.pages__item a').removeClass('pages__link--active');
        $('.pages__item a').attr('href', "#");
        $(this).addClass('pages__link--active');
        $(this).removeAttr('href')
    })

    $('.pages__next').click(function() {
        let b = $('.pages__num').next('.pages__num')
        console.log(b)
                                            
        
    })
}