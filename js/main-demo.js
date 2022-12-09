$(function() {

    $('.theme-color li a').on('click', function(e) {
        var style_link = $(this).attr('href');
        $('link.site-color').attr('href', style_link);

        e.preventDefault();
    });

    var buyLink = $('.buy-btn').attr('href') + '?ref=cosmos-themes';
    //console.log(buyLink + "?ref=cosmos-themes");
    $('.buy-btn').attr('href', buyLink).attr('target', '_blank');
});
