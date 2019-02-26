<template>
    <div class="g">
			<div class="g1">
				
				<!-- {{shopshu}} -->
			
					<div class="h">
						<!-- <img src="/img/淘宝网 (2).png" class="h1"> -->
						<p style="font-size: 30px;color: orangered;margin-left: 210px;">Taobao.com</p>
						<div class="h2"><strong>购物车</strong></div>
						<input type="text" style="display: block;margin-top: -60px;margin-left: 858px;width: 450px;height: 50px;padding-left: 90px;border: 2px solid orangered;outline: none;">
						<div class="h3">宝贝</div>

						<div class="h4">搜索</div>
						<!-- <img src="/img/搜索.png" style="height: 15px;width: 15px;margin-left: 928px;margin-top: -32px;display: block;"> </div> -->
						<div class="zh">
							<div class="zh1">
								<ul class="zh2">
									<li><strong>全部商品 {{shopshu.length}}}</strong></li>
									<li><strong>降价商品 4</strong></li>
									<li><strong>库存紧张 0</strong></li>
								</ul>
								<div class="zh3">已选商品（不含运费）</div>
								<div class="zh4" id="zh4">0.00</div>
								<div class="zh5" id="zh5">结算</div>
							</div>
							<hr>
							<div class="zh6">
								<input type="checkbox" id="ccc" style='display: block;margin-left: 15px;float:left ;margin-top:20px ;' name="checkbox">
								<div class="zh7">全选</div>
								<div class="zh7" style="margin-left: 100px;">商品信息</div>
								<div class="zh7" style="margin-left: 300px;">单价</div>
								<div class="zh7" style="margin-left: 150px;">数量</div>
								<div class="zh7" style="margin-left: 150px;">金额</div>
								<div class="zh7" style="margin-left: 150px;">操作</div>
							</div>
							
							<div class='zh8' v-for="(item,index) in shopshu" :key="index">
								<div class="zh81">
									<input type="checkbox" name="checkbox" class="jian" id="za2" value="" />店铺：王家卖肉总经销
								</div>
								<div class="zh82">
									<input type="checkbox" name="checkbox" class="za3" value="" />
									<div class="zh83">
										<img :src="item.img_path" style="height:80px;width:80px;">
									</div>
									<div class="zh84">
										<p style="font-size: 15px;">【狂欢价】北欧风格小茶几现代简约迷你异形桌子大理石面小户型客厅圆形茶几</p>
										<p style="background: red;width: 55px;font-size: 15px;">狂欢季</p>
									</div>
									<div class="zh85">
										<p style="font-size: 15px;margin-top: 20px;margin-left: 25px;">颜色分类：黑色90*45cm（大）透明玻璃</p>
										<p style="font-size: 15px;margin-left: 25px;">安装方式：整装</p>

									</div>
									<div class="zh86">
										<p style="color: darkgray;text-decoration: line-through;">￥1288</p>
										<p class="jia">￥{{item.price}}</p>
										<p style="background: lightseagreen">卖家降价</p>

									</div>
									<div class="zh89">
										<p>移入收藏夹</p>
										<p class="s" style="margin-top: 15px;">  >删除商品 </p>
									</div>
								</div>
							</div>
							
						</div>

					</div>
    </div>
    </div>
</template>
<script>
    import axios from 'axios'; 
    import TouHead from "../components/TouHead";
    export default {
        data:function(){
            var m = 0;
		var cc = document.querySelectorAll('.zh8');
		for(var  i = 0; i < cc.length; i++) {

			(function(i){
				var dq = parseInt(cc[i].querySelector('.jia').innerHTML.substring(1));
			    var dd = cc[i].querySelector('.jian');
				dd.onclick=function(){
				if(!(dd.checked)) {
					$(dd).removeAttr('checked');
					m=m-dq;
				} else if(dd.checked) {
					$(dd).attr('checked', 'true');
					m = m + dq;
				}
				document.getElementById('zh4').innerHTML = m;
			   } 
			})(i)
		}
		var mp=0;
        var quan=document.getElementById('ccc');
        quan.onclick=function(){
            // alert('ss');
            if(!quan.checked) {
                for (var j = 0; j < cc.length; j++) {
                    var dg = parseInt(cc[j].querySelector('.jia').innerHTML.substring(1));
                    var dd = cc[j].querySelector('.jian');
                    $(dd).prop('checked','');
                    mp =0;
                }
            }
            else if(quan.checked){
                for (var j = 0; j < cc.length; j++) {
                    var dg = parseInt(cc[j].querySelector('.jia').innerHTML.substring(1));
                    var dd = cc[j].querySelector('.jian');
                    $(dd).prop('checked', 'checked');
                    mp = mp+dg;
                }

			}
            document.getElementById('zh4').innerHTML = mp;
        }

		var g4 = document.querySelector('.g4');
		var li = g4.getElementsByTagName('li');
		var po4 = document.querySelectorAll('.po4');

		for(var i = 0; i < li.length; i++) {

			li[i].onmouseenter = function() {
				this.style.background = 'white';
				this.style.color = 'red';
				var index = $(this).index();
				$('.po4').eq(index).show();

			}
			li[i].onmouseleave = function() {
				this.style.background = '';
				this.style.color = '';
				var index = $(this).index();
				$('.po4').eq(index).hide();

			}

		}
		var h = document.getElementById('h');
		var po = document.querySelector('.po');
		var h1 = document.getElementById('h1');
		var po3 = document.querySelector('.po3');
		h1.onmouseover = function() {
			po3.style.display = 'block';
			h1.style.border = '1px solid white';
		}
		h1.onmouseout = function() {
			po3.style.display = "none";
			h1.style.border = '';
		}
		h.onmouseover = function() {
			po.style.display = 'block';
			h.style.border = '1px solid white';
		}
		h.onmouseout = function() {
			po.style.display = "none";
			h.style.border = '';
		}


   


            return{
               shopshu:""
            }
        },
        mounted(){
           axios.get('/server/user/lookfor',{
               params:{
                   name:this.$route.params.id
               }
           }).then((val)=>{
               console.log(val);
            //    console.log(val.data.shops);
            this.shopshu=val.data.shops;
           })
        },
        components:{
            TouHead
        }
    };




        // var m = 0;
		// var cc = document.querySelectorAll('.zh8');
		// for(var  i = 0; i < cc.length; i++) {

		// 	(function(i){
		// 		var dq = parseInt(cc[i].querySelector('.jia').innerHTML.substring(1));
		// 	    var dd = cc[i].querySelector('.jian');
		// 		dd.onclick=function(){
		// 		if(!(dd.checked)) {
		// 			$(dd).removeAttr('checked');
		// 			m=m-dq;
		// 		} else if(dd.checked) {
		// 			$(dd).attr('checked', 'true');
		// 			m = m + dq;
		// 		}
		// 		document.getElementById('zh4').innerHTML = m;
		// 	   } 
		// 	})(i)
		// }
		// var mp=0;
        // var quan=document.getElementById('ccc');
        // quan.onclick=function(){
        //     // alert('ss');
        //     if(!quan.checked) {
        //         for (var j = 0; j < cc.length; j++) {
        //             var dg = parseInt(cc[j].querySelector('.jia').innerHTML.substring(1));
        //             var dd = cc[j].querySelector('.jian');
        //             $(dd).prop('checked','');
        //             mp =0;
        //         }
        //     }
        //     else if(quan.checked){
        //         for (var j = 0; j < cc.length; j++) {
        //             var dg = parseInt(cc[j].querySelector('.jia').innerHTML.substring(1));
        //             var dd = cc[j].querySelector('.jian');
        //             $(dd).prop('checked', 'checked');
        //             mp = mp+dg;
        //         }

		// 	}
        //     document.getElementById('zh4').innerHTML = mp;
        // }

		// var g4 = document.querySelector('.g4');
		// var li = g4.getElementsByTagName('li');
		// var po4 = document.querySelectorAll('.po4');

		// for(var i = 0; i < li.length; i++) {

		// 	li[i].onmouseenter = function() {
		// 		this.style.background = 'white';
		// 		this.style.color = 'red';
		// 		var index = $(this).index();
		// 		$('.po4').eq(index).show();

		// 	}
		// 	li[i].onmouseleave = function() {
		// 		this.style.background = '';
		// 		this.style.color = '';
		// 		var index = $(this).index();
		// 		$('.po4').eq(index).hide();

		// 	}

		// }
		// var h = document.getElementById('h');
		// var po = document.querySelector('.po');
		// var h1 = document.getElementById('h1');
		// var po3 = document.querySelector('.po3');
		// h1.onmouseover = function() {
		// 	po3.style.display = 'block';
		// 	h1.style.border = '1px solid white';
		// }
		// h1.onmouseout = function() {
		// 	po3.style.display = "none";
		// 	h1.style.border = '';
		// }
		// h.onmouseover = function() {
		// 	po.style.display = 'block';
		// 	h.style.border = '1px solid white';
		// }
		// h.onmouseout = function() {
		// 	po.style.display = "none";
		// 	h.style.border = '';
		// }
</script>
<style>
*{
	padding: 0;
	margin: 0;
}
.g{
	height: 800px;
	width: 1600px;
	/*background: red;*/
    line-height:10px;
}
.g1{
	height: 40px;
	width: 1600px;
	background:lightgray;
	line-height: 40px;
}
.g1>div:first-child{
	margin-left:200px;
	width:120px;
	/*border: 1px solid white;*/
}
.g1>div{
	height: 40px;
	float:left;
	margin-left:10px;
}
.g2:hover{
	color:red;
}
.za{
	display: block;
	margin-top: 10px;
	width: 10px;
	height: 10px;
	margin-top: -22px;
	margin-left: 100px;
	
}
.po{
	position: absolute;
	border: 1px solid blue;
	background: white;
	width: 260px;
	height: 150px;
	top: 40px;
	display: none;
}
.po3{
	position: absolute;
	border: 1px solid blue;
	width: 260px;
	height: 250px;
	top: 40px;
	display: none;
}
.po31{
	height: 40px;
	width: 260px;
	background: greenyellow;
	text-align: center;
	line-height: 40px;
}
.po32{
	width: 260px;
	height: 180px;
}
.po33{
	height: 30px;
	width: 260px;
	background: blue;
	text-align: center;
	line-height: 30px;
}
.po32>img{
	width: 260px;
	height: 180px;
}
.po1{
	line-height: 20px;
	height: 20px;
	width: 260px;
	/*border:1px solid white;*/
	margin-top:10px;
	
	
}
.po11>li{
	list-style: none;
	float: right;
	padding-left:5px;
	padding-right: 5px;
}
.po11>li:last-child{
	border-right: 1px solid gray;
}
.za1{
	display: block;
	height: 70px;
	width: 70px;
	border-radius: 35px;
	margin-top: 10px;
	margin-left: 30px;
}
.po>p{
	margin-top:-35px;
	margin-left:130px;
	line-height: 30px;
}
.po2{
	height: 30px;
	width: 220px;
	margin-top:30px;
	background: lightpink;
	margin-left: 20px;
	text-align: center;
	line-height: 30px;
	
}
.g3{
	
	position: absolute;
	left: 680px;
	height: 40px;
	width: 750px;
	
	/*background:green;*/
}
.g4>li{
	list-style: none;
	float: left;
	/*color: white;*/
}
.po4{
	height: 70px;
	width: 120px;
	background: white;
	position: absolute;
	top: 40px;
	line-height: 30px;
	font-size: 15px;
    display:none ;
}
.h{
	height: 120px;
	width: 1600px;
	background: white;
}
.h1{
	display: block;
	height: 60px;
	width: 200px;
	
	margin-left: 200px;
	padding-top: 20px;
}
.h2{
	font-size: 30px;
	margin-top:-60px ;
	margin-left: 420px;
}
.h3{
	height: 50px;
	width: 65px;
	background: lightgray;
	line-height: 50px;
	margin-left:860px ;
	margin-top: -52px;
	text-align: center;
	font-size: 15px;
}
.h4{
	height: 50px;
	width: 85px;
	line-height: 50px;
	background:orangered;
	margin-left: 1317px;
	margin-top: -50px;
	text-align: center;
	color: white;
	line-height: 50px;
	
	/*font-size: 22px;*/
}
.zh{
	height: 400px;
	width: 1200px;
	margin-left: 200px;
	
	/*background: greenyellow;*/
	margin-top: 50px;
}
.zh1{
	height:42px;
	width: 1200px;
	background: white;
	
}
.zh2>li{
	list-style: none;
	float: left;
	display: block;
	height: 26px;
	width: 120px;
	border-right:1px solid green;
	margin-top: 8px;
	font-size: 20px;
	text-align: center;
}
.zh2>li:last-child{
	border-right: none;
}
.zh3,.zh4,.zh5{
	float: left;
	margin-top: 11px;
}
.zh3{
	margin-left: 555px;
}
.zh5{
	height: 20px;
	width: 60px;
	text-align: center;
	line-height: 20px;
	background: darkgray;
	margin-left: 8px;
}
.zh6{
	width: 1200px;
	height: 50px;
	/*border: 1px solid red;*/
	line-height:50px;
	background: white;
}
.zh7{
	float: left;
}
.zh8{
	height: 150px;
	width: 1200px;
	margin-top: 15px;
	/*border: 1px solid red;*/
}
.zh81{
	height: 30px;
	width: 1200px;
	background: white;
	line-height: 30px;
}
#za{
	margin-left:15px;
}
.zh82{
	height: 120px;
	width: 1200px;
	border:1px solid red;
}
.za3{
	margin-left: 25px;
	margin-top:18px;
}
.zh83{
	height: 80px;
	width: 80px;
	border: 1px solid black;
	margin-top: -15px;
	margin-left: 48px;
}
.zh84{
	height: 80px;
	width: 220px;
	margin-left:136px;
	/*border:1px solid red;*/
	margin-top: -80px;
}
.zh85{
	width: 200px;
	height: 110px;
	/*border:1px dotted red;*/
	margin-top: -98px;
	margin-left: 400px;
}
.zh86{
	width: 80px;
	height: 63px;
	/*border: 1px solid red;*/
	background: lightgray;
	margin-top: -108px;
	margin-left: 700px;
}
.zh89{
	width: 100px;
	height: 60px;
	/*border: 1px solid red;*/
	margin-top: -58px;
	margin-left: 1000px;
}

</style>
