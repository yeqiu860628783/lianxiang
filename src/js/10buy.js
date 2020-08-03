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
                    // 登录成功
                    $(".userinfo").html(
                        `<a href="./03index.html"><span class="toIndex">返回首页</span></a>|
                        <a href="javascript:;"><span class="username">${getCookie("userName")}</span></a>|
                        <a href="./06shopcar.html"><span class="order">我的订单</span></a>|
                        <span class="logout">退出</span>
                    `
                    )
                    // 退出
                    $(".logout").click(function () {
                        location.href = "./03index.html"
                    })
                }
            }
        })
    }else{
        alert("亲，你还未登录")
        location.href = "./03index.html"
    }
})
$(function () {
    // 点击跳转
    $(".goindex").click(function () {
        open("./03index.html")
    })
    $(".goshoplist").click(function () {
        open("./04shoplist.html")
    })
    $(".goshopcar").click(function () {
        location.href = "./06shopcar.html"
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
if (window.localStorage.length) {
    // 显示隐藏
    $(function () {
        // 点击地址显示
        $(".closeDialogBtn").on("click", function () {
            $(".mask").hide();
            $(".dialog").hide();
        });
        // 点击地址关闭
        $(".cancel").on("click", function () {
            $(".mask").hide();
            $(".dialog").hide();
        });
        // 点击地址关闭
        $(".closeSelect").on("click", function () {
            $(".address_select").hide()
        })

        function blu(a) {
            $(a).blur(function () {
                if ($(a).val() != "") {
                    $(a).next().addClass("notnone")
                } else {
                    $(a).next().removeClass("notnone")
                }
            })
        }
        // 失焦样式
        blu(".address_name")
        blu(".address_phone")
        blu(".address_detailed_Address")
        // 保存地址
        $(".confirm").on("click", function () {
            // 地址输入
            if ($(".address_name").val() != "" && $(".address_phone").val() != "" && $(".address_detailed_Address").val() != "" && $(".zzz").html() != "选择省份/自治区") {
                // 渲染新地址
                $(".dizhi_main").prepend(`
                    <li class = "selected addAddress dizhi1">
                        <p class="customerName">${$(".address_name").val()}</p>
                        <p class="phoneNum">${$(".address_phone").val()}</p>
                        <p class="addressInfo">${$(".address_select_provate").text()+$(".address_detailed_Address").val()}</p>
                        <a class="delAddress fr"> 删除</a><a class="editAddress fr" style="margin-right:4px;"
                            latag="latag_pc_ordersubmit_address">修改</a>
                    </li>
                `)
                // 隐藏
                $(".mask").hide();
                $(".dialog").hide();
            } else {
                alert("其中输入有误或未填写")
            }
        })


    })
    // 地址
    $(function () {
        function address(json) {
            // name
            $(".areaContent").html("")
            json.forEach(item => {
                $(".areaContent").append(`<li class="address_add_layerListItem">${item.name}</li>`);
                $(".address_add_layerListItem").click(function () {
                    if (item.name == $(this).html()) {
                        // city
                        $(".address_select_provate .sss").html($(this).html())

                        $(".areaContent").html("")
                        item.city.forEach(item1 => {
                            $(".areaContent").append(`<li class="address_add_layerListItem city1">${item1.name}</li>`);
                            $(".city1").click(function () {
                                $(".address_select_provate .ccc").html($(this).html())

                                if (item1.name == $(this).html()) {
                                    // area
                                    $(".areaContent").html("")
                                    item1.area.forEach(item2 => {
                                        $(".areaContent").append(`<li class="address_add_layerListItem area1">${item2}</li>`);
                                        $(".area1").click(function () {
                                            $(".address_select_provate .zzz").html($(this).html())
                                            $(".selectTitle").html($(".address_select_provate").text())
                                            $(".address_select").hide()
                                        })
                                    });
                                }
                            })
                        });
                        $(".address_select_provate .ccc").click(function () {
                            $(".areaContent").html("")
                            item.city.forEach(item1 => {
                                $(".areaContent").append(`<li class="address_add_layerListItem city1">${item1.name}</li>`);
                                $(".city1").click(function () {
                                    $(".address_select_provate .ccc").html($(this).html())

                                    if (item1.name == $(this).html()) {
                                        // area
                                        $(".areaContent").html("")
                                        item1.area.forEach(item2 => {
                                            $(".areaContent").append(`<li class="address_add_layerListItem area1">${item2}</li>`);
                                            $(".area1").click(function () {
                                                $(".address_select_provate .zzz").html($(this).html())
                                                $(".selectTitle").html($(".address_select_provate").text())
                                                $(".address_select").hide()
                                            })
                                        });
                                    }
                                })
                            });
                        })
                    }
                })
            });
        }
        $.getJSON("./json/sh.json", function (json) {
            address(json)
            $(".address_select_provate .sss").click(function () {
                $(".areaContent").html("")
                address(json)
            })
            $(".addAddress").on("click", function () {
                $(".mask").show()
                $(".dialog").show()
                $(".address_name").val("").blur();
                $(".address_phone").val("").blur();
                $(".address_detailed_Address").val("").blur();
                $(".selectTitle").html(`<span class="sss"></span> <span class="ccc"></span> <span class="zzz">选择省份/自治区</span>`)
                $(".address_select_provate").html(`<span class="sss"></span> <span class="ccc"></span> <span class="zzz">选择省份/自治区</span>`)
                address(json)
            });
            $(".address_address").on("click", function () {
                $(".address_select").show()
                address(json)
            })
        })
    })


    $(function () {
        // 渲染
        $.get("./php/getbijibenlist.php", function (data) {
            var obj = JSON.parse(data)
            // 获取商品
            if (location.href.split("?")[1]) {
                var sp = location.href.split("?")[1]
            } else {
                alert("你没还有选择任何商品")
                location.href = "./11bijibenlist.html"
            }
            sp = sp.slice(0, sp.length - 1)

            var arr = sp.split("&")
            //拼接要买的东西
            var str = "{"
            for (let i = 0; i < arr.length; i++) {
                let cat = localStorage.getItem(arr[i])
                str += `"${arr[i]}":"${cat}",`
            }
            str = str.slice(0, str.length - 1)
            str += "}"
            var shangp = JSON.parse(str)

            // 循环要买的商品渲染
            var main;
            // 商品数量
            var num = 0
            //  商品总价
            var price = 0
            var strmain = ""
            for (let key in shangp) {
                //商品信息
                main = obj[key.split("id")[1] - 1]
                // 计算价格数量
                num += localStorage.getItem(key) - 0
                var p1 = main.price.replace("￥", "")
                price += (p1 - 0) * (localStorage.getItem(key) - 0)
                // 内容
                strmain += ` 
                            <li class="productListLi">
                                <img src="${main.img}" alt="">
                                <div class="fr proInfo">
                                    <div class="clear-fix">
                                        <p class="fl proTitle">${main.tit}</p>
                                        <span class="price">${main.price}</span>
                                        <span class="number"> X${localStorage.getItem(key)}</span>
                                    </div>
                                    <p class="proBrief">${main.search}</p>
                                    <p class="reasonReturn">
                                        <i>7</i>支持七天无忧退换
                                    </p>
                                </div>
                            </li>
                        `
            }
            $(".productList").html(strmain)
            //数量赋值
            $(".settlementCount>span").html(num)
            $(".actualPriceWrapper>div").html("￥" + price)
            $(".totalPrice").html("￥" + price)
        })
        // 随机数值
        function randomn(n) {
            if (n > 21) return null
            return parseInt((Math.random() + 1) * Math.pow(10, n - 1))
        }
        // 提交订单
        $(".submitBtn").on("click", function () {
            // 判断是否输入了地址
            if ($(".dizhi1").length) {
                var ddh = randomn(8)
                // 支付显示
                $(".mask").show();
                $(".pay").show();
                $(".zfxinxi").html(`
                    <li>订单号：<span>${ddh}</span></li>
                    <li>收获信息：<span>${$(".customerName").html()+" "+ $(".phoneNum").html()+ " " + $(".addressInfo").html()}</span></li>
                    <li>商品名称：<span>${$(".proTitle").html()+"等"}</span></li>
                    <li>发票信息：<span>电子发票 个人</span></li>
                `)
                $(".zfprice").html($(".settlementListPrice").html())
            } else {
                alert("亲，你还没有选择地址")
                return
            }
        })
        // 确认支付
        $(".qrzf").click(function () {
            // 确认框
            if (confirm("你确定要购买这些商品吗？")) {
                $.get("./php/getbijibenlist.php", function (data) {
                    var obj = JSON.parse(data)
                    // 获取商品
                    var sp = location.href.split("?")[1]
                    sp = sp.slice(0, sp.length - 1)
                    var arr = sp.split("&")
                    //拼接要买的东西
                    var str = "{"
                    for (let i = 0; i < arr.length; i++) {
                        let cat = localStorage.getItem(arr[i])
                        str += `"${arr[i]}":"${cat}",`
                    }
                    str = str.slice(0, str.length - 1)
                    str += "}"
                    var shangp = JSON.parse(str)
                    for (var key in shangp) {
                        localStorage.removeItem(key)
                    }
                    alert("已支付：" + $(".zfprice").html())
                    $(".mask").hide();
                    $(".pay").hide();
                    $(".goodList").html("")
                    alert("支付完成，三秒后跳转至首页，谢谢你的关顾")
                    setTimeout(function () {
                        location.href = "03index.html"
                    }, 3000)
                })
            } else {
                $(".mask").hide();
                $(".pay").hide();
            }
        })
        // 支付显示
        $(".guanbi").click(function () {
            $(".mask").hide();
            $(".pay").hide();
        })
    })

} else {
    alert("亲，你还没有选择支付任何商品")
    location.href = "03index.html"
}