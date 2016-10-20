/**
 * Created by zhanggc on 2016/10/19 0019.
 */
$(window).scroll(function() {
    //if (winWidth > 767) {
    var $scrollHeight = $(window).scrollTop();
    if ($scrollHeight > 300) {
        $('#home').slideDown(400);
    }else{
        $('#home').slideUp(400);
    }
    //}

    //got o top
    if ($(this).scrollTop() > 200) {
        $('#go-to-top a').fadeIn('slow');
    } else {
        $('#go-to-top a').fadeOut('slow');
    }
});