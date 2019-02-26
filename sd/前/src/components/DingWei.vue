
<template>
    <div :class="[ding==true ? 'ding':'ding2']">
        <div class="ding-div" @click="xia1" style="color:#F40">
              爱逛好货
        </div>
        <div class="ding-div" @click="xia2" style="color:#f05">
             商品筛选
        </div>
        <div class="ding-div" @click="xia3" style="color:#8d7afb">
            猜你喜欢
        </div>
        <div class="ding-div" @click="xia4" style="color:#A8C001">
            返回顶部
        </div>
        <div class="ding-div" @click="xia5" style="color:rgb(179, 200, 33)">
            直达底部
        </div>
        <div class="ding-div" style="padding-top:20px;color:#F40" >
            反馈
        </div>
    </div>
</template>
<script>
    export default {
        data:function(){
            var that=this;
            window.onscroll=function(){
       
            let t=document.documentElement.scrollTop || document.body.scrollTop;
            console.log(t);
            if(t>580){
                that.ding=false;
            }
            
            if(t<580){
                that.ding=true;
                $('.ding-div').eq(0).css('background-image',"linear-gradient(135deg,#ff971b,#ff5000)").siblings().css('background','white');
            }
            if(t>1200 &&t<2180){
                $('.ding-div').eq(1).css('background',"orange").siblings().css('background','white');
            }
            if(t>2180){
                $('.ding-div').eq(2).css('background',"orange").siblings().css('background','white');
            }
          
            }
            // this.pheight= document.body.offsetHeight;
            return{
               ding:true
            }
        },
        mounted(){
           
        },
        methods:{
            xia1(){
                $('html').animate({
                    scrollTop:200
                },1000)
            },
            xia2(){
                $('html').animate({
                    scrollTop:1201
                },1000)
            },
            xia3(){
                $('html').animate({
                    scrollTop:2200
                },1000)
            },
            xia4(){
                $('html').animate({
                    scrollTop:0
                },1000)
             },
            xia5(){
               $('html').animate({
                    scrollTop:10000
                },1000)
            }

        }
    };
</script>
<style>
.ding{
    width:60px;
    height:370px;
    background:white;
    position: absolute;
    top:600px;
    left:1560px;
    z-index:12000;
    overflow: hidden;
    border-radius: 12px;
}
.ding2{
    width:60px;
    height:370px;
    background:white;
    position:fixed;
    top:10px;
    left:1560px;
    z-index:12000;
    overflow: hidden;
    border-radius: 12px;
}
.ding-div{
    height:60px;
    width:60px;
    border:1px solid lightgray;
    float: left;
    padding:10px 10px;
    cursor: pointer;

}
</style>

