//顶部搜索框
$('.head_right label').mouseenter( function () {
    $('.head_search').css({'background-color':"rgba(255,255,255,0.1)",'width':'180px','border-radius':'17px','padding-left':'8px'});
    $('.head_right label').css('color','#fff');
})
$('.head_search').mouseleave( function () {
    $('.head_search').css({'background-color':"rgba(255,255,255,0)",'width':'0px','border-radius':'17px','padding-left':'0',});
    $('.head_right label').css('color','#ccc');
})

//轮播图
var n = 0;
$('.ban_btn_right').click( function () {

    n++;
    $('.ban_img').animate({left: -n*$('.ban_img li').width()+'px'},400);
    $('.tag li').eq(n).addClass('tag_color').siblings().removeClass('tag_color');
    if ( n >= 6) {
        n = 0;
        $('.ban_img').animate({left: -n*$('.ban_img li').width()+'px'},0);
        $('.tag li').eq(n).addClass('tag_color').siblings().removeClass('tag_color');
    }
})
//左侧
$('.ban_btn_left').click( function () {
    if ( n <= 0) {
        n = 6;
        $('.ban_img').animate({left: -n*$('.ban_img li').width()+'px'},0);
        $('.tag li').eq(n).addClass('tag_color').siblings().removeClass('tag_color');
    }
    n--;
    $('.ban_img').animate({left: -n*$('.ban_img li').width()+'px'},400);
    $('.tag li').eq(n).addClass('tag_color').siblings().removeClass('tag_color');


})
//轮播定时器
var timer = setInterval( function () {
    $('.ban_btn_right').trigger('click')
},3000);


$('.ban_lb_box').mouseenter( function () {
    clearInterval(timer);
})
$('.ban_lb_box').mouseleave( function () {
    clearInterval(timer);
     timer = setInterval( function () {
        $('.ban_btn_right').trigger('click')
    },3000);
})
// 点击小圆点
$('.tag li').click( function () {
    var index = $(this).index();
    n = index;
    $('.ban_img').animate({left: -n*$('.ban_img li').width()+'px'},400);
    $('.tag li').eq(n).addClass('tag_color').siblings().removeClass('tag_color');
})


// 精选
$(window).scroll( function () {
    if ($(window).scrollTop() >= $('.ban_font_position').offset().top - 60) {
        $('.ban_font').css({'position':'fixed','top':'60px','z-index':'100','left':'0',})
    } else {
        $('.ban_font').css({'position':'relative','top':'0'})
    }
})

//内容区域轮播 
//右侧
var i = 0;
var o = 0;
var p = 0;
var y = 0;
var t = 0;
function  content_right (n) {
    alert(n)
    n++;
    alert(n)
    $('.content_btn .pub_content').animate({left: -n*$('.pub_width_limt').width()+'px'},1000);
    $('.nat_tag li').eq(n).addClass('tag_color').siblings().removeClass('tag_color');
    if ( n >= 4) {
        n = 0;
        $('.content_btn .pub_content').animate({left: -n*$('.pub_width_limt').width()+'px'},0);
        $('.nat_tag li').eq(n).addClass('tag_color').siblings().removeClass('tag_color');
    }
}

// 内容轮播
$('.nature .content_btn_right').click( function () {
    i++;
    $('.nature .pub_content').animate({left: -i*$('.pub_width_limt').width()+'px'},500);
    $('.nature .nat_tag li').eq(i).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    if ( i >= 4) {
        i = 0;
        $('.nature .pub_content').animate({left: -i*$('.pub_width_limt').width()+'px'},0);
        $('.nature .nat_tag li').eq(i).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    }
});
$('.nature .content_btn_left').click( function  () {
    
    if ( i <= 0) {
        i = 4;
        $('.nature .pub_content').animate({left: -i*$('.pub_width_limt').width()+'px'},0);
        $('.nature .nat_tag li').eq(i).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    }
    i--;
    $('.nature .pub_content').animate({left: -i*$('.pub_width_limt').width()+'px'},500);
    $('.nature .nat_tag li').eq(i).addClass('content_tag_color').siblings().removeClass('content_tag_color');


});
$('.nature .nat_tag li').click( function () {
    var index = $(this).index();
    i = index;
    $('.nature .pub_content').animate({left: -i*$('.pub_width_limt').width()+'px'},400);
    $('.nature .nat_tag li').eq(i).addClass('content_tag_color').siblings().removeClass('content_tag_color');
})

$('.city .content_btn_right').click( function () {
    o++;
    $('.city .pub_content').animate({left: -o*$('.pub_width_limt').width()+'px'},500);
    $('.city .nat_tag li').eq(o).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    if ( o >= 4) {
        o = 0;
        $('.city .pub_content').animate({left: -o*$('.pub_width_limt').width()+'px'},0);
        $('.city .nat_tag li').eq(o).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    }
});
$('.city .content_btn_left').click(  function  () {
    
    if ( o <= 0) {
        o = 4;
        $('.city .pub_content').animate({left: -o*$('.pub_width_limt').width()+'px'},0);
        $('.city .nat_tag li').eq(o).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    }
    o--;
    $('.city .pub_content').animate({left: -o*$('.pub_width_limt').width()+'px'},500);
    $('.city .nat_tag li').eq(o).addClass('content_tag_color').siblings().removeClass('content_tag_color');


});
$('.city .nat_tag li').click( function () {
    var index = $(this).index();
    o = index;
    $('.city .pub_content').animate({left: -o*$('.pub_width_limt').width()+'px'},400);
    $('.city .nat_tag li').eq(o).addClass('content_tag_color').siblings().removeClass('content_tag_color');
})

$('.sport .content_btn_right').click( function () {
    p++;
    $('.sport .pub_content').animate({left: -p*$('.pub_width_limt').width()+'px'},500);
    $('.sport .nat_tag li').eq(p).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    if ( p >= 4) {
        p = 0;
        $('.sport .pub_content').animate({left: -p*$('.pub_width_limt').width()+'px'},0);
        $('.sport .nat_tag li').eq(p).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    }
});
$('.sport .content_btn_left').click( function  () {
    
    if ( p <= 0) {
        p = 4;
        $('.sport .pub_content').animate({left: -p*$('.pub_width_limt').width()+'px'},0);
        $('.sport .nat_tag li').eq(p).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    }
    p--;
    $('.sport .pub_content').animate({left: -p*$('.pub_width_limt').width()+'px'},500);
    $('.sport .nat_tag li').eq(p).addClass('content_tag_color').siblings().removeClass('content_tag_color');


});
$('.sport .nat_tag li').click( function () {
    var index = $(this).index();
    p = index;
    $('.sport .pub_content').animate({left: -p*$('.pub_width_limt').width()+'px'},400);
    $('.city .nat_tag li').eq(p).addClass('content_tag_color').siblings().removeClass('content_tag_color');
})

$('.person .content_btn_right').click( function () {
    y++;
    $('.person .pub_content').animate({left: -y*$('.pub_width_limt').width()+'px'},500);
    $('.person .nat_tag li').eq(y).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    if ( y >= 4) {
        y = 0;
        $('.person .pub_content').animate({left: -y*$('.pub_width_limt').width()+'px'},0);
        $('.person .nat_tag li').eq(y).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    }
});
$('.person .content_btn_left').click( function  () {
    
    if ( y <= 0) {
        y = 4;
        $('.person .pub_content').animate({left: -y*$('.pub_width_limt').width()+'px'},0);
        $('.person .nat_tag li').eq(y).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    }
    y--;
    $('.person .pub_content').animate({left: -y*$('.pub_width_limt').width()+'px'},500);
    $('.person .nat_tag li').eq(y).addClass('content_tag_color').siblings().removeClass('content_tag_color');


});
$('.person .nat_tag li').click( function () {
    var index = $(this).index();
    y = index;
    $('.person .pub_content').animate({left: -y*$('.pub_width_limt').width()+'px'},400);
    $('.city .nat_tag li').eq(y).addClass('content_tag_color').siblings().removeClass('content_tag_color');
})

$('.hottag .content_btn_right').click( function () {
    t++;
    $('.hottag .hottag_box').animate({left: -t*$('.pub_width_limt').width()+'px'},500);
    $('.hottag .nat_tag li').eq(t).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    if ( t >= 4) {
        t = 0;
        $('.hottag .hottag_box').animate({left: -t*$('.pub_width_limt').width()+'px'},0);
        $('.hottag li').eq(t).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    }
});
$('.hottag .content_btn_left').click( function  () {
    
    if ( t <= 0) {
        t = 4;
        $('.hottag .hottag_box').animate({left: -t*$('.pub_width_limt').width()+'px'},0);
        $('.hottag  .nat_tag li').eq(t).addClass('content_tag_color').siblings().removeClass('content_tag_color');
    }
    t--;
    $('.hottag .hottag_box').animate({left: -t*$('.pub_width_limt').width()+'px'},500);
    $('.hottag .nat_tag li').eq(t).addClass('content_tag_color').siblings().removeClass('content_tag_color');


});
$('.hottag .nat_tag li').click( function () {
    var index = $(this).index();
    t = index;
    $('.hottag .hottag_box').animate({left: -t*$('.pub_width_limt').width()+'px'},400);
    $('.hottag .nat_tag li').eq(t).addClass('content_tag_color').siblings().removeClass('content_tag_color');
})


// 扩展轮播
var naturesrc = {imgsrc:'nature1-@!550.jpg', titleH:'Water lily',look:'122',dianzna:'18',txsrc:'img/tx1-@!64x64.jpeg',name:'sss',timer:'2019年'};
// 获取每个属性的值，将其添加给对应的标签
var imgsrc = naturesrc.imgsrc
$('.nature .pub_content_1>a').attr('src',imgsrc)