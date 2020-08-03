"use strict";function Pagination(e,t){this.ele=e,this.options=t||{},this.options.change=t.change||function(){},this.default={pageInfo:{pagenum:1,pagesize:10,total:1e3,totalpage:100},textInfo:{first:"first1",prev:"prev1",list:"",next:"next1",last:"last1"}},this.list=null,this.init()}function setCss(e,t){for(var a in t)e.style[a]=t[a]}Pagination.prototype.init=function(){this.defaultSwitch(),this.addInfo(),this.move()},Pagination.prototype.defaultSwitch=function(){for(var e in this.options.pageInfo)this.default.pageInfo[e]=this.options.pageInfo[e];for(var t in this.options.textInfo)this.default.textInfo[t]=this.options.textInfo[t]},Pagination.prototype.addInfo=function(){for(var e in this.ele.innerHTML="",this.default.textInfo){var t=document.createElement("div");"list"==(t.className=e)?setCss(this.list=t,{display:"flex",justifyContent:"center",alignItems:"center"}):setCss(t,{height:"35px",lineHeight:"35px",border:"1px solid #e9e9e9",margin:"0 5px",padding:"0 5px"}),t.innerHTML=this.default.textInfo[e],this.ele.appendChild(t)}this.addP(),this.isDis(),this.addBtn(),this.options.change(this.default.pageInfo.pagenum)},Pagination.prototype.addBtn=function(){var e=document.createElement("input");e.type="number",e.min=1,e.max=this.default.pageInfo.totalpage,e.value=this.default.pageInfo.pagenum,setCss(e,{outline:"none",width:"40px",height:"35px"}),this.ele.appendChild(e);var t=document.createElement("button");t.innerHTML="go",setCss(t,{width:"35px",height:"35px",marginLeft:"5px"}),this.ele.appendChild(t)},Pagination.prototype.isDis=function(){var e=this.ele.children;1==this.default.pageInfo.pagenum&&(e[0].style.backgroundColor="#ccc",e[1].style.backgroundColor="#ccc"),this.default.pageInfo.pagenum==this.default.pageInfo.totalpage&&(e[3].style.backgroundColor="#ccc",e[4].style.backgroundColor="#ccc")},Pagination.prototype.addP=function(){var e=this.default.pageInfo.totalpage,t=this.default.pageInfo.pagenum;if(e<=9)for(var a=1;a<=e;a++){var n=this.createP(a);this.list.appendChild(n)}else if(t<5){for(var i=1;i<=5;i++){var s=this.createP(i);this.list.appendChild(s)}var o=document.createElement("span");o.innerHTML="...",this.list.appendChild(o);for(var p=e-1;p<=e;p++){var l=this.createP(p);this.list.appendChild(l)}}else if(5==t){for(var r=1;r<=7;r++){var d=this.createP(r);this.list.appendChild(d)}var f=document.createElement("span");f.innerHTML="...",this.list.appendChild(f);for(var h=e-1;h<=e;h++){var u=this.createP(h);this.list.appendChild(u)}}else if(5<t&&t<e-4){for(var g=1;g<=2;g++){var c=this.createP(g);this.list.appendChild(c)}var m=document.createElement("span");m.innerHTML="...",this.list.appendChild(m);for(var v=t-2;v<=t+2;v++){var I=this.createP(v);this.list.appendChild(I)}var C=document.createElement("span");C.innerHTML="...",this.list.appendChild(C);for(var x=e-1;x<=e;x++){var P=this.createP(x);this.list.appendChild(P)}}else if(t==e-4){for(var y=1;y<=2;y++){var b=this.createP(y);this.list.appendChild(b)}var E=document.createElement("span");E.innerHTML="...",this.list.appendChild(E);for(var T=e-6;T<=e;T++){var H=this.createP(T);this.list.appendChild(H)}}else if(e-4<t){for(var L=1;L<=2;L++){var M=this.createP(L);this.list.appendChild(M)}var k=document.createElement("span");k.innerHTML="...",this.list.appendChild(k);for(var N=e-4;N<=e;N++){var w=this.createP(N);this.list.appendChild(w)}}},Pagination.prototype.move=function(){var a=this;this.ele.onclick=function(e){var t=(e=e||window.event).target||e.srcElement;"next"==t.className&&a.default.pageInfo.pagenum!=a.default.pageInfo.totalpage&&(a.default.pageInfo.pagenum++,a.addInfo()),"last"==t.className&&a.default.pageInfo.pagenum!=a.default.pageInfo.totalpage&&(a.default.pageInfo.pagenum=a.default.pageInfo.totalpage,a.addInfo()),"prev"==t.className&&1!=a.default.pageInfo.pagenum&&(a.default.pageInfo.pagenum--,a.addInfo()),"first"==t.className&&1!=a.default.pageInfo.pagenum&&(a.default.pageInfo.pagenum=1,a.addInfo()),"P"===t.nodeName&&(a.default.pageInfo.pagenum=+t.innerHTML,a.addInfo()),"BUTTON"==t.nodeName&&t.previousElementSibling.value!=a.default.pageInfo.pagenum&&(a.default.pageInfo.pagenum=+t.previousElementSibling.value,a.addInfo())}},Pagination.prototype.createP=function(e){var t=document.createElement("p");return t.innerHTML=e,setCss(t,{fontSize:"14px",display:"inline-block",width:"36px",height:"36px",textAlign:"center",background:"#fff",color:"#999",borderRadius:"4px",border:"1px solid# e9e9e9",margin:"7px",padding:"11px"}),e==this.default.pageInfo.pagenum&&setCss(t,{background:"#f5003f",color:"#fff"}),t};