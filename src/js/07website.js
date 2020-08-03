$(function () {
    // 获取登录状态
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
                        $(".hd-login-regist").html(
                            `<a class="loginmain" href="javascript:;">${getCookie("userName")}
                                <ul class="tuichu">
                                    <li><button class="tdenlu">退出登录</button></li>
                                    <li><button class="tzido">清除自动登录</button></li>
                                </ul>
                            </a>`
                        )
                        // 退出登录
                        $(".tdenlu").click(function () {
                            $(".hd-login-regist").html(
                                `<a href="./02denlu.html">登录</a>
                                <i class="vert-line"></i>
                                <a href="./01zhuce.html">注册</a>`
                            )
                            delCookie("userName", -1)
                        })
                        // 退出自动登录
                        $(".tzido").click(function () {
                            $(".hd-login-regist").html(
                                ` <a href="./02denlu.html">登录</a>
                                <i class="vert-line"></i>
                                <a href="./01zhuce.html">注册</a>`
                            )
                            delCookie("userName", -1)
                            delCookie("login", -1)
                        })
                    }
                }
            })
            $("#top_cart_count").html(window.localStorage.length)
        }
    });
    // nav的显示隐藏
    $(".logo-placeholder ~ li").hover(function () {
        $(this).find(".content-area").css("display", "block")
    }, function () {
        $(this).find(".content-area").css("display", "none")
    });
    // nav下的大标签的样式
    $(".content-areaul li p").hover(function () {
        $(".content_hover").removeClass("content_hover")
        $(".content_hoverspan").removeClass("content_hoverspan")
        $(this).parent().addClass("content_hover")
        $(this).children().addClass("content_hoverspan")
    })
    // nav下的内容渲染
    {
        $(".content-areaul li p").eq(0).hover(function () {
            $(".details-area").html(`
            <ul class="details-areaul clear-fix">
                <li class="fl clear-fix" style="width: 15%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">Lenovo电脑</a></li>
                        <li><a href="./03index.html">游戏本</a></li>
                        <li><a href="./03index.html">轻薄本</a></li>
                        <li><a href="./03index.html">便携本</a></li>
                        <li><a href="./03index.html">台式机</a></li>
                        <li><a href="./03index.html">特色服务</a></li>
                        <li><a href="./03index.html">异能者游戏主机</a></li>
                    </ul>
                </li>
                <li class="fl" style="width: 16%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">ThinkPad电脑</a></li>
                        <li><a href="./03index.html">ThinkPad</a></li>
                        <li><a href="./03index.html">ThinkBook</a></li>
                        <li><a href="./03index.html">Thinkplus</a></li>
                        <li><a href="./03index.html">特色服务</a></li>
                    </ul>
                </li>
                <li class="fl" style="width: 15%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">手机/通信</a></li>
                        <li><a href="./03index.html">Lenovo</a></li>
                        <li><a href="./03index.html">Motorola</a></li>
                        <li><a href="./03index.html">充值中心</a></li>
                        <li><a href="./03index.html">170/171</a></li>
                    </ul>
                </li>
                <li class="fl" style="width: 15%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">智能产品</a></li>
                        <li><a href="./03index.html">家具</a></li>
                        <li><a href="./03index.html">健康</a></li>
                        <li><a href="./03index.html">安防</a></li>
                        <li><a href="./03index.html">出行</a></li>
                        <li><a href="./03index.html">智玩</a></li>
                    </ul>
                </li>
                <li class="fl" style="width: 15%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">平板电脑</a></li>
                        <li><a href="./03index.html">智能平板</a></li>
                        <li><a href="./03index.html">YOGA平板</a></li>
                        <li><a href="./03index.html">常规平板</a></li>
                    </ul>
                </li>
                <li class="fl" style="width: 15%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">配件/办公</a></li>
                        <li><a href="./03index.html">储存设备</a></li>
                        <li><a href="./03index.html">K歌直播</a></li>
                        <li><a href="./03index.html">显示生态</a></li>
                        <li><a href="./03index.html">娱乐生活</a></li>
                        <li><a href="./03index.html">游戏装备</a></li>
                        <li><a href="./03index.html">电脑配件</a></li>
                        <li><a href="./03index.html">打印机</a></li>
                    </ul>
                </li>
                <li class="fl" style="width: 15%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">增值服务</a></li>
                        <li><a href="./03index.html">硬件升级</a></li>
                        <li><a href="./03index.html">Care+</a></li>
                        <li><a href="./03index.html">系统服务</a></li>
                        <li><a href="./03index.html">清洁保养</a></li>
                        <li><a href="./03index.html">数据恢复</a></li>
                        <li><a href="./03index.html">诊断维修</a></li>
                    </ul>
                </li>
                </ul>
                <div class="clear-fix"></div>
        `)
        })
        $(".content-areaul li p").eq(1).hover(function () {
            $(".details-area").html(`
             <ul class="details-areaul clear-fix">
                <li class="fl clear-fix" style="width: 25%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">企业设备采购</a></li>
                        <li><a href="./03index.html">笔记本电脑</a></li>
                        <li><a href="./03index.html">台式电脑</a></li>
                        <li><a href="./03index.html">打印机</a></li>
                        <li><a href="./03index.html">数据中心服务器</a></li>
                        <li><a href="./03index.html">电脑部件</a></li>
                        <li><a href="./03index.html">外设产品</a></li>
                    </ul>
                </li>
                <li class="fl" style="width: 25%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">企业服务产品</a></li>
                        <li><a href="./03index.html">电脑租赁服务</a></li>
                        <li><a href="./03index.html">企业运维外包</a></li>
                        <li><a href="./03index.html">设备延保服务</a></li>
                        <li><a href="./03index.html">智慧办公解决方案</a></li>
                        <li><a href="./03index.html">智慧客服解决方案</a></li>
                    </ul>
                </li>
                <li class="fl" style="width: 25%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">企业办公软件</a></li>
                        <li><a href="./03index.html">Office365办公软件</a></li>
                        <li><a href="./03index.html">电脑系统软件</a></li>
                        <li><a href="./03index.html">资产管理软件</a></li>
                    </ul>
                </li>
                <li class="fl" style="width: 25%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">联想企业会员</a></li>
                        <li><a href="./03index.html">联想企业会员权益</a></li>
                        <li><a href="./03index.html">企业会员积分兑换</a></li>
                        <li><a href="./03index.html">关于联想百应企业平台</a></li>
                    </ul>
                </li>
            </ul>
            <div class="clear-fix"></div>
        `)
        })
        $(".content-areaul li p").eq(2).hover(function () {
            $(".details-area").html(`
             <ul class="details-areaul clear-fix">
                <li class="fl clear-fix" style="width: 33%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">产品</a></li>
                        <li><a href="./03index.html">笔记本</a></li>
                        <li><a href="./03index.html">台式机</a></li>
                        <li><a href="./03index.html">工作站</a></li>
                        <li><a href="./03index.html">平板电脑</a></li>
                        <li><a href="./03index.html">智能眼睛</a></li>
                        <li><a href="./03index.html">专业显示器</a></li>
                        <li><a href="./03index.html">选件</a></li>
                    </ul>
                </li>
                <li class="fl" style="width: 33%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">解决方案</a></li>
                        <li><a href="./03index.html">广电行业</a></li>
                        <li><a href="./03index.html">交通行业</a></li>
                        <li><a href="./03index.html">能源行业</a></li>
                        <li><a href="./03index.html">政府行业</a></li>
                        <li><a href="./03index.html">教育行业</a></li>
                        <li><a href="./03index.html">制造行业</a></li>
                    </ul>
                </li>
                <li class="fl" style="width: 33%;">
                    <ul class="item-lists">
                        <li class="title"><a href="./03index.html">..</a></li>
                        <li><a href="./03index.html">医疗行业</a></li>
                        <li><a href="./03index.html">互联网行业</a></li>
                        <li><a href="./03index.html">金融行业</a></li>
                        <li><a href="./03index.html">IOT解决方案</a></li>
                        <li><a href="./03index.html">通用行业</a></li>
                    </ul>
                </li>
            </ul>
            <div class="clear-fix"></div>
        `)
        })
        $(".fuwucon li p").eq(0).hover(function () {
            $(".fuwucon-area").html(`
                <ul class="details-areaul clear-fix">
                    <li class="fl clear-fix" style="width: 25%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">帮助与支持</a></li>
                            <li><a href="./03index.html">驱动下载</a></li>
                            <li><a href="./03index.html">保修查询</a></li>
                            <li><a href="./03index.html">服务网点查询</a></li>
                            <li><a href="./03index.html">配置查询</a></li>
                            <li><a href="./03index.html">热门解决方案</a></li>
                            <li><a href="./03index.html">微信服务</a></li>
                            <li><a href="./03index.html">lenovo Quick Fix工具</a></li>
                            <li><a href="./03index.html">更多服务</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 25%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">产品服务</a></li>
                            <li><a href="./03index.html">联想笔记本</a></li>
                            <li><a href="./03index.html">联想台式机</a></li>
                            <li><a href="./03index.html">Think产品</a></li>
                            <li><a href="./03index.html">服务器及储存</a></li>
                            <li><a href="./03index.html">打印机及数码选件</a></li>
                            <li><a href="./03index.html">智慧联想</a></li>
                            <li><a href="./03index.html">智能电视</a></li>
                            <li><a href="./03index.html">平板</a></li>
                            <li><a href="./03index.html">联想手机</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 25%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">增值服务</a></li>
                            <li><a href="./03index.html">延保服务</a></li>
                            <li><a href="./03index.html">硬件升级</a></li>
                            <li><a href="./03index.html">清洁保养</a></li>
                            <li><a href="./03index.html">诊断维修</a></li>
                            <li><a href="./03index.html">数据恢复</a></li>
                            <li><a href="./03index.html">重装系统</a></li>
                            <li><a href="./03index.html">一键服务</a></li>
                            <li><a href="./03index.html">正版Office</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 25%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">其他服务</a></li>
                            <li><a href="./03index.html">微视频服务专区</a></li>
                            <li><a href="./03index.html">用户手册查询</a></li>
                            <li><a href="./03index.html">服务政策</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="clear-fix"></div>
            `)
        })
        $(".fuwucon li p").eq(1).hover(function () {
            $(".fuwucon-area").html(`
                <ul class="details-areaul clear-fix">
                    <li class="fl clear-fix" style="width: 16%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">预约维修</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 16%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">专家在线</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 16%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">联想超级课</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 16%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">查询保修配置</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 16%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">维修进度查询</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 18%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">智慧客服解决方案</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="clear-fix"></div>
            `)
        })
        $(".pingpai li p").eq(0).hover(function () {
            $(".pingpai-area").html(`
                <ul class="details-areaul clear-fix">
                    <li class="fl clear-fix" style="width: 20%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">品牌愿景</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 20%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">品牌纪事</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 20%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">品牌行动</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 20%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">品牌荣誉</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 20%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">品牌公益</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="clear-fix"></div>
            `)
        })
        $(".pingpai li p").eq(1).hover(function () {
            $(".pingpai-area").html(`
                <ul class="details-areaul clear-fix">
                    <li class="fl clear-fix" style="width: 33%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">合作伙伴</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 33%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">成功案例</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 33%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">产品发布</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="clear-fix"></div>
            `)
        })
        $(".pingpai li p").eq(2).hover(function () {
            $(".pingpai-area").html(`
                <ul class="details-areaul clear-fix">
                    <li class="fl clear-fix" style="width: 50%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">新闻</a></li>
                        </ul>
                    </li>
                    <li class="fl" style="width: 50%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">媒体图像</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="clear-fix"></div>
            `)
        })
        $(".pingpai li p").eq(3).hover(function () {
            $(".pingpai-area").html(`
                <ul class="details-areaul clear-fix">
                    <li class="fl clear-fix" style="width: 50%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">市场活动</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="clear-fix"></div>
            `)
        })
        $(".pingpai li p").eq(4).hover(function () {
            $(".pingpai-area").html(`
                <ul class="details-areaul clear-fix">
                    <li class="fl clear-fix" style="width: 25%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">公司简介</a></li>
                        </ul>
                    </li>
                    <li class="fl clear-fix" style="width: 25%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">投资者关系</a></li>
                        </ul>
                    </li>
                    <li class="fl clear-fix" style="width: 25%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">联系我们</a></li>
                        </ul>
                    </li>
                    <li class="fl clear-fix" style="width: 25%;">
                        <ul class="item-lists">
                            <li class="title"><a href="./03index.html">品牌公益</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="clear-fix"></div>
            `)
        })
    };
    //con切换渲染
    {
        function content(x, a, b, c, d, e, f, g, h, i, j, k, r, o, n, u, v) {
            $(`.content_tab .${x} li`).eq(a).hover(function () {
                $(".content_chren").html(`
             <div style="width: 100%; height: 356px;">
                <ul class="clear-fix uls">
                    <li>
                        <a href="./03index.html">
                            <img src="${b}" alt="">
                            <div class="content">
                                <p class="name">${c}</p>
                                <p class="berif">${d}</p>
                                <p class="prie">
                                    ￥<span>${e}</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="./03index.html">
                            <img src="${f}" alt="">
                            <div class="content">
                                <p class="name">${g}</p>
                                <p class="berif">${h}</p>
                                <p class="prie">
                                    ￥<span>${i}</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li style="margin-right: 0;">
                        <a href="./03index.html">
                            <img src="${j}" alt="">
                            <div class="content">
                                <p class="name">${k}</p>
                                <p class="berif"> ${r}</p>
                                <p class="prie">
                                    ￥<span>${o}</span>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div style="width: 100%; height: 520px; margin-top: 10px;">
                <div class="gg_banner">
                    <div class="gg_left fl">
                        <a href="./03index.html">
                            <img src="${n}" alt="">
                        </a>
                    </div>
                    <div class="gg_right fr">
                        <div>
                            <a href="./03index.html"><img src="${u}" alt=""></a>
                        </div>
                        <div class="item">
                            <a href="./03index.html"><img src="${v}" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        `)
            })
        }
        function content1(x, a, b, c, d, f, g, h, j, k, r, n, u, v) {
            $(`.content_tab .${x} li`).eq(a).hover(function () {
                $(".content_chren").html(`
             <div style="width: 100%; height: 356px;">
                <ul class="clear-fix uls">
                    <li>
                        <a href="./03index.html">
                            <img src="${b}" alt="">
                            <div class="content">
                                <p class="name">${c}</p>
                                <p class="berif">${d}</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="./03index.html">
                            <img src="${f}" alt="">
                            <div class="content">
                                <p class="name">${g}</p>
                                <p class="berif">${h}</p>
                            </div>
                        </a>
                    </li>
                    <li style="margin-right: 0;">
                        <a href="./03index.html">
                            <img src="${j}" alt="">
                            <div class="content">
                                <p class="name">${k}</p>
                                <p class="berif"> ${r}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div style="width: 100%; height: 520px; margin-top: 10px;">
                <div class="gg_banner">
                    <div class="gg_left fl">
                        <a href="./03index.html">
                            <img src="${n}" alt="">
                        </a>
                    </div>
                    <div class="gg_right fr">
                        <div>
                            <a href="./03index.html"><img src="${u}" alt=""></a>
                        </div>
                        <div class="item">
                            <a href="./03index.html"><img src="${v}" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        `)
            })
        }
        function c1() {
            content("GR", 0, "./images/164.png", "AIO 520C-24IWL 十代英特尔酷睿i5 23.8英寸一体台式机 黑色", "十代英特尔酷睿I5-10210U/Windows 10 家庭中文版/23.8英寸/16G/512G SSD/集成显卡/黑色", 4799, "./images/117.png", "拯救者 刃7000K 2020十代英特尔酷睿i5 分体台式机 黑色", "英特尔酷睿十代i5-10400F/i5-10400/Windows 10 家庭中文版/16G/ 512GSSD / RTX2060 - 6 GB显卡 / 黑色 ", 6399, "./images/118.png", "网课AIO 逸-24ICK 英特尔酷睿i5 23.8英寸一体台式机 黑色", "九代英特尔酷睿i5-9400T/Windows 10 家庭中文版/23.8英寸/8G/1T+256G SSD/独立显卡/黑色", 4999, "./images/158.jpg", "./images/134.jpg", "./images/129.jpg")
            content("GR", 1, "./images/88.png", "ideapad 14s 英特尔酷睿i5 14.0英寸笔记本 银色", " 第十代英特尔酷睿i5-10210U/Windows 10 家庭中文版/14.0英寸/8G/512G SSD/GeForce MX330 2G独显/银色", 4199, "./images/95.jpg", "小新 Air 14 2020英特尔酷睿i5 14.0英寸全面屏轻薄笔记本 星月银", " 十代英特尔酷睿i5-1035G1/Windows 10 家庭中文版/14.0英寸/16G/512G SSD/GeForce MX350 2G独显/星月银", 5199, "./images/102.jpg", "2020款小新Pro13英特尔酷睿i5 13.3英寸全面屏轻薄笔记本沧海冰蓝", " 第十代英特尔酷睿i5-10210U/Windows 10 家庭中文版/13.3英寸/16GB/512G SSD/GeForce MX350 2G独显/沧海冰蓝", 5899, "./images/175.jpg", "./images/134.jpg", "./images/129.jpg")
            content("GR", 2, "./images/174.png", "ThinkPad X1Carbon2020LTE版英特尔酷睿i5笔记本20U90037CD沉浸黑", "  全新十代英特尔酷睿i5-10210U/Windows 10家庭中文版/8GB/512GB SSD/英特尔® UHD 显示芯片/14英寸FHD IPS LED背光显示屏/LTE版/沉浸黑", 10299, "./images/175.png", "ThinkPad T14 英特尔酷睿i5 笔记本电脑 20S0004FCD", " 全新十代英特尔酷睿i5-10210U/Windows 10家庭中文版/8GB/512GB SSD/NVIDIA GeForce MX330 2GB DDR5独立显存/14英寸FHD IPS防眩光雾面屏", 7999, "./images/76.jpg", "ThinkBook 14 英特尔酷睿i5 笔记本电脑 20SLA009CD 钛灰银", " 全新十代英特尔酷睿i5-1035G1处理器/Windows 10家庭中文版/8GB/32GB傲腾内存+512GB SSD/AMD Radeon 630 2G/14英寸FHD IPS LED背光显示屏/钛灰银", 4899, "./images/151.jpg", "./images/137.jpg", "./images/125.jpg")
            content("GR", 3, "./images/159.png", "联想蓝牙音箱K歌一体麦克风 nova BM20 高雅灰", "", 189, "./images/160.png", "联想无线静音一键服务鼠标N911 Pro 黑色", " 静音按键，经久耐用，超300万次点击，免开关，自动省电休眠，侧裙/底部防滑设计，人体工学，饱满曲线，舒适质感，一键触发人工服务", 59, "./images/97.png", "联想一键服务鼠标M23 礼盒版", " “马卡龙”鼠标，幻彩外壳，五种色彩，工作日每天好心情", 159, "./images/176.jpg", "./images/127.jpg", "./images/135.jpg")
            content("GR", 4, "./images/163.png", "联想智能空气净化器", "CADR值高达600，净化快丨31.6分贝低噪处理丨PM2.5超标智能自启", 1699, "./images/162.png", "联想“看家宝”智能摄像机R1", " 超高清1080P云台版 H.265编码 人工智能声音识别 智能监控隐私遮蔽", 229, "./images/161.png", "联想智能体脂秤X1 故宫文创联名", " 全家使用 20项核心指标测量 蓝牙连手机可云存储 体重秤男女健康减肥 一年换新质保售后无忧", 139, "./images/150.jpg", "./images/142.jpg", "./images/141.jpg")
            content("GR", 5, "./images/100.jpg", "联想YOGA tab5网课平板电脑 10.1英寸全高清4G+64G 8核 YT-X705F", " 高通439八核/Android系统/10.1英寸/4GB/64GB/WIFI版/深空灰/网课平板", 1499, "./images/66.jpg", "联想平板M8 8英寸 4G+64G WiFi版 杜比全景声 网课平板", " MTK P22T/8核/Android  Pie 9/8英寸/4G/64G/管控模式/人脸验证/双频WIFI/银色", 999, "./images/81.png", "联想M10 PLUS 网课平板电脑 10.3英寸 WIFI版 枪灰色", " MediaTek P22T/8核/Android系统/10.3英寸/4G/64G/WIFI版/枪灰色/网课平板", 1299, "./images/165.jpg", "./images/138.jpg", "./images/131.jpg")
            content("GR", 6, "./images/176.png", "预定专享-拯救者电竞手机 Pro 8GB+128GB 炽焰战甲", " 次世代中置架构/高通骁龙865 Plus旗舰处理器/90W 超级闪充/双X 轴线性马达/144Hz电竞屏/横屏UI设计/主播级中置前摄", 3499, "./images/177.png", "拯救者电竞手机 Pro 12GB+256GB 炫蓝冰刃", " 次世代中置架构/高通骁龙865 Plus旗舰处理器/90W 超级闪充/双X 轴线性马达/144Hz电竞屏/横屏UI设计/主播级中置前摄", 4199, "./images/178.png", "Lenovo 45W 适配器", " 体积小丨充电速度快", 79, "./images/177.jpg", "./images/178.jpg", "./images/179.jpg")

        }
        // 开局渲染
        c1()
        $(".tab_navTop ul li").eq(0).click(function () {
            $(".pcheck").removeClass()
            $(this).children().eq(1).addClass("pcheck")
            $(".content_tab").html(`
             <ul class="GR">
                <li>
                    <a href="javascript:;">
                        <img src="./images/34.png" alt="">
                        <img src="./images/30.png" alt="">
                        <p>Lenovo 台式机</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="./images/i15.png" alt="">
                        <img src="./images/38.png" alt="">
                        <p>Lenovo 笔记本</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="./images/i15.png" alt="">
                        <img src="./images/38.png" alt="">
                        <p>ThinkPad 电脑</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="./images/25.png" alt="">
                        <img src="./images/29.png" alt="">
                        <p>选件/服务</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="./images/i17.png" alt="">
                        <img src="./images/i22.png" alt="">
                        <p>智能产品</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="./images/12.png" alt="">
                        <img src="./images/19.png" alt="">
                        <p>网课平板</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="./images/36.png" alt="">
                        <img src="./images/i18.png" alt="">
                        <p>手机</p>
                    </a>
                </li>
            </ul>
        `)
            $(".content_chren").html(`
            <div style="width: 100%; height: 356px;">
                <ul class="clear-fix uls">
                    <li>
                        <a href="./03index.html">
                            <img src="./images/164.png" alt="">
                            <div class="content">
                                <p class="name">AIO 520C-24IWL 十代英特尔酷睿i5 23.8英寸一体台式机 黑色</p>
                                <p class="berif">十代英特尔酷睿I5-10210U/Windows 10 家庭中文版/23.8英寸/16G/512G SSD/集成显卡/黑色</p>
                                <p class="prie">
                                    ￥<span>4799</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="./03index.html">
                            <img src="./images/117.png" alt="">
                            <div class="content">
                                <p class="name">拯救者 刃7000K 2020十代英特尔酷睿i5 分体台式机 黑色</p>
                                <p class="berif"> 英特尔酷睿十代i5-10400F/i5-10400/Windows 10 家庭中文版/16G/ 512G
                                    SSD/RTX2060-6GB显卡/黑色</p>
                                <p class="prie">
                                    ￥<span>6399</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li style="margin-right: 0;">
                        <a href="./03index.html">
                            <img src="./images/118.png" alt="">
                            <div class="content">
                                <p class="name">网课AIO 逸-24ICK 英特尔酷睿i5 23.8英寸一体台式机 黑色</p>
                                <p class="berif"> 九代英特尔酷睿i5-9400T/Windows 10 家庭中文版/23.8英寸/8G/1T+256G SSD/独立显卡/黑色</p>
                                <p class="prie">
                                    ￥<span>4999</span>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div style="width: 100%; height: 520px; margin-top: 10px;">
                <div class="gg_banner">
                    <div class="gg_left fl">
                        <a href="./03index.html">
                            <img src="./images/158.jpg" alt="">
                        </a>
                    </div>
                    <div class="gg_right fr">
                        <div>
                            <a href="./03index.html"><img src="./images/134.jpg" alt=""></a>
                        </div>
                        <div class="item">
                            <a href="./03index.html"><img src="./images/129.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        `)
            c1()
        })
        $(".tab_navTop ul li").eq(1).click(function () {
            $(".pcheck").removeClass()
            $(this).children().eq(1).addClass("pcheck")
            $(".content_tab").html(`
             <ul class="QY">
                <li style="width:25%">
                    <a href="javascript:;">
                        <img src="./images/46.png" alt="">
                        <img src="./images/50.png" alt="">
                        <p>办公电脑采购</p>
                    </a>
                </li>
                <li style="width:25%">
                    <a href="javascript:;">
                        <img src="./images/49.png" alt="">
                        <img src="./images/51.png" alt="">
                        <p>企业服务产品</p>
                    </a>
                </li>
                <li style="width:25%">
                    <a href="javascript:;">
                        <img src="./images/45.png" alt="">
                        <img src="./images/47.png" alt="">
                        <p>企业办公软件</p>
                    </a>
                </li>
                <li style="width:25%">
                    <a href="javascript:;">
                        <img src="./images/44.png" alt="">
                        <img src="./images/48.png" alt="">
                        <p>企业会员中心</p>
                    </a>
                </li>
            </ul>
        `)
            $(".content_chren").html(`
           <div style="width: 100%; height: 356px;">
                <ul class="clear-fix uls">
                    <li>
                        <a href="./03index.html">
                            <img src="./images/180.jpg" alt="">
                            <div class="content">
                                <p class="name">ThinkPad X13 4G版</p>
                                <p class="berif"> 企业采购专享折扣</p>
                                <p class="prie">
                                    ￥<span>6999</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="./03index.html">
                            <img src="./images/58.jpg" alt="">
                            <div class="content">
                                <p class="name">ThinkPad T14s</p>
                                <p class="berif">  企业采购专享折扣</p>
                                <p class="prie">
                                    ￥<span>8499</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li style="margin-right: 0;">
                        <a href="./03index.html">
                            <img src="./images/57.jpg" alt="">
                            <div class="content">
                                <p class="name">ThinkPad X1 Carbon 2020</p>
                                <p class="berif">  企业采购专享折扣</p>
                                <p class="prie">
                                    ￥<span>9999</span>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div style="width: 100%; height: 520px; margin-top: 10px;">
                <div class="gg_banner">
                    <div class="gg_left fl">
                        <a href="./03index.html">
                            <img src="./images/152.jpg" alt="">
                        </a>
                    </div>
                    <div class="gg_right fr">
                        <div>
                            <a href="./03index.html"><img src="./images/121.jpg" alt=""></a>
                        </div>
                        <div class="item">
                            <a href="./03index.html"><img src="./images/119.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        `) ;{
                content("QY", 0, "./images/180.jpg", "ThinkPad X13 4G版", " 企业采购专享折扣", "6999", "./images/58.jpg", "ThinkPad T14s", "  企业采购专享折扣", "8499", "./images/57.jpg", "ThinkPad X1 Carbon 2020", " 企业采购专享折扣", "9999", "./images/152.jpg", "./images/121.jpg", "./images/119.jpg")
                content1("QY", 1, "./images/180.jpg", "ThinkPad S3 2020", "企业采购专享折扣", "./images/57.jpg", "ThinkBook 14", "  企业采购专享折扣", "./images/55.jpg", "ThinkPad E14", " 企业采购专享折扣", "./images/152.jpg", "./images/121.jpg", "./images/119.jpg")
                content1("QY", 2, "./images/63.jpg", "win10专业版", " 更快的操作系统", "./images/64.jpg", "Office365商业高级版", " 免费的Office云服务", "./images/62.jpg", "资产管理", " 免费固定资产管理系统", "./images/152.jpg", "./images/121.jpg", "./images/119.jpg")
                content1("QY", 3, "./images/61.jpg", "ThinkPad延长上门", " 139元起", "./images/60.jpg", "企业会员专享折扣", "   限时体验高级企业会员", "./images/65.jpg", "电脑设备租赁服务", "免押金租赁", "./images/152.jpg", "./images/121.jpg", "./images/119.jpg")
            }
        })
        $(".tab_navTop ul li").eq(2).click(function () {
            $(".pcheck").removeClass()
            $(this).children().eq(1).addClass("pcheck")
            $(".content_tab").html(`
             <ul class="ZF">
                <li style="width:20%">
                    <a href="javascript:;">
                        <img src="./images/32.png" alt="">
                        <img src="./images/23.png" alt="">
                        <p>商用电脑</p>
                    </a>
                </li>
                <li style="width:20%">
                    <a href="javascript:;">
                        <img src="./images/35.png" alt="">
                        <img src="./images/14.png" alt="">
                        <p>商用IOT</p>
                    </a>
                </li>
                <li style="width:20%">
                    <a href="javascript:;">
                        <img src="./images/i16.png" alt="">
                        <img src="./images/i27.png" alt="">
                        <p>商用解决方案</p>
                    </a>
                </li>
                <li style="width:20%">
                    <a href="javascript:;">
                        <img src="./images/28.png" alt="">
                        <img src="./images/i20.png" alt="">
                        <p>联想E采</p>
                    </a>
                </li>
                <li style="width:20%">
                    <a href="javascript:;">
                        <img src="./images/31.png" alt="">
                        <img src="./images/26.png" alt="">
                        <p>商用方案</p>
                    </a>
                </li>
            </ul>
        `)
            $(".content_chren").html(`
           <div style="width: 100%; height: 356px;">
                <ul class="clear-fix uls">
                    <li>
                        <a href="./03index.html">
                            <img src="./images/82.jpg" alt="">
                            <div class="content">
                                <p class="name">工作站P328</p>
                                <p class="berif">释放才华万千</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="./03index.html">
                            <img src="./images/67.jpg" alt="">
                            <div class="content">
                                <p class="name">昭阳K4</p>
                                <p class="berif">十代酷睿 强劲性能</p>
                            </div>
                        </a>
                    </li>
                    <li style="margin-right: 0;">
                        <a href="./03index.html">
                            <img src="./images/82.jpg" alt="">
                            <div class="content">
                                <p class="name">ThinkCentreM720e</p>
                                <p class="berif"> 卓越非凡 快速交付</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div style="width: 100%; height: 520px; margin-top: 10px;">
                <div class="gg_banner">
                    <div class="gg_left fl">
                        <a href="./03index.html">
                            <img src="./images/148.jpg" alt="">
                        </a>
                    </div>
                    <div class="gg_right fr">
                        <div>
                            <a href="./03index.html"><img src="./images/132.jpg" alt=""></a>
                        </div>
                        <div class="item">
                            <a href="./03index.html"><img src="./images/120.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        `); {
                content1("ZF", 0, "./images/82.jpg", "工作站P328", "释放才华万千", "./images/67.jpg", "昭阳K4", "十代酷睿 强劲性能", "./images/82.jpg", "ThinkCentreM720e", "卓越非凡 快速交付", "./images/148.jpg", "./images/132.jpg", "./images/120.jpg")
                content1("ZF", 1, "./images/78.jpg", "ECI系列工业计算设备", "", "./images/89.jpg", "ECB系列边缘计算板卡", "", "./images/74.jpg", "  ECE系列 嵌入式计算设备", "", "./images/148.jpg", "./images/132.jpg", "./images/120.jpg")
                content1("ZF", 2, "./images/72.jpg", "政府行业", " 联想政府行业解决方案", "./images/83.jpg", "教育行业", " 联想智慧教育解决方案", "./images/69.jpg", "制造行业", " 联想制造行业解决方案", "./images/148.jpg", "./images/132.jpg", "./images/120.jpg")
                content1("ZF", 3, "./images/80.jpg", "易捷办公", "", "./images/77.jpg", " 笔记本", "", "./images/92.jpg", " 台式机/一体机", "", "./images/148.jpg", "./images/132.jpg", "./images/120.jpg")
                content1("ZF", 4, "./images/99.jpg", "   智慧化转型服务", "", "./images/85.jpg", "智能IoT服务", "", "./images/94.jpg", "   IT管理服务", "", "./images/148.jpg", "./images/132.jpg", "./images/120.jpg")

            }
        })
        $(".tab_navTop ul li").eq(3).click(function () {
            $(".pcheck").removeClass()
            $(this).children().eq(1).addClass("pcheck")
            $(".content_tab").html(`
             <ul class="SJ">
                <li style="width:50%">
                    <a href="javascript:;">
                        <img src="./images/40.png" alt="">
                        <img src="./images/37.png" alt="">
                        <p>数据中心产品</p>
                    </a>
                </li>
                <li style="width:50%">
                    <a href="javascript:;">
                        <img src="./images/i24.png" alt="">
                        <img src="./images/41.png" alt="">
                        <p>数据中心解决方案</p>
                    </a>
                </li>
            </ul>
        `)
            $(".content_chren").html(`
           <div style="width: 100%; height: 356px;">
                <ul class="clear-fix uls">
                    <li>
                        <a href="./03index.html">
                            <img src="./images/90.jpg" alt="">
                            <div class="content">
                                <p class="name">ThinkSystem SR650 服务器</p>
                                <p class="berif"> 面向高速发展的数据中心</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="./03index.html">
                            <img src="./images/84.jpg" alt="">
                            <div class="content">
                                <p class="name">ThinkSystem DM / DE 系列</p>
                                <p class="berif"> 无缝扩展存储，加速数据性能</p>
                            </div>
                        </a>
                    </li>
                    <li style="margin-right: 0;">
                        <a href="./03index.html">
                            <img src="./images/106.jpg" alt="">
                            <div class="content">
                                <p class="name">ThinkSystem SR950 服务器</p>
                                <p class="berif"> x86平台上“始终如一”的高可用性</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div style="width: 100%; height: 520px; margin-top: 10px;">
                <div class="gg_banner">
                    <div class="gg_left fl">
                        <a href="./03index.html">
                            <img src="./images/149.jpg" alt="">
                        </a>
                    </div>
                    <div class="gg_right fr">
                        <div>
                            <a href="./03index.html"><img src="./images/124.jpg" alt=""></a>
                        </div>
                        <div class="item">
                            <a href="./03index.html"><img src="./images/136.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        `) ;{
                content1("SJ", 0, "./images/90.jpg", "ThinkSystem SR650 服务器", "面向高速发展的数据中心", "./images/84.jpg", "ThinkSystem DM / DE 系列", "无缝扩展存储，加速数据性能", "./images/106.jpg", "ThinkSystem SR950 服务器", "x86平台上“始终如一”的高可用性", "./images/149.jpg", "./images/124.jpg", "./images/136.jpg")
                content1("SJ", 1, "./images/91.jpg", "制造行业", " 推动制造企业产业升级，加速转型", "./images/98.jpg", "能源行业", " 提供定制化、智能信息化解决方案", "./images/71.jpg", "云计算", " 降低IT成本，促进科技创新", "./images/149.jpg", "./images/124.jpg", "./images/136.jpg")
            }
        })
        $(".tab_navTop ul li").eq(4).click(function () {
            $(".pcheck").removeClass()
            $(this).children().eq(1).addClass("pcheck")
            $(".content_tab").html(`
             <ul class="ZN">
                <li style="width:50%">
                    <a href="javascript:;">
                        <img src="./images/43.png" alt="">
                        <img src="./images/42.png" alt="">
                        <p>Leap平台级软件产品</p>
                    </a>
                </li>
                <li style="width:50%">
                    <a href="javascript:;">
                        <img src="./images/39.png" alt="">
                        <img src="./images/i21.png" alt="">
                        <p>专业技术服务</p>
                    </a>
                </li>
            </ul>
        `)
            $(".content_chren").html(`
           <div style="width: 100%; height: 356px;">
                <ul class="clear-fix uls">
                    <li>
                        <a href="./03index.html">
                            <img src="./images/96.png" alt="">
                            <div class="content">
                                <p class="name">LeapIOT</p>
                                <p class="berif">联想工业物联网平台</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="./03index.html">
                            <img src="./images/87.png" alt="">
                            <div class="content">
                                <p class="name">LeapHD</p>
                                <p class="berif"> 联想大数据平台</p>
                            </div>
                        </a>
                    </li>
                    <li style="margin-right: 0;">
                        <a href="./03index.html">
                            <img src="./images/75.png" alt="">
                            <div class="content">
                                <p class="name">LeapAI</p>
                                <p class="berif">联想企业级人工智能平台</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div style="width: 100%; height: 520px; margin-top: 10px;">
                <div class="gg_banner">
                    <div class="gg_left fl">
                        <a href="./03index.html">
                            <img src="./images/155.jpg" alt="">
                        </a>
                    </div>
                    <div class="gg_right fr">
                        <div>
                            <a href="./03index.html"><img src="./images/133.jpg" alt=""></a>
                        </div>
                        <div class="item">
                            <a href="./03index.html"><img src="./images/143.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        `) ;{
                content1("ZN", 0, "./images/96.png", "LeapIOT", " 联想工业物联网平台", "./images/87.png", "LeapHD", " 联想大数据平台", "./images/75.png", "LeapAI", " 联想企业级人工智能平台", "./images/155.jpg", "./images/133.jpg", "./images/143.jpg")
                content1("ZN", 1, "./images/70.png", "数据智能规划设计", "", "./images/93.png", "核心平台建设", "", "./images/86.png", "智能化创新应用", "", "./images/155.jpg", "./images/133.jpg", "./images/143.jpg")
            }
        })
    };
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
    var mySwiper1 = new Swiper('.swiper1', {
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
    mySwiper1.el.onmouseover = function () {
        mySwiper1.autoplay.stop();
        mySwiper1.navigation.$nextEl.removeClass('hide');
        mySwiper1.navigation.$prevEl.removeClass('hide');
    }

    //鼠标离开开始自动切换
    mySwiper1.el.onmouseout = function () {
        mySwiper1.autoplay.start();
        mySwiper1.navigation.$nextEl.addClass('hide');
        mySwiper1.navigation.$prevEl.addClass('hide');
    }

    $(document).ready(function () {
        //此方法为模拟的，hover到分页器的小圆点后自动触发其本身的click事件
        $(".swiper-pagination-bullet").hover(function () {
            $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
        }, function () {
            mySwiper1.autoplay.start(); //鼠标移出之后，自动轮播开启
        })
    })
    var mySwiper = new Swiper('.swiper2', {
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
}