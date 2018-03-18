$(document).ready(function(){
    $(window).scroll(function(){
        var bo = $(this).scrollTop();
        var a = $(".welcome").css('opacity')
        var b = $(".about").css('opacity')
    if ( bo >= 200 && a==1 && b==0) {
        $(".welcome").animate({'opacity':'0'},500)
        $(".about").animate({'opacity':'1'},700)
        $(".bar__welcome").animate({'opacity':'0'},500)
    };
    if ( bo < 200 && a==0 && b==1) {
        $(".welcome").animate({'opacity':'1'},500)
        $(".about").animate({'opacity':'0'},700)
        $(".bar__welcome").animate({'opacity':'1'},500)
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
        $(".menu img").css("display","block");
    }, 1);
    $(".mleft").animate({'top':'-100%'},500)
    $(".mcenter").animate({'top':'100%'},500)
    $(".mright").animate({'top':'-100%'},500)
}