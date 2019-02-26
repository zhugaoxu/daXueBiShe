<template>
   <div class="toutou">
    <div class="touhead">
        <ul class="left">
            <li>
                <span>中国大陆</span>
                <span class="fa fa-chevron-down"></span>
            </li>
            <li v-if="users==null ">
                亲，请登录
            </li>
            <li v-else>
                <span>欢迎你：{{users}}</span>
                <span class="fa fa-chevron-down"></span>

                <div class="touhead-div di">
                      <div style="width:100%;height:25px;text-align:right">
                            <span style="padding:0 10px;border-right:1px solid gray">账号管理</span>
                            <span style="padding:0px 10px;cursor:pointer" @click="tuichu">退出</span>
                      </div>
                      <div style="width:100%;height:60px;overflow:hidden;padding-left:20px">
                           <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg"  style="width:60px;height:60px;border-radius:30px;float:left;margin-top:-1px">
                           <div style="float:left;margin-left:20px;line-height:20px;padding-top:10px">
                               <p>淘气值：536</p>
                               <p>普通会员</p>
                           </div>
                      </div>
                      <div style="width:100%;height:25px;">
                          <div style="width:96%;margin-left:2%;text-align:center;background:#FFF0E8">
                              查看属于你的专属权益
                          </div>
                      </div>
                </div>
            </li>
            <li>
                <span class="fa fa-file-text-o"></span>
                <span>消息</span>
            </li>
            <li>
                <span>手机逛淘宝</span>
            </li>
        </ul>
        <ul class="right">
            <li>
                <span>我的淘宝</span>
                <span class="fa fa-chevron-down"></span>

                <div class="touhead-div">
                    <p>已买到的宝贝</p>
                    <p>我的足迹</p>
                </div>
            </li>
            <li v-if="users==null ">
                <span>购物车</span>
                <span class="fa fa-chevron-down"></span>

                
            </li>
            <li v-else>
                <span>
                    <router-link :to="{name:'shopping',params:{id:users} } " style="color:#2c3e50;">购物车</router-link>
                </span>
                <span class="fa fa-chevron-down"></span>

                
            </li>
            <li>
                <span>收藏夹</span>
                <span class="fa fa-chevron-down"></span>

                <div class="touhead-div">
                    <p>收藏的宝贝</p>
                    <p>收藏的店铺</p>
                </div>
            </li>
            <li>
                <span>商品分类</span>
                <!-- <span class="fa fa-chevron-down"></span> -->
            </li>
            <li>
                <span>卖家中心</span>
                <span class="fa fa-chevron-down"></span>

                <div class="touhead-div">
                    <p>免费开店</p>
                    <p>已卖出的宝贝</p>
                    <p>出售中的宝贝</p>
                    <p>卖家服务市场</p>
                    <p>卖家培训中心</p>
                    <p>体验中心</p>
                    <p>问商友</p>
                </div>
            </li>
            <li>
                <span>联系客服</span>
                <span class="fa fa-chevron-down"></span>

                <div class="touhead-div">
                    
                </div>
            </li>
            <li>
                <span class="fa fa-align-justify"></span>
                <span>网站导航</span>
                <span class="fa fa-chevron-down"></span>
            </li>
            <div style="clear:both;"></div> 
        </ul>
        <div style="clear:both;"></div> 
    </div>
    <div class="toubody" >
          <div style="overflow:hidden">
             <img src="https://img.alicdn.com/tfs/TB1uaq6kYrpK1RjSZTEXXcWAVXa-160-160.png" style="float:left;height:72px;width:100px;">
             <div style="height:72px;width:1060px;float:left;margin-left:10px;overflow:hidden">
                 <div v-for="(item,index) in toubiao" :key="index" class="tou-biao" style="cursor:pointer">
                    <img :src="item.bgc" alt="" style="position:absolute;left:0;top:0;width:95%;height:100%">
                    <img :src="item.img_path" style="position:absolute;left:115px;top:10px;height:50px;width:50px;border-radius:4px" >
                    <p style="text-align:left;position:absolute;left:20px;top:10px;font-size:20px;font-weight:400;color:white">{{item.biao}}</p>
                    <p style="text-align:left;position:absolute;left:20px;top:40px;font-size:15px;color:white">{{item.des}}</p>
                 </div>
             </div>
          </div>
    </div>
    <div class="toufoot">
         <div class="toufoot-left">
              <img src="https://img.alicdn.com/tfs/TB13f0NmgHqK1RjSZFEXXcGMXXa-190-121.gif" alt="">
         </div>
         <div class="toufoot-right">
             <div style="width:640px;float:left">
              <ul class="toofoot-right-ul" style="margin-left:20px">
                 <li>
                     <a>宝贝</a>
                </li>
                <li>
                    <a>天猫</a>
                </li>
                <li>
                     <a>店铺</a>
                </li>
             </ul>
                
             <div style="width:630px;height:44px;border:2px solid #ff5000;border-radius:22px;overflow:hidden">
                <input type="text" class="toufoot-input" style="margin-left:10px;display:inline-block;float:left;border:none;" placeholder="请选择你想要的商品">
                <img src="/static/xiang.png" style="width:30px;padding-top:5px;display:inline-block;float:left;margin-left:15px" alt="">
                <button style="width:80px;height:44px;margin-top:-2px;margin-left:19px;display:inline-block;float:left;border-bottom-right-radius:22px;border-top-right-radius:22px;background-image:linear-gradient(to right,#ff9000 0,#ff5000 100%); padding-right:2px;color:white;font-size:16px;font-weight:400">搜索</button>
             </div>
             <ul class="toofoot-right-ull">
                <!-- <li>男运动套装</li>
                <li>夹克</li>
                <li>夹克外套</li>
                <li>男士外套</li>
                <li>新款男鞋</li>
                <li>沙发</li>
                <li>男运动鞋</li>
                <li>男皮鞋</li>
                <li>男士内裤</li>
                <li>时尚休闲裤</li>
                <li>男牛仔裤</li> -->
                <li v-for="(item,index) in touxuan" :key="index" >
                    <router-link :to="{name:'fenlei',params:{ name:item.name  } }">{{item.uname}}</router-link>
                </li>
                <li>男士内裤</li>
                <li>时尚休闲裤</li>
                <li>男牛仔裤</li> 

             </ul>
           </div>

           <div style='width:250px;height:100%;float:left;margin-left:15px'>
                <img style="height:110px;margin-left:50px;padding-bottom:8px" src="https://img.alicdn.com/tfs/TB1O9dXmjTpK1RjSZKPXXa3UpXa-120-120.png" alt="">
           </div>
         </div>
         
    </div>
  </div>

</template>
<script>
    import axios from 'axios';
    export default {
        data:function(){
            return{
                users:"",
                toubiao:"",
                touxuan:""
            }
        },
        methods:{
            tuichu(){
                  this.$cookies.remove('username');
                  axios.get('/server/tuichu').then((val)=>{
                    //   console.log(val);
                      if(val.data.error==0){
                         location.href='/'
                        }
                  })
            }

        },
        mounted(){
           this.users=this.$cookies.get('username');
           axios.get('/server/user/xian',{
               params:{
                   name1:"toubiao"
               }
           }).then((val)=>{
            //    console.log(val.data.result.cataList);
               this.toubiao=val.data.result.cataList
           })


           axios.get('/server/user/xian',{
               params:{
                    name1:"xuan"
                }
            }).then(res=>{
            //    console.log(res);
               this.touxuan=res.data.result.cataList;
            //    console.log(this.youce);
           });
        }
    };

    
</script>
<style>
     .toutou{
         width: 100%;

     }
     .toutou a{
         color:rgb(44, 62, 80);
     }
     .touhead{
         width: 1200px;
         margin: 0 auto;
         /* background: green; */
         /* height: 100%; */
         /* overflow: hidden; */
     }
     .touhead .left{
         float: left;
         /* overflow: hidden; */
     }
     .touhead .right{
         float: right;
         /* overflow: hidden; */
     }
     .touhead .left>li,.touhead .right>li{
         list-style: none;
         float: left;
         /* width: 80px; */
         margin-left: 30px;
         font-size: 12px;
         padding: 8px 5px;
         cursor: pointer;
         position: relative
     }

     .touhead-div{
         position: absolute;
         top: 32px;
         left: 4px;
         background:white;
         z-index:99;
         text-align: left;
         line-height: 25px;
         min-width: 90px;
         display: none;
         /* border-bottom-right-radius:  */
     }
     .touhead-div>p:hover{
         background:gray;
         /* color:red; */
     }
     .touhead .di{
         width: 210px;
         height: 110px;
         /* border: 1px solid green; */
        
     }
     .touhead li:hover .touhead-div{
         display: block;
     }
     .touhead>ul>li:hover .touhead>ul>li>span{
         color:red;
     }
     .toubody{
         height:100px;
         padding-top: 15px;
         width: 100%;
         background-image: url('https://img.alicdn.com/tfs/TB1dtrqk4naK1RjSZFtXXbC2VXa-1920-100.png');
     }
     .toubody>div{
         height:72px;
         width: 1200px;
         margin:0 auto;
         
         /* border: 1px solid white; */
     }
     .tou-biao{
         height:72px;
         width: 190px;
         float: left;
         /* border:1px solid red; */
         position:relative;
         margin-left:20px;
     }
     .toufoot{
         height:140px;
         width: 1200px;
         margin: 0 auto;
         background: white;
         overflow: hidden;
     }
     .toufoot>div{
        float: left;
     }
     .toufoot-left{
         width: 194px;
         height: 100%;
         padding-top:10px;
     }
     .toufoot-right{
         height: 100%;
         padding-top: 30px;
         padding-left: 65px;
         /* background:red; */
         width: 1000px;
         text-align: left;
         overflow: hidden;
         
     }
     .toufoot-right ul{
         list-style: none;
         overflow: hidden;
     }
     .toufoot-right ul>li{
         float: left;
         list-style: none;
     }
     .toufoot-input{
         padding: 6px 0;
         text-indent: 10px;
         height: 24px;
         line-height: 24px;
         width: 472px;
         outline:none;
         margin-top:10px;
     }
     .toofoot-right-ull {
         margin-top:6px;
     }
     .toofoot-right-ull li{
         font-size: 13px;
         padding-right:8px;
         cursor: pointer;
     }
     .toofoot-right-ul>li>a{
         padding: 2px 4px;
         
     }
</style>
