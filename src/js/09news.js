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
    $(window).scroll(function () {
        nav()
    })
})
//滚动条
function nav() {
    //头部移动
    if ($("html").scrollTop() >= 50) {
        $("nav").css({
            "height": "50px",
            "position": "fixed",
            "top": "0",
            "margin": "0 auto 20px",
            "transition": "all .2s"
        })
        $("nav h1").css("top", "0")
        $("nav .load").css("display", "none")
        $(".icon-word").css("lineHeight", "50px")
    } else {
        $("nav").css({
            "height": "72px",
            "position": "relative",
            "margin": "0 auto"
        })
        $("nav h1").css("top", "-50px")
        $(".icon-word").css("lineHeight", "70px")
        $("nav .load").css("display", "block")
    }

    // 回顶显示隐藏
    {
        if($("html").scrollTop() >= 975){
            $(".goTop").css({
                "position":"absolute",
                "bottom": "445px"
            })
        }else{
            $(".goTop").css({
                "position": "fixed",
                "bottom": "20px"
            })
        }
        if ($("html").scrollTop() >= 120){
            $(".goTop").fadeIn("slow", "linear")
        }else{
            $(".goTop").fadeOut("slow", "linear")
        }
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
$(".goTop").click(() => {
    scrollTo();
})
$.get("./php/getnew.php", function (data) {
    var obj = JSON.parse(data)
    var ar1 = []
    obj.forEach(function (item) {
        ar1.push({
            img: item.img,
            tit: item.tit,
            time: item.time,
            see: item.see,
        })
    })
    var obj = {
        pagenum: 1,
        pagesize: 12,
        total: ar1.length,
        totalpage: Math.ceil(ar1.length / 12)
    }
    var pagin = document.querySelector(".page-box>ul")
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
                    <li class="item-url gowebsite">
                        <div class="img-wrap"><img src="${item.img}"></div>
                        <div class="info-wrap">
                            <p class="title">${item.tit}</p>
                            <div class="bottom-line">
                                <p class="left">${item.time}</p>
                                <p class="right">
                                    <span class="view look-over">
                                        <img class="bg-view" src="./img2/n7.png" alt="">
                                        <em>${item.see}</em>
                                        <span class="btn-share share">
                                            <img src="./img2/n4.png" alt="">
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                `
            })
            var listBox = document.querySelector("#list-box")
            listBox.innerHTML = str
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
        }
    })
})
