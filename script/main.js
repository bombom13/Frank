$(function () {

    // PC 화면 내 메뉴바
    $(".menu>li").on({
        mouseover: function () {
            // $(".submenu",this).css({display:'block'});
            // slideDown(); 높이값 늘리면서 display:none > block변경
            $('.submenu', this).stop().slideDown();
        },
        mouseout: function () {
            // $(".submenu",this).css({display:'none'});
            // slideUp(); 높이값 줄이면서 display:block > none변경
            $('.submenu', this).stop().slideUp();
        }
    });

    // 태블릿, 모바일 화면 내 메뉴바 (햄버거바)
    $(".ham").click(function () {
        $(".ham_menu").stop().animate({ right: '0px' });
    })

    $(".close").click(function () {
        $(".ham_menu").stop().animate({ right: '-350px' });
    });

    // section01 글자 보이기
    $(".section01 .box").on({
        mouseover:function(){
            $(this).find("span,p").stop().fadeIn();
        },
        mouseout:function(){
            $(this).find("span,p").stop().fadeOut();
        }
    });
        $(".section01 .box").on({
        mouseover:function(){
            $(this).find("span,p").stop().fadeIn();
        },
        mouseout:function(){
            $(this).find("span,p").stop().fadeOut();
        }
    });

});