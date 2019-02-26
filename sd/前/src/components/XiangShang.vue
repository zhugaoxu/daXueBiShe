<template>
    <div class="xiang">
            <div class="xiang-left">
                 <div class="xiang-left-kuai">
                     <img src="https://img.alicdn.com/tfs/TB1KbhkbUgQMeJjy0FeXXXOEVXa-129-26.png">
                     <p>让你的生活更加有趣</p>
                 </div>
            </div>
            <div class="xiang-right">
                 <div class="xiang-right-ding">
                     <div class="xiang-right-wei" >
                            <div class="xiang-right-zhi">
                                <div class="xiang-zhi-left">
                                      <img src="https://img.alicdn.com/imgextra/i4/3979119722/O1CN012Lgj1SmLQWmTMrS_!!3979119722-0-beehive-scenes.jpg_120x120q90.jpg" alt="">   
                                </div>
                                <div class="xiang-zhi-right">
                                      <h4>万圣节想要往哪去？良夜二次游园会等你来</h4>
                                      <p>
                                          哈喽，大家好，我是真的不想过来吐槽。但是真的没办法，为了凑字数，我也是真的拼了
                                      </p>
                                </div>
                            </div>
                     </div>
                     <div class="xiang-right-wei" >
                            <div class="xiang-right-zhi">
                                <div class="xiang-zhi-left">
                                      <img src="https://img.alicdn.com/imgextra/i4/4116822903/O1CN011XJcFYBbpvJutSi_!!4116822903-0-beehive-scenes.jpg" alt="">   
                                </div>
                                <div class="xiang-zhi-right">
                                      <h4>大魔王带你细数那些有趣的万圣节故事</h4>
                                      <p>
                                          哈喽，大家好，我是真的不想过来吐槽。但是真的没办法，为了凑字数，我也是真的拼了
                                      </p>
                                </div>
                            </div>
                     </div>
                     <div class="xiang-right-wei" >
                            <div class="xiang-right-zhi">
                                <div class="xiang-zhi-left">
                                      <img src="https://img.alicdn.com/tfscom/i4/O1CN011xkLN8KXSMuvdfS_!!0-arctic.jpg" alt="">   
                                </div>
                                <div class="xiang-zhi-right">
                                      <h4>天猫双11推出万台汽车一口价"特卖活动"</h4>
                                      <p>
                                          哈喽，大家好，我是真的不想过来吐槽。但是真的没办法，为了凑字数，我也是真的拼了
                                      </p>
                                </div>
                            </div>
                     </div>
                     <div class="xiang-right-wei" >
                             <div class="xiang-right-zhi">
                                <div class="xiang-zhi-left">
                                      <img src="https://img.alicdn.com/imgextra/i4/3979119722/O1CN012Lgj1SmLQWmTMrS_!!3979119722-0-beehive-scenes.jpg_120x120q90.jpg" alt="">   
                                </div>
                                <div class="xiang-zhi-right">
                                      <h4>万圣节想要往哪去？良夜二次游园会等你来</h4>
                                      <p>
                                          哈喽，大家好，我是真的不想过来吐槽。但是真的没办法，为了凑字数，我也是真的拼了
                                      </p>
                                </div>
                            </div>
                     </div>
                 </div>
                   
            </div>
    </div>
</template>
<script>
    let num=0; 
    setInterval(next,5000);

    function next(){
        num++;  
        if(num>3){
            num=1;
            $('.xiang-right-ding').css('top','0')
        }
        animated(num);
    }
    function animated(num){
            $('.xiang-right-ding').stop().animate({
              top:-(110*num)+'px'
            },1000)
    }
        


    export default {
        data:function(){
            return{

            }
        },
        mounted(){
           
        }
    };
</script>
<style >

   .xiang{
       width: 895px;
       height: 110px;
       /* background: red; */
       overflow: hidden;
   }
   .xiang-left{
       width: 193px;
       height: 100%;
       /* background: blue; */
       float: left;
   }
   .xiang-left-kuai{
       width: 135px;
       height: 55px;
       /* border: 1px solid red; */
       margin-top: 23px;
       margin-left: 20px;
       font-size:12px;
       text-align: left;
       line-height: 25px;
   }
   .xiang-right{
       width:700px;
       height: 110px;
       /* background: purple; */
       float: left;
       position: relative;
   }
   .xiang-right-ding{
       width: 700px;
       height: 440px;
       position: absolute;
       top: 0;
       left: 0;
       /* background: green; */
       overflow: hidden;
   }
   .xiang-right-wei{
       height: 110px;
       width: 700px;
       float: left;
   }
   .xiang-right-zhi{
       width: 97%;
       height: 85px;
       /* border: 1px solid white; */
       
       margin-top: 10px;
       margin-left: 1%;
       overflow: hidden;
   }
   .xiang-zhi-left{
       float: left;
       width: 140px;
       height: 100%;
       /* border: 1px solid red; */
   }
   .xiang-zhi-left img{
       width: 100%;
       height: 100%;
   }
   .xiang-zhi-right{
       float: left;
       width: 532px;
       height: 100%;
       /* border:1px solid blue; */
       margin-left: 4px;
       /* background: purple; */
       text-align: left;
   }
   .xiang-zhi-right>h4{
       line-height: 28px;
       font-size: 16px;
       font-weight: 500;
   }
   .xiang-zhi-right>p{
       line-height: 22px;
       font-size: 15px;
       /* font-weight: 200; */
       color: gray;
   }
</style>
