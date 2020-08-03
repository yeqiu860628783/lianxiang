// 登录状态
$(function () {
    if (getCookie("userName") != "" && getCookie("userName") != undefined) {
        $.ajax({
            url: "./php/checkUser.php",
            data: {
                "username": getCookie("userName")
            },
            success: (str) => {
                var t = str.indexOf(getCookie("userName"))
                if (t >= "0") {
                    // 登录显示
                    $(".load").html(
                        `<div class="tso">
                        <img src="./img/67.png" alt="">
                    </div>
                    <a href="javascript:;" class="yhu">
                        ${getCookie("userName")}<span></span>
                        <ul class="tuichu">
                            <li><button class="tdenlu">退出登录</button></li>
                            <li><button class="tzido">清除自动登录</button></li>
                        </ul>
                        <img class="zuanshi" src="./img/65.png" alt="">
                    </a>
                    <a href="./06shopcar.html">
                        <img class="gwcpt" src="./img/26.png" alt="">
                    </a>
                    <div>
                        <img src="./img/52.png" alt="">
                    </div>`
                    )
                    // 退出登录
                    $(".tdenlu").click(function () {
                        $(".load").html(
                            `<div class="tso">
                            <img src="./img/67.png" alt="">
                        </div>
                        <a href="./01zhuce.html">注册</a>
                        <i></i>
                        <a href="./02denlu.html">登录</a>
                        <div>
                            <img src="./img/52.png" alt="">
                        </div>
                        <i class="i1">
                            <a href="./01zhuce.html">注册送688元大礼包</a>
                            <img src="./img/68.png" style="position: absolute;right: 7px;top: 8px;">
                        </i>`
                        )
                        delCookie("userName", -1)
                    })
                    // 退出自动登录
                    $(".tzido").click(function () {
                        $(".load").html(
                            `<div class="tso">
                        <img src="./img/67.png" alt="">
                        </div>
                        <a href="./01zhuce.html">注册</a>
                        <i></i>
                        <a href="./02denlu.html">登录</a>
                        <div>
                            <img src="./img/52.png" alt="">
                        </div>
                        <i class="i1">
                            <a href="./01zhuce.html">注册立即抽好礼</a>
                            <img src="./img/68.png" style="position: absolute;right: 7px;top: 8px;">
                        </i>`
                        )
                        delCookie("userName", -1)
                        delCookie("login", -1)
                    })
                }
            }
        })
    }
    //头部移动
    nav()
    lou()
    $(window).scroll(function () {
        nav()
        lou()
    })
    //侧边
    $(".huidin").click(function () {
        scrollTo();
    })
})
//头部移动
function nav() {
    //header
    if ($("html").scrollTop() >= 50) {
        $("nav").css({
            "height": "50px",
            "position": "fixed",
            "top": "0",
            "margin": "0 auto 20px",
            "transition": "all .2s"
        })
        $("nav h1").css("top", "0")
        $(".nav_warp ul li").css("lineHeight", "50px")
        $("nav .load").css("top", "0")
        $("nav .load .tso").css("display", "block")
        $(".nav_warp .search").css("display", "none")
        $("nav .load span").css("left", "54px")
        $("nav .load .tuichu").css({
            "right": "65px",
            "background": "#e0e0e0"
        })
    } else {
        $("nav").css({
            "height": "72px",
            "position": "relative",
            "margin": "0 auto"
        })
        $("nav h1").css("top", "-50px")
        $(".nav_warp ul li").css("lineHeight", "70px")
        $("nav .load").css("top", "-50px")
        $("nav .load .tso").css("display", "none")
        $(".nav_warp .search").css("display", "block")
        $("nav .load span").css("left", "-13px")
        $("nav .load .tuichu").css({
            "right": "77px",
            "background": "#fff"
        })
    }
    //放大镜
    if ($("html").scrollTop() >= 50 && $("html").scrollTop()<=273) {
        $(".con-fl").css({
            "top": $("html").scrollTop(),
        })
    } 
    if ($("html").scrollTop() <= 50) {
       $(".con-fl").css("top",0)
    }
    if ($("html").scrollTop() >= 273) {
       $(".con-fl").css("top",273)
    }
    //nav
    if ($("html").scrollTop()>=1370){
        $(".detail-all-tab-container").css({
            "position": "fixed",
            "top": "50px",
            "zIndex":"9999",
        })
        $(".info-box").css("margin-top","58px")
    }else{
        $(".detail-all-tab-container").css({
            "position": "static"
        })
        $(".info-box").css("margin-top", "0px")
    }
}
//楼层移动
function lou() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t >= 120) {
        $(".sort").css("display", "block")
    } else {
        $(".sort").css("display", "none")
    }
}
//到指定位置
function scrollTo(ele, speed) {
    if (!speed) speed = 300;
    if (!ele) {
        $("html,body").animate({
            scrollTop: 0
        }, speed);
    } else {
        if (ele.length > 0) $("html,body").animate({
            scrollTop: $(ele).offset().top - 60
        }, speed);
    }
    return false;
};
//小细节
{
    $("#guigeitem2 span").hover(function () {
        $(this).addClass("spanhov")
    },function(){
        $(this).removeClass("spanhov")
    })
    $("#guigeitem2 span").click(function(){
        $("#guigeitem2 span").removeClass("spanche")
        $(this).addClass("spanche")
    })
    $(".serviceBox .item").click(function () {
        if ($(this).hasClass("itemred")) {
            $(this).removeClass("itemred")
        }else{
            $(this).addClass("itemred")
        }
    })
    $(".add-count-wrap .reduce").click(function(){
        if ($(this).next().val()>1){
            $(this).next().val() == $(this).next().val($(this).next().val() - 1)
        }else{
            return
        }
    })
    $(".add-count-wrap .add").click(function () {
        $(this).prev().val() == $(this).prev().val($(this).prev().val()-0 + 1)
    })
    
    $(".detail-tab-wrap li").click(function () {
        $(".detail-tab-wrap li").removeClass("checked")
        $(this).addClass("checked")
    })
    
    $(".detail-tab-wrap li").eq(0).click(function(){
        $(".info-box").css("display", "block")
        $(".info-box2").css("display", "none")
        $(".info-box3").css("display", "none")
        $(".info-box4").css("display", "none")
        $("html").scrollTop(960)
    })
    $(".detail-tab-wrap li").eq(1).click(function(){
        $(".info-box").css("display", "none")
        $(".info-box2").css("display", "block")
        $(".info-box3").css("display", "none")
        $(".info-box4").css("display", "none")
        $("html").scrollTop(960)
    })
    $(".detail-tab-wrap li").eq(2).click(function(){
        $(".info-box").css("display", "none")
        $(".info-box2").css("display", "none")
        $(".info-box3").css("display", "block")
        $(".info-box4").css("display", "none")
        $("html").scrollTop(960)
    })
    $(".detail-tab-wrap li").eq(3).click(function(){
        $(".info-box").css("display", "none")
        $(".info-box2").css("display", "none")
        $(".info-box3").css("display", "none")
        $(".info-box4").css("display", "block")
        $("html").scrollTop(960)
    })
};
//获取最大盒子对象
var div = document.querySelector('.con-fl')
new FangDaJin(div)
//放大镜处左右移动
{
    $(".play-left").click(function () {
        $(".list").animate({
            left: '8px'
        }, "slow").css("overflow", "initial")
        $(".play-left").css({
            "pointer-events": "none",
            "opacity": ".3"
        })
        $(".play-right").css({
            "pointer-events": "all",
            "opacity": "1"
        })
    })
    $(".play-right").click(function () {
        $(".list").animate({
            left: '-502px'
        }, "slow").css("overflow", "initial")
        $(".play-left").css({
            "pointer-events": "all",
            "opacity": "1"
        })
        $(".play-right").css({
            "pointer-events": "none",
            "opacity": ".3"
        })
    })
};
// 看了又看左右移动
{
    $(".swiper-button-prev").click(function () {
        $(".image-wrap").animate({
            left: '0px'
        }, "slow").css("overflow", "initial")
        $(".swiper-button-prev").css("pointer-events", "none")
        $(".swiper-button-next").css("pointer-events", "all")
    })
    $(".swiper-button-next").click(function () {
        $(".image-wrap").animate({
            left: '-1209px'
        }, "slow").css("overflow", "initial")
        $(".swiper-button-prev").css("pointer-events", "all")
        $(".swiper-button-next").css("pointer-events", "none")
    })
};
// 点击跳转
$(function () {
    $(".goindex").click(function () {
        open("./03index.html")
    })
    $(".goshoplist").click(function () {
        open("./04shoplist.html")
    })
    $(".goshopcar").click(function () {
        open("./06shopcar.html")
    })
    $(".gowebsite").click(function () {
        open("./07website.html")
    })
    $(".gogenduo").click(function () {
        open("./08genduo.html")
    })
    $(".gonews").click(function () {
        open("./09news.html")
    })
   
})
// 商品渲染
$(function(){
    var id1 = parseFloat(location.href.split("=")[1])
    $.get("./php/getbijibenlist.php", function (data) {
        var obj = JSON.parse(data)
        var main = obj[id1-1]
        console.log(main)
        $(".xnav").html(`
            <div class="xnav_warp">
                <a href="./03index.html">首页 </a>
                > 商品详情 > ${main.tit}
                <a href="./07website.html">
                    <div>
                        <span>联系客服</span>
                        <img src="./img/lianxikef.png" alt="">
                    </div>
                </a>
            </div>
        `)
        $(".con-fr-tit").html(main.tit)
        $(".con-fr-search").html(main.tit)
        $(".price-show").html(main.price)
        $(".detail-tab-title").html(main.tit)
        $(".lijigomai").click(function (){
            if (localStorage.getItem(`id${main.id}`)){
                localStorage.setItem(`id${main.id}`, parseInt(localStorage.getItem(`id${main.id}`))+parseInt($(".txt").val()));
            }else{
                localStorage.setItem(`id${main.id}`, $(".txt").val());
            }
            location.href = `06shopcar.html?id=${main.id}`
        })
    })
})
