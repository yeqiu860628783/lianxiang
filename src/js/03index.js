// 检测登录状态
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
                    //  登录成功显示
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
                            <img class="phone gowebsite" src="./img/52.png" alt="">
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
                                <img class="phone gowebsite" src="./img/52.png" alt="">
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
                                <img class="phone gowebsite" src="./img/52.png" alt="">
                            </div>
                            <i class="i1">
                                <a href="./01zhuce.html">注册立即抽好礼</a>
                                <img src="./img/68.png" style="position: absolute;right: 7px;top: 8px;">
                            </i>`
                        )
                        delCookie("userName", -1)
                        delCookie("login", -1)
                        // 点击跳转
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
                        $(".gozhuce").click(function () {
                            open("./01zhuce.html")
                        })
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
    if (t >= 430 && t <= 6160) {
        $(".ns").css("display", "block")
    } else {
        $(".ns").css("display", "none")
    }
    //楼层
    function sort(a, b, c) {
        if (t >= a && t <= b) {
            $(".ns .ns-floor-nav-box ul li:nth-of-type(" + c + ") em").css({
                "display": "block",
                "color": "#4ac0e0"
            })
            $(".ns .ns-floor-nav-box ul li:nth-of-type(" + c + ") span").css("display", "none")
        } else {
            $(".ns .ns-floor-nav-box ul li:nth-of-type(" + c + ") em").css({
                "display": "none",
                "color": "#000"
            })
            $(".ns .ns-floor-nav-box ul li:nth-of-type(" + c + ") span").css("display", "inline-block")
        }
    }
    var j = 2
    var m = 910
    for (let i = 0; i < 10; i++) {
        if (i == 0) {
            sort(570, m, 1)
        }
        j++
        sort(m, m + 633, j++)
        m += 633
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
// 时间
setInterval(() => {
    time()
}, 1000)

function time() {
    var data = new Date()
    $(".time").html(`<span>${data.getHours()}:00 </span><span>场</span></p>`)
    $(".ltime").html(`<span>00</span>:<span>${60-data.getMinutes()}</span>: <span>${60-data.getSeconds()}</span>`)
    $(".ttime").html(`<span>${data.getHours()}:00</span><i>场-</i><span>正在抢购</span>`)
    $("#jishow").html(`${data.getHours()+1}:00场-即将开始`)
}
//侧边点击
{
    $(".huidin").click(() => {
        scrollTo();
    })

    function sort2(a, b) {
        $(".ns .ns-floor-nav-box ul li:nth-of-type(" + a + ")").click(function () {
            scrollTo(`.m${b}`)
        })
    }
    var j = 0
    var k = 1
    for (let i = 0; i < 10; i++) {
        j++
        sort2(j++, k++)
    }
}






// swiper
{
    /* ========
Debugger plugin, simple demo plugin to console.log some of callbacks
======== */
    var myPlugin = {
        name: 'debugger',
        params: {
            debugger: false,
        },
        on: {
            init: function () {
                if (!this.params.debugger) return;
            },
            click: function (e) {
                if (!this.params.debugger) return;
            },
            tap: function (e) {
                if (!this.params.debugger) return;
            },
            doubleTap: function (e) {
                if (!this.params.debugger) return;
            },
            sliderMove: function (e) {
                if (!this.params.debugger) return;
            },
            slideChange: function () {
                if (!this.params.debugger) return;
            },
            slideChangeTransitionStart: function () {
                if (!this.params.debugger) return;
            },
            slideChangeTransitionEnd: function () {
                if (!this.params.debugger) return;
            },
            transitionStart: function () {
                if (!this.params.debugger) return;
            },
            transitionEnd: function () {
                if (!this.params.debugger) return;
            },
            fromEdge: function () {
                if (!this.params.debugger) return;
            },
            reachBeginning: function () {
                if (!this.params.debugger) return;
            },
            reachEnd: function () {
                if (!this.params.debugger) return;
            },
        },
    };

    // Install Plugin To Swiper
    Swiper.use(myPlugin);

    // Init Swiper
    var mySwiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Enable debugger
        debugger: true,
        autoplay: {
            disableOnInteraction: false,
        },
        loop: true,
        preventLinksPropagation: true
    });
    //鼠标覆盖停止自动切换
    mySwiper.el.onmouseover = function () {
        mySwiper.autoplay.stop();
        mySwiper.navigation.$nextEl.removeClass('hide');
        mySwiper.navigation.$prevEl.removeClass('hide');
    }

    //鼠标离开开始自动切换
    mySwiper.el.onmouseout = function () {
        mySwiper.autoplay.start();
        mySwiper.navigation.$nextEl.addClass('hide');
        mySwiper.navigation.$prevEl.addClass('hide');
    }

    $(document).ready(function () {
        //此方法为模拟的，hover到分页器的小圆点后自动触发其本身的click事件
        $(".swiper-pagination-bullet").hover(function () {
            $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
        }, function () {
            mySwiper.autoplay.start(); //鼠标移出之后，自动轮播开启
        })
    })
}

$(".logo").click(function () {
    location.href = "./03index.html"
})
$(".phone").click(function () {
    location.href = "./07website.html"
})