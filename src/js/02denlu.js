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
                    console.log(1)
                    // 自动登录
                    if (getCookie("login") != "" && getCookie("login") != undefined) {
                        var t = getCookie("login")
                        if (t == "1") {
                            // location.href = "03index.html";
                        }
                    }
                }
            }
        })
    }
    
    // 登录
    $(".submit").click(function () {
        $.post(
            "./php/login.php", {
                "username": $("#userName").val(),
                "userpass": $("#passWord").val()
            },
            function (data) {
                if (data == "success") {
                    //删除cook
                    delCookie("userName", "", -1);
                    //添加cook
                    setCookie("userName", $("#userName").val(), "700000")
                    // 是否自动登录
                    if (document.getElementById("ps").checked) {
                        setCookie("login", 1, "700000")
                    }
                    location.href = "03index.html";
                } else if (data == "fail") {
                    alert("登录失败，账号或密码错误")
                } else {
                    alert("不好意思，亲，服务器出错了！")
                }
            }
        );
    });
})
$(".logo").click(function () {
    location.href = "./03index.html"
})
$(".phone").click(function () {
    location.href = "./07website.html"
})