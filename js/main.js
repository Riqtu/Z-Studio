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



function goToHome(){

    $(".bar__welcome").css('opacity','1')
    $(".bar__about").css('opacity','0')
    $(".bar__projects").css('opacity','0')

    $(".projects").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".projects").css("display","none");
    }, 501);

    $(".about").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".about").css("display","none");
    }, 501);

    $(".welcome").css("display","block");
    setTimeout(() => {
        $(".welcome").animate({'opacity':'1'},500)
    }, 1);
}


function aboutOn(){

    $(".bar__welcome").css('opacity','0')
    $(".bar__about").css('opacity','1')
    $(".bar__projects").css('opacity','0')

    $(".welcome").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".welcome").css("display","none");
    }, 501);

    $(".projects").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".projects").css("display","none");
    }, 501);

    $(".about").css("display","block");
    setTimeout(() => {
        $(".about").animate({'opacity':'1'},500)
    }, 1);


}

function projectsOn(){

    $(".bar__welcome").css('opacity','0')
    $(".bar__about").css('opacity','0')
    $(".bar__projects").css('opacity','1')

    $(".welcome").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".welcome").css("display","none");
    }, 501);

    $(".projects").css("display","block");
    setTimeout(() => {
        $(".projects").animate({'opacity':'1'},500)
    }, 1);

}



function logo(){
    $(".projects__logo").css("display","block");
    setTimeout(() => {
        $(".projects__logo").animate({'opacity':'1'},500)
    }, 1);
}
function logoExit(){
    $(".projects__logo").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".projects__logo").css("display","none");
    }, 501);
}

function logoItem1On(){
    $(".logo__fullsize").css("background-image","url('logoitems/item1.png')");
}
function logoItem2On(){
    $(".logo__fullsize").css("background-image","url('logoitems/item2.png')");
}
function logoItem3On(){
    $(".logo__fullsize").css("background-image","url('logoitems/item3.png')");
}
function logoItem4On(){
    $(".logo__fullsize").css("background-image","url('logoitems/item4.png')");
}








function youtube(){
    $(".projects__youtube").css("display","block");
    setTimeout(() => {
        $(".projects__youtube").animate({'opacity':'1'},500)
    }, 1);
}
function youtubeExit(){
    $(".projects__youtube").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".projects__youtube").css("display","none");
    }, 501);
}

function youtubeItem1On(){
    $(".youtube__fullsize").css("background-image","url('img/item1.png')");
}
function youtubeItem2On(){
    $(".youtube__fullsize").css("background-image","url('img/item2.png')");
}
function youtubeItem3On(){
    $(".youtube__fullsize").css("background-image","url('img/item3.png')");
}
function youtubeItem4On(){
    $(".logo__fullsize").css("background-image","url('img/item4.png')");
}









function web(){
    $(".projects__web").css("display","block");
    setTimeout(() => {
        $(".projects__web").animate({'opacity':'1'},500)
    }, 1);
}
function webExit(){
    $(".projects__web").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".projects__web").css("display","none");
    }, 501);
}

function webItem1On(){
    $(".web__fullsize").css("background-image","url('img/item1.png')");
}
function webItem2On(){
    $(".web__fullsize").css("background-image","url('img/item2.png')");
}
function webItem3On(){
    $(".web__fullsize").css("background-image","url('img/item3.png')");
}
function webItem4On(){
    $(".logo__fullsize").css("background-image","url('img/item4.png')");
}