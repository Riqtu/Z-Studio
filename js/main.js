$(document).ready(function(){
    $(window).scroll(function(){
        var bo = $(this).scrollTop();
    if ( bo >= 850) {
        $(".bar__welcome").css('opacity','0')
        $(".bar__about").css('opacity','0')
        $(".bar__projects").css('opacity','1')
    };
    if ( bo >= 400 && bo<850) {
        $(".bar__welcome").css('opacity','0')
        $(".bar__about").css('opacity','1')
        $(".bar__projects").css('opacity','0')
    };
    if ( bo < 400) {
        $(".bar__welcome").css('opacity','1')
        $(".bar__about").css('opacity','0')
    };
    })
})
function goToAbout(){
}
function menuon(){
    $(".menu img").animate({'opacity':'0'},300)
    setTimeout(() => {
        $(".menu img").css("display","none");
    }, 700);
    $(".novigation").animate({'opacity':'1'},700)
    setTimeout(() => {
        $(".novigation").css("display","grid");
        $(".mleft").css("display","block");
        $(".mcenter").css("display","block");
        $(".mright").css("display","block");
    }, 1);
    $(".mleft").animate({'top':'0%'},500)
    $(".mcenter").animate({'top':'0%'},500)
    $(".mright").animate({'top':'0%'},500)
}
function menuoff(){
    $(".novigation").animate({'opacity':'0'},300)
    setTimeout(() => {
        $(".novigation").css("display","none");
        $(".mleft").css("display","none");
        $(".mcenter").css("display","none");
        $(".mright").css("display","none");
    }, 700);
    $(".menu img").animate({'opacity':'1'},300)
    setTimeout(() => {
        $(".menu img").css("display","grid");
    }, 1);
    $(".mleft").animate({'top':'-100%'},500)
    $(".mcenter").animate({'top':'100%'},500)
    $(".mright").animate({'top':'-100%'},500)
}