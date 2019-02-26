<template>
    <div class="lunbo">
          <div class="lunbo-top">
              <div class="block" >
                  <el-carousel height="295px" >
                     <el-carousel-item v-for="item in 5" :key="item">
                        <img :src="`/static/${item}.jpg`" style="width: 100%;height: 295px;">
                     </el-carousel-item>
                  </el-carousel>
             </div>
              <div class="lunbo-top-right">
                   <img src="https://img.alicdn.com/imgextra/i3/140/O1CN011Cu9vAndj8MYh8S_!!140-0-lubanu.jpg_290x290q90.jpg">
              </div>
             
          </div>

          <div class="lunbo-bottom">
             <div class="lunbo-bottom-zuo">
                    <div class="lunbo-bottom-top">
                  <div class="lun-top">
                     <img  style="left:0"  src="data:image/png;base64,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">
                     <span style="left:140px;bottom:3px">理想生活上天猫</span>
                     <span style="right:12px;top:10px;font-size:14px">
                         <i class="xx"></i>/6
                     </span>
                  </div>
                  <ul class="lun-buttom">
                       <li v-for="item in 6" :key="item" @click="banner(item)"></li>
                  </ul>
              </div>
              <div class="lunbo-bottom-bottom">
                    <div class="lun-bottom">
                         <div class="lun-bottom-div x">
                              <img src="https://img.alicdn.com/simba/img/TB1F2IAlOrpK1RjSZFhSutSdXXa.jpg" alt="">
                              <img src="https://img.alicdn.com/simba/img/TB1I3rxmgHqK1RjSZFgSuu7JXXa.jpg" alt="">
                         </div>
                         <div class="lun-bottom-div y">
                              <img src="https://img.alicdn.com/imgextra/i4/200/O1CN011DLdgWfxI1TxrVz_!!200-0-lubanu.jpg_200x200q90.jpg" alt="">
                              <img src="https://img.alicdn.com/imgextra/i4/96/O1CN011Ca0UfVhYnyhFAD_!!96-0-lubanu.jpg_200x200q90.jpg" alt="">
                              <img src="https://img.alicdn.com/imgextra/i3/200/O1CN011DLdgYWYSdXD9oU_!!200-0-lubanu.jpg_200x200q90.jpg" alt="">
                              <img src="https://img.alicdn.com/imgextra/i1/100/O1CN011Cbq4um0eKKuMFK_!!100-0-lubanu.jpg_200x200q90.jpg" alt="">
                         </div>
                         <div class="lun-bottom-div y">
                               <img src="https://img.alicdn.com/imgextra/i3/87/O1CN011CVsvgPojuEfW5X_!!87-0-lubanu.jpg_200x200q90.jpg" alt="">
                               <img src="https://img.alicdn.com/imgextra/i1/113/O1CN011ChnEABrqiT52nh_!!113-0-lubanu.jpg_200x200q90.jpg" alt="">
                               <img src="https://img.alicdn.com/imgextra/i4/105/O1CN011Ce83guF3tRGoBk_!!105-0-lubanu.jpg_200x200q90.jpg" alt="">
                               <img src="https://img.alicdn.com/imgextra/i1/79/O1CN011CSDlDXEEVIxTSP_!!79-0-lubanu.jpg_200x200q90.jpg" alt="">
                         </div>
                         <div class="lun-bottom-div x">
                               <img src="https://img.alicdn.com/tps/i4/TB1QsoYl4naK1RjSZFtSuvC2VXa.jpg_240x240q90.jpg" alt="">
                               <img src="https://img.alicdn.com/tps/i4/TB1S4UZlNjaK1RjSZKzSutVwXXa.jpg_240x240q90.jpg" alt="">

                         </div>
                         <div class="lun-bottom-div x">
                                <img src="https://img.alicdn.com/tps/i4/TB1ivZylxTpK1RjSZFMSuvG_VXa.jpg_240x240q90.jpg" alt="">
                                <img src="https://img.alicdn.com/tps/i4/TB1nlIWmbvpK1RjSZPiSuvmwXXa.jpg_240x240q90.jpg" alt="">
                         </div>
                         <div class="lun-bottom-div x">
                              <img src="https://img.alicdn.com/simba/img/TB1F2IAlOrpK1RjSZFhSutSdXXa.jpg" alt="">
                              <img src="https://img.alicdn.com/simba/img/TB1I3rxmgHqK1RjSZFgSuu7JXXa.jpg" alt="">
                         </div>
                    </div>
                    <div class="lb lun-bottom-left" style="left:0;top:80px" @click="prev()">
                        <span class="fa fa-chevron-left"></span>
                    </div>
                    <div class="lb lun-bottom-right" style="right:0;top:76px" @click="next()">
                        <span class="fa fa-chevron-right"></span>
                    </div>

              </div>
             </div>
             <div class="lunbo-bottom-you">
                 <p style="font-size:13px;text-align:left;color:gray">今日热卖</p>
                 <img style="width:150px;height:200px" src="https://img.alicdn.com/simba/img/TB13XEql6DpK1RjSZFrSuu78VXa.jpg" alt="">
             </div>
          </div>


   </div>
</template>
<script>
    export default {
        data:function(){
            return{
               num:0
            }
        },
        methods:{
            zhu:function(){
                var that=this
                setInterval(function(){ 
                    that.next();
               },4000)
            },
             
            next:function(){
                this.num++;  
                if(this.num>5){
                    this.num=1;
                    $('.lun-bottom').css('left','0')
                 }
                 this.animated(this.num);
                //  console.log(1);

            },
            prev:function(){
                 this.num--;
                 if(this.num<0){
                    this.num=4;
                    $('.lun-bottom').css('left','-2650px')
                 }
                 this.animated(this.num);

            },
            animated:function(num){
                 $('.lun-buttom li').eq(num).css('border','1px solid black').siblings().css('border','1px solid #ff1648');
                 $('.xx').html(num+1).css('color',' #ff1648');
                 $('.lun-bottom').stop().animate({
                   left:-(530*num)+'px'
                },1000)
            },
            banner:function(index){
                // console.log(index);
                this.num=index;
            }

            

        },
        mounted(){
          
            this.zhu()
   
          }
    };
    

    // function next(){
    //     num++;  
    //     if(num>5){
    //         num=1;
    //         $('.lun-bottom').css('left','0')
    //     }
    //     animated(num);
    // }
    // function prev(){
    //     num--;
    //     if(num<0){
    //         num=4;
    //         $('.lun-bottom').css('left','-2650px')
    //     }
    //     animated(num);
    // }
    // function animated(num){
    //         $('.lun-buttom li').eq(num).css('border','1px solid black').siblings().css('border','1px solid #ff1648');
    //         $('.xx').html(num+1).css('color',' #ff1648');
    //         $('.lun-bottom').stop().animate({
    //           left:-(530*num)+'px'
    //         },1000)
    // }
    //     }
    // };
   
</script>
<style >
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-carousel__button{
      height: 10px;
      width: 10px;
      border-radius: 5px;
 
  }
  .lunbo-top{
      width: 100%;
      height: 290px;
      /* overflow: hidden; */
  }
  .lunbo .block{
        height:100%;
        width: 530px;
        float: left;
        margin-top: 5px;
        
  }
  .lunbo-top-right{
      float:left;
      height:290px;
      width:150px;
      margin-top:5px;
      border:1px solid red;
      margin-left:10px
  }
  .lunbo-top-right img{
      height:290px;
      width: 150px;
      /* margin: 5px 10px; */
  }

  .lunbo-bottom{
      margin-top: 14px;
      /* width: 530px; */
      overflow: hidden;
  }
  .lunbo-bottom-top{
      height:30px;
      width: 530px;
      /* border: 1px solid red; */
      overflow: hidden;
     
  }
  .lunbo-bottom-zuo{
      width: 530px;
      float: left;

  }
  .lunbo-bottom-you{
      width: 150px;
      height: 200px;
      margin-left:8px;
      margin-top: 10px;
      /* border: 1px solid red; */
      float: left;
  }

  .lun-top{
      position: relative;
      height: 32px;
      width: 100%;
      text-align: left;
      overflow: hidden;
  }
  .lun-top img,.lun-top span{
      position:absolute;
      bottom: 0;
      font-size: 12px;
  }
  .lun-buttom{
      list-style: none;
      overflow: hidden;
      margin-top:-4px;
      position: absolute;

  }
  
  .lun-buttom>li{
      list-style: none;
      float: left;
      border: 1.6px solid #ff1648;
      z-index:10;
      /* height: 1px; */
      width: 88px;
  }

  .lunbo-bottom-bottom{
      height: 200px;
      width: 530px;
      /* margin: 0 auto; */
      background:red;
      margin-top: 10px;
      position: relative;
      overflow: hidden;
  }
  .lun-bottom{
      position: absolute;
      left: 0;
      top: 0;
      height: 200px;
      width: 3710px;
      overflow: hidden;
  }
  .lb{
      position: absolute;
      top:80px;
      height: 40px;
      width: 40px;
      border-radius: 20px;
      background: gray;
      text-align: center;
      line-height: 40px;
      font-size: 15px;
      opacity: 0.4;
  }
  .lb:hover{
      opacity: 1;
  }
  .lun-bottom>div{
      height: 200px;
      width: 530px;
      float: left;
      overflow: hidden;
  }
  .x img{
      width: 50%;
      height: 200px;
      float: left;
  }
  .y img{
      height: 200px;
      width: 25%;
      float: left;
  }
  
</style>
