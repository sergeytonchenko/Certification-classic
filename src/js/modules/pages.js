export const pageChange = function () {
    let pages = $('.pages__num');    

    $('.pages__num').click(function() {
        for (let i = 0; i < pages.length; i++) {
            $(pages[i]).removeClass('pages__link--active').attr('href', "#");            
            $(this).addClass('pages__link--active').removeAttr('href');            
            $('.end, .begin, .pages__pre, .pages__next').removeClass('pages__link--active');
        }
        if ($(pages[0]).hasClass('pages__link--active')) { 
            $('.pages__pre, .begin').addClass('pages__link--active').removeAttr('href');                                  
        }
        if ($(pages[pages.length - 1]).hasClass('pages__link--active')) { 
            $('.pages__next, .end').addClass('pages__link--active').removeAttr('href');                                              
        }
    })    

    $('.begin').click(function() {        
        for (let i = 0; i < pages.length; i++) {
            $(pages[i]).removeClass('pages__link--active').attr('href', "#");
        }        
        $(pages[0]).addClass('pages__link--active').removeAttr('href');
        if ($(pages[0]).hasClass('pages__link--active')) {                
            $(this).addClass('pages__link--active').removeAttr('href');
            $('.pages__pre').addClass('pages__link--active').removeAttr('href');
            $('.end, .pages__next').removeClass('pages__link--active');                                 
        }         
    })

    $('.pages__pre').click(function() {
        for (let i = 0; i < pages.length; i++) {
            if ($(pages[i]).hasClass('pages__link--active')) {
                $(pages[i]).removeClass('pages__link--active');
                $(pages[i-1]).addClass('pages__link--active');
                $('.end, .pages__next').removeClass('pages__link--active');                                 
            }        
        }
        if ($(pages[0]).hasClass('pages__link--active')) {
            $(this).addClass('pages__link--active').removeAttr('href');
            $('.begin').addClass('pages__link--active').removeAttr('href'); 
        }
    })

    $('.pages__next').click(function() {
        for (let i = 0; i < pages.length; i++) {
            if ($(pages[i]).hasClass('pages__link--active')) {
                $(pages[i]).removeClass('pages__link--active');
                $(pages[i+1]).addClass('pages__link--active');
                $('.begin, .pages__pre').removeClass('pages__link--active');                
                break;                
            }        
        }
        if ($(pages[pages.length - 1]).hasClass('pages__link--active')) {
            $(this).addClass('pages__link--active').removeAttr('href');
            $('.end').addClass('pages__link--active').removeAttr('href');
        }
    })

    $('.end').click(function() {        
        for (let i = 0; i < pages.length; i++) {
            $(pages[i]).removeClass('pages__link--active').attr('href', "#");            
        }        
        $(pages[pages.length - 1]).addClass('pages__link--active').removeAttr('href'); 
        if ($(pages[pages.length - 1]).hasClass('pages__link--active')) {                
            $(this).addClass('pages__link--active').removeAttr('href');
            $('.pages__next').addClass('pages__link--active').removeAttr('href');
            $('.begin, .pages__pre').removeClass('pages__link--active');
        }               
    }) 
}