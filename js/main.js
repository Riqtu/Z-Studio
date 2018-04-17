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
    $(".bar__cont").css('opacity','0')

    $(".projects").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".projects").css("display","none");
    }, 501);

    $(".about").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".about").css("display","none");
    }, 501);

    $(".contacts").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".contacts").css("display","none");
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
    $(".bar__cont").css('opacity','0')

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

    $(".contacts").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".contacts").css("display","none");
    }, 501);

}

function projectsOn(){

    $(".bar__welcome").css('opacity','0')
    $(".bar__about").css('opacity','0')
    $(".bar__cont").css('opacity','0')
    $(".bar__projects").css('opacity','1')


    $(".welcome").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".welcome").css("display","none");
    }, 501);

    $(".projects").css("display","block");
    setTimeout(() => {
        $(".projects").animate({'opacity':'1'},500)
    }, 1);

    $(".contacts").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".contacts").css("display","none");
    }, 501);
    
    $(".about").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".about").css("display","none");
    }, 501);
}

function contactsOn(){
    $(".bar__welcome").css('opacity','0')
    $(".bar__about").css('opacity','0')
    $(".bar__projects").css('opacity','0')
    $(".bar__cont").css('opacity','1')

    $(".projects").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".projects").css("display","none");
    }, 501);

    $(".welcome").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".welcome").css("display","none");
    }, 501);

    $(".about").animate({'opacity':'0'},500)
    setTimeout(() => {
        $(".about").css("display","none");
    }, 501);
    
    $(".contacts").css("display","block");
    setTimeout(() => {
        $(".contacts").animate({'opacity':'1'},500)
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
function logoItem5On(){
    $(".logo__fullsize").css("background-image","url('logoitems/item5.png')");
}
function logoItem6On(){
    $(".logo__fullsize").css("background-image","url('logoitems/item6.png')");
}
function logoItem7On(){
    $(".logo__fullsize").css("background-image","url('logoitems/item7.png')");
}
function logoItem8On(){
    $(".logo__fullsize").css("background-image","url('logoitems/item8.png')");
}
function logoItem9On(){
    $(".logo__fullsize").css("background-image","url('logoitems/item9.png')");
}
function logoItem10On(){
    $(".logo__fullsize").css("background-image","url('logoitems/item10.png')");
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
function youtubeitems1On(){
    $(".youtube__fullsize").css("background-image","url('youtubeitems/item1.png')");
}
function youtubeitems2On(){
    $(".youtube__fullsize").css("background-image","url('youtubeitems/item2.png')");
}
function youtubeitems3On(){
    $(".youtube__fullsize").css("background-image","url('youtubeitems/item3.png')");
}
function youtubeitems4On(){
    $(".youtube__fullsize").css("background-image","url('youtubeitems/item4.png')");
}
function youtubeitems5On(){
    $(".youtube__fullsize").css("background-image","url('youtubeitems/item5.png')");
}
function youtubeitems6On(){
    $(".youtube__fullsize").css("background-image","url('youtubeitems/item6.png')");
}
function youtubeitems7On(){
    $(".youtube__fullsize").css("background-image","url('youtubeitems/item7.png')");
}
function youtubeitems8On(){
    $(".youtube__fullsize").css("background-image","url('youtubeitems/item8.png')");
}
function youtubeitems9On(){
    $(".youtube__fullsize").css("background-image","url('youtubeitems/item9.png')");
}
function youtubeitems10On(){
    $(".youtube__fullsize").css("background-image","url('youtubeitems/item10.png')");
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

function webItems1On(){
    $(".web__fullsize").css("background-image","url('webItems/item1.png')");
}
function webItems2On(){
    $(".web__fullsize").css("background-image","url('webItems/item2.png')");
}
function webItems3On(){
    $(".web__fullsize").css("background-image","url('webItems/item3.png')");
}
function webItems4On(){
    $(".web__fullsize").css("background-image","url('webItems/item4.png')");
}
function webItems5On(){
    $(".web__fullsize").css("background-image","url('webItems/item5.png')");
}
function webItems6On(){
    $(".web__fullsize").css("background-image","url('webItems/item6.png')");
}
function webItems7On(){
    $(".web__fullsize").css("background-image","url('webItems/item7.png')");
}
function webItems8On(){
    $(".web__fullsize").css("background-image","url('webItems/item8.png')");
}
function webItems9On(){
    $(".web__fullsize").css("background-image","url('webItems/item9.png')");
}
function webItems10On(){
    $(".web__fullsize").css("background-image","url('webItems/item10.png')");
}
