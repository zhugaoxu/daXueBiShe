<template>
    <div class="youce">
        <div class="youce-head">
            <div class="youce-head-tou">
                <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" alt="">
                
            </div>
            <div v-if="usexin==null " class="youce-head-foot">
                <router-link :to="{name:'denglu',params:{username:'denglu'}}" style="padding:3px 20px">登录</router-link>
                <router-link :to="{ name:'zhuce', params:{username:'zhu'}}">注册</router-link>
                <a>开店</a>
            </div>
            <div v-else class="youce-head-foot">
                <router-link  :to="{name:'denglu',params:{username:'denglu'}}" style="padding:3px 20px">代发货</router-link>
                <router-link :to="{ name:'zhuce', params:{username:'zhu'}}" >待收货</router-link>
                <router-link :to="{name:'dingdan',params:{id:usexin}}">订单</router-link>
            </div>
        </div>
        <div class="youce-head-head">
            <span>网上有害举报专区</span>
            <span class="fa fa-play" style="display:inline-block;margin-left:50px;"></span>
        </div>

        <div class="youce-body">
             <ul>
                 <li v-for="(item,index) in youce" :key="index" @mouseover="xian(index)" class="youce-hod">
                     <span class="youce-xian" style="padding-bottom:2px">
                         {{item.name}}
                     </span>
                     <div class="youce-body-zhu">
                         <p v-for="(items,index) in item.xuan" :key="index">
                             {{items.uname}}
                         </p>
                     </div>
                 </li>
             </ul>
        </div>
        <div class="youce-xia">
             <div class="youce-xia-fen" v-for="(item,index) in zuoce" :key="index">
                 <img :src="item.img_path" alt="" style="width:30px;height:30px;margin-top:10px;margin-bottom:5px">
                 <p>{{item.name}}</p>
             </div>
        </div>

        <div class="youce-footer">
            <p style="text-align:left;font-weight:700;font-size:15px">阿里APP</p>
            <div class="youce-footer-div" v-for="(item,index) in zhong" :key="index">
                <img :src="item.img_path" alt="">

            </div>
        </div>

    </div>
</template>
<script>

    
     


    import axios from 'axios';
    import  '../assets/jquery.js';
    export default {
        data:function(){
            return{
                 youce:"",
                 zuoce:"",
                 zhong:"",
                 usexin:""
            }
        },
        methods:{
           xian(index){

               $('.youce-body-zhu').css('display','none').css('border','');
                $('.youce-xian').css('border-bottom','');
               $('.youce-body-zhu').eq(index).css('display','block');
               $('.youce-xian').eq(index).css('border-bottom','2px solid red');
           },
          

        },
        mounted(){
           axios.get('/server/user/xian',{
               params:{
                    name1:"xiangka"
                }
           }).then(res=>{
            //    console.log(res);
               this.youce=res.data.result.cataList;
            //    console.log(this.youce);
           });
           axios.get('/server/user/xian',{
               params:{
                    name1:"tupian"
                }
           }).then(res=>{
            //    console.log(res);
               this.zuoce=res.data.result.cataList;
            //    console.log(this.zuoce);
           });
           axios.get('/server/user/xian',{
               params:{
                    name1:"tubiao"
                }
           }).then(res=>{
            //    console.log(res);
               this.zhong=res.data.result.cataList;
            //    console.log(this.zhong);
           });
           
           this.usexin=this.$cookies.get('username');
         
        }
    };
    
</script>
<style>
 .youce{
     height: 640px;
     width: 305px;
     background: #f4f4f4;
 }
 .youce-head{
     height:150px;
     width: 100%;
     /* border: 1px solid red; */
     background-image: url('data:image/png;base64,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');
     background-size:cover; 
 }
 .youce-head-tou{
     height: 100px;
     width: 100%;
 }
 .youce-head-tou img{
     height: 50px;
     width: 50px;
     border-radius: 25px;
     margin: 25px auto;
 }
 .youce-head-foot{
     width: 100%;
     height: 50px;

 }
 .youce-head-foot a{
     display: inline-block;
     margin-top: 10px;
     background-image: linear-gradient(to right,#ff5000 0,#ff6f06 100%); 
     padding: 3px 15px;
     color: white;
     font-weight: 500;
     margin-left: 5px;
     border-radius: 3px;
     cursor: pointer;
 }
 .youce-head-head{
     height: 30px;
     width: 100%;
     background: #ffe4dd;
     color: #f40;
     line-height: 30px;
     font-size: 13px;
     cursor: pointer;
     letter-spacing: 1px;
 }
 .youce-body{
     height: 107px;
     width: 100%;
     /* border: 1px solid red; */
     overflow: hidden;
     margin-top: 10px;
     
 }

 .youce-body ul{
     list-style: none;
     height:27px;
     position: relative;
     /* overflow: hidden; */
 }
 .youce-body>ul>li{
     list-style: none;
     float: left;
     width: 25%;
 }

 /* .youce-body>ul>li:hover .youce-body-zhu{
     display: block;
 } */
 .youce-body-zhu{
     position: absolute;
     top: 27px;
     left: 0;
     width: 300px;
     height: 75px;
     /* border: 1px solid red; */
     overflow: hidden;
     display: none;
     /* transition: all 0.5s; */

 }
 .youce-hod:first-child div{
     display: block;
 }
 /* .youce-hod:first-child span{
     border-bottom: 2px solid red;
 } */

 
 .youce-body-zhu>p{
     float: left;
     width: 50%;
     float: left;
     text-align: left;
     font-size: 13px;
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
     line-height: 25px;
     margin-top: 10px;
     padding-left: 10px;
     
 }

 .youce-xia{
     height: 234px;
     width: 100%;
     /* border:1px solid red; */
     /* margin-top: 10px; */
 }
 .youce-xia-fen{
     width: 24%;
     height: 33%;
     float: left;
     border: 1px solid white;
     font-size: 14px;
     cursor: pointer;
    
 }
 .youce-xia-fen:hover{
     color:red;
 }
 .youce-footer{
     height: 120px;
     width: 100%;
     /* background: blue; */
     background: white;
 }
 .youce-footer-div{
     height: 40px;
     width: 20%;
     float: left;
     /* border: 1px solid red; */
 }
  .youce-footer-div img{
      height: 30px;
      width: 30px;
      margin-top: 7px;
  }
</style>
