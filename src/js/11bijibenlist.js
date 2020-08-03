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
    //楼层绑定划入
    for (let i = 1; i <= 19; i++) {
        $(".ns .ns-floor-nav-box ul li:nth-of-type(" + i + ")").hover(function () {
            $(".ns-floor-nav-box ul li:nth-of-type(" + i + ") a em").css("display", "block")
            $(".ns-floor-nav-box ul li:nth-of-type(" + i + ") a span").css("display", "none")
        }, function () {
            $(".ns-floor-nav-box ul li:nth-of-type(" + i + ") a em").css("display", "none")
            $(".ns-floor-nav-box ul li:nth-of-type(" + i + ") a span").css("display", "inline-block")
        })
    }
    //banner-tab卡
    $(".list_name").hover(function () {
        $(this).next().css("display", "block")
    }, function () {
        $(this).next().css("display", "none")
    })
    $(".list_mian").hover(function () {
        $(this).css("display", "block")
    }, function () {
        $(this).css("display", "none")
    })
})
//头部移动
function nav() {
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
}
//侧边
$(".huidin").click(() => {
    scrollTo();
})
$.get("./php/getbijibenlist.php", function (data) {
    var obj = JSON.parse(data)
    var ar1 = []
    obj.forEach(function (item) {
        ar1.push({
            img: item.img,
            tit: item.tit,
            search: item.search,
            price: item.price,
            id:item.id
        })
    })
    var obj = {
        pagenum: 1,
        pagesize: 24,
        total: ar1.length,
        totalpage: Math.ceil(ar1.length / 24)
    }
    var pagin = document.querySelector(".pagination")
    new Pagination(pagin, {
        pageInfo: obj,
        textInfo: {
            first: "首页",
            prev: "",
            next: "",
            last: "尾页"
        },
        change(num) {
            var data = ar1.slice((num - 1) * obj.pagesize, num * obj.pagesize)
            var str = ""
            data.forEach(function (item) {
                str += `
                      <li>
                            <a class="imgA" href="./05details.html?id=${item.id}">
                                <img src="${item.img}" alt="">
                            </a>
                            <div class="lebalDiv">
                                <i></i>
                                <span>赠品</span>
                            </div>
                            <div class="search_name">
                                <a href="./05details.html?id=${item.id}" target="_blank">${item.tit}</a>
                            </div>
                            <div class="search_mes">
                                <a href="./05details.html?id=${item.id}">${item.search}</a>
                            </div>
                            <div class="search_price">${item.price}</div>
                            <a class="duibi" href="./05details.html?id=${item.id}">
                                <input type="checkbox">
                                <span>对比</span>
                            </a>
                        </li>
                `
            })
            var listBox = document.querySelector(".productDatailUl")
            listBox.innerHTML = str
        }
    })
})
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
