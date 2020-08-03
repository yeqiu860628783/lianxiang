// 购物车
$(function () {
    if (window.localStorage.length) {
         // 渲染
        $.get("./php/getbijibenlist.php", function (data) {
            var obj = JSON.parse(data)
            // localStorage获得商品
            var str = "{"
            for (let i = 0; i < obj.length; i++) {
                let cat = localStorage.getItem(`id${i}`)
                if (cat != null) {
                    str += `"id${i}":"${cat}",`
                }
            }
            str = str.slice(0, str.length - 1)
            str += "}"
            var shangp = JSON.parse(str)

            // 循环要买的商品渲染
            var main
            var strmain = ""
            for (let key in shangp) {
                main = obj[key.split("id")[1] - 1]
                var price = main.price.split("￥")[1]
                strmain += `
                    <tr>
                        <td width="57" class="tab-sel"><input type="checkbox" name="" class="xuan"></td>
                        <td width="148" class="tab-img"><a href="#"><img src="${main.img}" alt=""></a></td>
                        <td width="257" class="tab-name">
                            <a>${main.tit}</a>
                            <div class="bc_service">
                                <a href="javascript:;">
                                    <img src="./img2/5.jpg" alt="">
                                    购买联想服务
                                </a>
                            </div>
                        </td>
                        <td width="163"></td>
                        <td width="153" class="tab-price">
                            ${price}
                        </td>
                        <td width="152" class="tab-jj">
                            <label class="clear-fix">
                                <input class="pro_jian" value="-" type="button" name="">
                                <input class="pro_num" value="${shangp[key]}" type="text" name="${key}">
                                <input class="pro_add" value="+" type="button" name="">
                            </label>
                        </td>
                        <td width="152" class="tab-xiaoji">${price*shangp[key]}</td>
                        <td width="117" class="tab-caozuo">
                            <a class="tab-remove" href="javascript:;">删除</a><br>
                            <a href="javascript:;">移入收藏夹</a>
                        </td>
                    </tr>
                `
            }
            $(".goodslist").html(strmain)
            // 数量框修改
            $(".pro_num").change(function () {
                //当前输入框中的值不能小于1
                if ($(this).val() < 1) {
                    $(this).val(1)
                } else if (isNaN(parseInt($(this).val()))) {
                    $(this).val(1)
                } else {
                    $(this).val(parseInt($(this).val()))
                }
                // 赋值给localStorage
                localStorage.setItem($(this).attr("name"), $(this).val());
                //给小计赋值
                $(this).parent().parent().next().html((parseInt($(this).val()) * parseFloat($(this).parent().parent().prev().html())).toFixed(2))
            })
        })
        //单选
        function danxuan() {
            if ($(".xuan:checked").length == $(".xuan").length) {
                $(".quanxuan")[0].checked = true
                $(".quanxuan1")[0].checked = true
            } else {
                $(".quanxuan")[0].checked = false
                $(".quanxuan1")[0].checked = false
            }
            if ($(".xuan:checked").length == 0) {
                $(".quanxuan")[0].checked = false
                $(".quanxuan1")[0].checked = false
            }
        }
        //总计
        function total() {
            //总价
            var sum = 0
            //遍历出所有的数据
            for (var i = 0; i < $(".xuan").length; i++) {
                //判断当前对象是否被选中
                if ($(".xuan")[i].checked) {
                    //获取当前商品的小计
                    var price = $(".xuan")[i].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML
                    sum += parseFloat(price)
                }
            }
            //把计算结果赋值给总计位置
            $(".zojia").html("商品总价 : " + sum.toFixed(2))
            $("#totalmoneyf").html(sum.toFixed(2))
        }
        //大盒子绑定
        $("main").click(function (e) {
            var e = e || window.event
            var tag = e.target || e.srcElement
            // 全选
            if ($(tag).attr("class") == "quanxuan") {
                for (var i in $(".xuan")) {
                    if (tag.checked) {
                        $(".xuan")[i].checked = true
                        $(".quanxuan")[0].checked = true
                        $(".quanxuan1")[0].checked = true
                    } else {
                        $(".xuan")[i].checked = false
                        $(".quanxuan")[0].checked = false
                        $(".quanxuan1")[0].checked = false
                    }
                }
                if ($(".xuan").length == 0) {
                    $(".quanxuan")[0].checked = false
                    $(".quanxuan1")[0].checked = false
                }
            }
            // 全选1
            if ($(tag).attr("class") == "quanxuan1") {
                for (var i in $(".xuan")) {
                    if (tag.checked) {
                        $(".xuan")[i].checked = true
                        $(".quanxuan")[0].checked = true
                        $(".quanxuan1")[0].checked = true
                    } else {
                        $(".xuan")[i].checked = false
                        $(".quanxuan")[0].checked = false
                        $(".quanxuan1")[0].checked = false
                    }
                }
                if ($(".xuan").length == 0) {
                    $(".quanxuan")[0].checked = false
                    $(".quanxuan1")[0].checked = false
                }
            }
            //单选框
            if ($(tag).attr("class") == 'xuan') {
                danxuan()
            }
            //全删
            if ($(tag).attr("class") == 'bc_num_del') {
                //遍历所有商品
                if ($(".xuan:checked").length == 0) {
                    confirm("亲，你还没选择要删除的商品")
                } else {
                    let t = confirm("亲，确定要删除选中的全部宝贝吗？")
                    if (t) {
                        for (var i = $(".xuan").length - 1; i >= 0; i--) {
                            //判断当前商品是否被选中
                            if ($(".xuan")[i].checked) {
                                // 删除localStorage
                                localStorage.removeItem($($(".xuan")[i]).parent().next().next().next().next().next().children().children().eq(1).attr("name"));
                                //获取要删除的商品
                                $(".xuan")[i].parentNode.parentNode.remove()
                            }
                        }
                    }
                    danxuan()
                }
                if (window.localStorage.length == 0) {
                    alert("亲，你购物车没有东西了,3秒后跳转至商品页")
                    setTimeout(function(){
                        location.href = "11bijibenlist.html"
                    },3000)
                }
            }
            //删除一行
            if ($(tag).attr("class") == 'tab-remove') {
                //获取当前这个商品
                let t = confirm("亲，确定要删除当前宝贝？")
                if (t) {
                    // 删除localStorage
                    localStorage.removeItem($(tag).parent().prev().prev().children().children().eq(1).attr("name"));
                    // 删除当前列
                    tag.parentNode.parentNode.remove()
                }
                if (window.localStorage.length == 0) {
                    alert("亲，你购物车没有东西了,3秒后跳转至商品页")
                    setTimeout(function () {
                        location.href = "11bijibenlist.html"
                    }, 3000)
                }
            }
            //添加数量
            if ($(tag).val() == '+') {
                //获取当前对象前一个节点
                var val = $(tag).prev().val()
                val++
                //重新把计算结果赋值给输入框对象
                $(tag).prev().val(val)
                // 赋值给localStorage
                localStorage.setItem($(tag).prev().attr("name"), val);
                //获取单价
                var price = $(tag).parent().parent().prev().html() - 0
                //计算小计
                var num = parseInt(val) * parseFloat(price)
                //把小计赋值
                $(tag).parent().parent().next().html(num.toFixed(2))
            }
            //减少数量
            if ($(tag).val() == '-') {
                //获取当前对象前一个节点
                var val = $(tag).next().val()
                if (val <= 1) {
                    val = 1
                } else {
                    val--
                }
                //重新把计算结果赋值给输入框对象
                $(tag).next().val(val)
                // 赋值给localStorage
                localStorage.setItem($(tag).next().attr("name"), val);
                //获取单价
                var price = $(tag).parent().parent().prev().html() - 0
                //计算小计
                var num = parseInt(val) * parseFloat(price)
                //把小计赋值
                $(tag).parent().parent().next().html(num.toFixed(2))
            }
            //结算
            if ($(tag).attr("class") == 'jiesuan') {
                //获取总价
                var totalPrice = $("#totalmoneyf").html()
                // 判断总价是否为0
                if (parseInt(totalPrice) <= '0') {
                    alert("你还没有选择商品，请选择后购买")
                } else {
                    //遍历所有商品
                    var str =""
                    for (var i = $(".xuan").length - 1; i >= 0; i--) {
                        //判断当前商品是否被选中
                        if ($(".xuan")[i].checked) {
                            //获取要删除的商品
                            var goods = $(".xuan")[i].parentNode.parentNode
                            str += $(goods).children().eq(5).children().children().eq(1).attr("name")+"&"
                        }
                    }
                    //跳转结算
                    location.href = "10buy.html?"+str
                }
                danxuan()
            }
            total()
        })
        total()
    } else {
        alert("亲，你还没有添加任何商品")
        location.href = "11bijibenlist.html"
    }
})
// 登录状态
$(function () {
    //获取cookie
    var login1 = getCookie('userName')
    //登录成功
    if (login1 != "" && login1 != undefined) {
        $.ajax({
            url: "./php/checkUser.php",
            data: {
                "username": getCookie("userName")
            },
            success: (str) => {
                var t = str.indexOf(getCookie("userName"))
                if (t >= "0") {
                    // 登录显示
                    $(".top").html(
                        `<ul>
                            <li><a href="./03index.html">返回首页</a></li>
                            <li class="yhu">
                                <a href="javascript:;">${getCookie("userName")}
                                    <ul class="tuichu">
                                        <li><button class="tdenlu">退出登录</button></li>
                                        <li><button class="tzido">清除自动登录</button></li>
                                    </ul>
                                </a>
                            </li>
                            <li><a href="#">我的订单</a></li>
                        </ul>`
                    )
                    // 退出登录
                    $(".tdenlu").click(function () {
                        $(".top").html(
                            `<ul>
                                <li><a href="./03index.html">返回首页</a></li>
                                <li><a href="./02denlu.html">登录</a></li>
                            </ul>`
                        )
                        delCookie("userName", -1)
                    })
                    // 退出自动登录
                    $(".tzido").click(function () {
                        $(".top").html(
                            `<ul>
                                <li><a href="./03index.html">返回首页</a></li>
                                <li><a href="./02denlu.html">登录</a></li>
                            </ul>`
                        )
                        delCookie("userName", -1)
                        delCookie("login", -1)
                    })
                }
            }
        })
    } else {
        alert('您还没有登录，请登录之后再查看购物车')
        location.href = "./03index.html"
    }

    // 为您推荐左右移动
    $("#item_prev .btn_bg").click(function () {
        var num = $("#item_hot ul li").index($('.show'))
        $("#item_hot ul li").attr("class", "")
        $("#item_hot ul li").eq(num < 0 ? num + 8 : num - 4).attr("class", "show")
        $("#item_hot ul li").eq(num < 0 ? num + 9 : num - 3).attr("class", "show")
        $("#item_hot ul li").eq(num < 0 ? num + 10 : num - 2).attr("class", "show")
        $("#item_hot ul li").eq(num < 0 ? num + 11 : num - 1).attr("class", "show")

    })
    $("#item_next .btn_bg").click(function () {
        var num = $("#item_hot ul li").index($('.show'))
        $("#item_hot ul li").attr("class", "")
        $("#item_hot ul li").eq(num >= 8 ? num - 8 : num + 4).attr("class", "show")
        $("#item_hot ul li").eq(num >= 8 ? num - 7 : num + 5).attr("class", "show")
        $("#item_hot ul li").eq(num >= 8 ? num - 6 : num + 6).attr("class", "show")
        $("#item_hot ul li").eq(num >= 8 ? num - 5 : num + 7).attr("class", "show")
    })

})