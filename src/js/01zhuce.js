//账号框失焦验证
$(".userName").on("blur", function () {
    em()
    if (isUser() == true) {
        $.ajax({
            context: $(".p"),
            url: "./php/checkUser.php",
            data: {
                "username": this.value
            },
            beforeSend: () => {
                $(".wait1").css({
                    "display": "block"
                });
            },
            success: (str) => {
                var t = str.indexOf(this.value)
                if (t >= "0") {
                    $(".p").html("x,已有用户抢先注册")
                } else if (t == "-1") {
                    $(".p").html("亲，趁着还没人用，赶紧注册！")
                } else {
                    $(".p").html("服务器出错了")
                }
                em()
            },
            complete: () => {
                $(".wait1").css({
                    "display": "none"
                });
                
            }
        })
    }else{
        $(".p").html("")
        em()
    }
})
//验证账号是否正确
function isUser() {
    // 数字，字母，下划线组成，不能以数字开头，6-16位
    var reg = /^[_a-zA-Z]\w{5,15}$/;
    if (reg.test($(".userName").val())) {
        $(".s1").html("√")
        return true;
    } else {
        $(".s1").html("×,不能以数字开头且6-16位")
        return false;
    }
}
//密码框失焦验证
$(".passWord").on("blur", function () {
    isPass();
})
//验证密码是否正确
function isPass() {
    //2-20位数字和字母
    var reg = /^[\da-zA-Z]{2,20}$/;
    if (reg.test($(".passWord").val())) {
        $('.s2').html("√")
        return true;
    } else {
        $('.s2').html("×，2-20位数字和字母")
        return false;
    }
}
//重复密码框失焦验证
$(".pass2").on("blur", function () {
    isPass2()
})
//验证重复密码是否正确
function isPass2() {
    if ($(".pass2").val() == $(".passWord").val()) {
        $('.s3').html("√")
        return true;
    } else {
        $('.s3').html("×,密码与上一次不符")
        return false;
    }
}
//密码强度验证
$(".passWord").keyup(function () {
    if (isPass()) {
        $(".qiangdu").css("display", "block")

        var regNum = /^\d{6,16}$/; //纯粹的数字
        var regLetter = /^[a-zA-Z]{6,16}$/; //纯粹的字母
        var regNumAndLetter = /^[0-9a-zA-Z]{6,16}$/; //6-16位的数字或者字母都行； 16个字母。

        if (regNum.test(this.value) || regLetter.test(this.value)) {
            $(".qiangdu").css("display", "block").html("中")
        } else if (regNumAndLetter.test(this.value)) {
            $(".qiangdu").css({
                "display": "block",
                "backgroundColor": "#fd7f2b",
            }).html("强")
        }
    } else {
        $(".qiangdu").css("display", "none")
    }
})
//注册验证
$(".reg_button").click(function (event) {
    if ($("#username").val() == "" || $("#userpass").val() == "") {
        alert(" 亲,你什么都还没有输入呢");
        return
    }
    if (isUser() && isPass() && isPass2()) {
        $.ajax({
            url: "./php/addUser.php",
            type: "POST",
            data: {
                "username": $(".userName").val(),
                "userpass": $(".passWord").val()
            },
            beforeSend: () => {
                $(".wait").css({
                    "display": "block"
                });
            },
            success: function (str) {
                if (str == "success") { //注册成功
                    alert("恭喜用户注册成功")
                    location.href = "02denlu.html";
                } else if (str == "fail") {
                    alert("不好意思，注册失败，请重新注册");
                }
            },
            complete: () => {
                $(".wait").css({
                    "display": "none"
                });
            }
        })
    }else{
        let e = event || window.event
        alert("输入不正确，注册不成功，请重新注册")
        e.preventDefault()
    }
})
//小细节
{
//密码可见
$("#em").click(function () {
    $(".passWord").attr("type", "text")
    $("#em").css("display", "none")
    $("#em1").css("display", "inline-block")
})
//密码隐藏
$("#em1").click(function () {
    $(".passWord").attr("type", "password")
    $("#em").css("display", "inline-block")
    $("#em1").css("display", "none")
})
//账号框点击清空
$(".userName").on('focus', function () {
    $(".s1").html('')
})
//密码框点击清空
$(".passWord").on("focus", function () {
    $('.s2').html("")
    $('.qiangdu').css("display", "none")
})
//账号框删除点击清空
$(".i1").on('click', function () {
    $(".userName").val('')
    isUser()
})
//密码框删除点击清空
$(".i2").on("click", function () {
    $(".pass1").val('')
    isPass()
})
//重复密码框删除点击清空
$(".i3").on("click", function () {
    $(".pass2").val('')
    isPass()
})
$(".logo").click(function(){
    location.href = "./03index.html"
})
$(".phone").click(function(){
    location.href = "./07website.html"
})
}
function em(){
    if ($(".p").html() == "") {
        $("em").css("top", "79px")
    } else {
        $("em").css("top", "99px")
    }
}
