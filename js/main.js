$(document).ready(function(){
    $(window).scroll(function(){
        var bo = $(this).scrollTop();
    if ( bo >= 400) {
        $(".bar__welcome").animate({'opacity':'0'},10)
        $(".bar__about").animate({'opacity':'1'},10)
    };
    if ( bo < 400) {
        $(".bar__welcome").animate({'opacity':'1'},10)
        $(".bar__about").animate({'opacity':'0'},10)
    };

    })
})

function menuon(){
    $(".menu img").animate({'opacity':'0'},300)
    setTimeout(() => {
        $(".menu img").css("display","none");
    }, 700);
    $(".novigation").animate({'opacity':'1'},700)
    setTimeout(() => {
        $(".novigation").css("display","grid");
    }, 1);
    $(".mleft").animate({'top':'0%'},500)
    $(".mcenter").animate({'top':'0%'},500)
    $(".mright").animate({'top':'0%'},500)
}
function menuoff(){
    $(".novigation").animate({'opacity':'0'},300)
    setTimeout(() => {
        $(".novigation").css("display","none");
    }, 700);
    $(".menu img").animate({'opacity':'1'},300)
    setTimeout(() => {
        $(".menu img").css("display","grid");
    }, 1);
    $(".mleft").animate({'top':'-100%'},500)
    $(".mcenter").animate({'top':'100%'},500)
    $(".mright").animate({'top':'-100%'},500)
}