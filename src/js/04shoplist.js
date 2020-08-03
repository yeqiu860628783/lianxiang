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
                    //  登录显示
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
                        <a href="../06shopcar.html">
                            <img class="gwcpt" src="./img/26.png" alt="">
                        </a>
                        <div>
                            <img src="./img/52.png" alt="">
                        </div>`
                    )
                    //  退出登录
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
                                <a href="./01zhuce.html">注册立即抽好礼</a>
                                <img src="./img/68.png" style="position: absolute;right: 7px;top: 8px;">
                            </i>`
                        )
                        delCookie("userName", -1)
                    })
                    //  退出自动登录
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