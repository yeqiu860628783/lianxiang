"use strict";function isUser(){return/^[_a-zA-Z]\w{5,15}$/.test($(".userName").val())?($(".s1").html("√"),!0):($(".s1").html("×,不能以数字开头且6-16位"),!1)}function isPass(){return/^[\da-zA-Z]{2,20}$/.test($(".passWord").val())?($(".s2").html("√"),!0):($(".s2").html("×，2-20位数字和字母"),!1)}function isPass2(){return $(".pass2").val()==$(".passWord").val()?($(".s3").html("√"),!0):($(".s3").html("×,密码与上一次不符"),!1)}function em(){""==$(".p").html()?$("em").css("top","79px"):$("em").css("top","99px")}$(".userName").on("blur",function(){var n=this;em(),1==isUser()?$.ajax({context:$(".p"),url:"./php/checkUser.php",data:{username:this.value},beforeSend:function(){$(".wait1").css({display:"block"})},success:function(s){var a=s.indexOf(n.value);"0"<=a?$(".p").html("x,已有用户抢先注册"):"-1"==a?$(".p").html("亲，趁着还没人用，赶紧注册！"):$(".p").html("服务器出错了"),em()},complete:function(){$(".wait1").css({display:"none"})}}):($(".p").html(""),em())}),$(".passWord").on("blur",function(){isPass()}),$(".pass2").on("blur",function(){isPass2()}),$(".passWord").keyup(function(){isPass()?($(".qiangdu").css("display","block"),/^\d{6,16}$/.test(this.value)||/^[a-zA-Z]{6,16}$/.test(this.value)?$(".qiangdu").css("display","block").html("中"):/^[0-9a-zA-Z]{6,16}$/.test(this.value)&&$(".qiangdu").css({display:"block",backgroundColor:"#fd7f2b"}).html("强")):$(".qiangdu").css("display","none")}),$(".reg_button").click(function(s){var a;""!=$("#username").val()&&""!=$("#userpass").val()?isUser()&&isPass()&&isPass2()?$.ajax({url:"./php/addUser.php",type:"POST",data:{username:$(".userName").val(),userpass:$(".passWord").val()},beforeSend:function(){$(".wait").css({display:"block"})},success:function(s){"success"==s?(alert("恭喜用户注册成功"),location.href="02denlu.html"):"fail"==s&&alert("不好意思，注册失败，请重新注册")},complete:function(){$(".wait").css({display:"none"})}}):(a=s||window.event,alert("输入不正确，注册不成功，请重新注册"),a.preventDefault()):alert(" 亲,你什么都还没有输入呢")}),$("#em").click(function(){$(".passWord").attr("type","text"),$("#em").css("display","none"),$("#em1").css("display","inline-block")}),$("#em1").click(function(){$(".passWord").attr("type","password"),$("#em").css("display","inline-block"),$("#em1").css("display","none")}),$(".userName").on("focus",function(){$(".s1").html("")}),$(".passWord").on("focus",function(){$(".s2").html(""),$(".qiangdu").css("display","none")}),$(".i1").on("click",function(){$(".userName").val(""),isUser()}),$(".i2").on("click",function(){$(".pass1").val(""),isPass()}),$(".i3").on("click",function(){$(".pass2").val(""),isPass()}),$(".logo").click(function(){location.href="./03index.html"}),$(".phone").click(function(){location.href="./07website.html"});