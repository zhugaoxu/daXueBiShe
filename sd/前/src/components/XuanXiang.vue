<template>
    <div class="xuanxiang">
        <p>
            <span style="border-left:6px solid red;padding-left:14px">热卖商品</span>
        </p>
        <ul>
            <li v-for="(item,index) in xuan" :key="index"  @click="zhu(item.name)">
                {{item.uname}}
            </li>
        </ul>
        <div style="width:100%;height:720px;overflow:hidden">
            <div  v-for="(items,index) in xiang" :key="index" class="xuanxiang-div">
                <router-link :to="{name:'lu',params:{item:items,id:items.id}}">
                <img :src="items.img_path" alt="" style="width:100%;height:200px;">
                <p style="text-align:left;color:#666;margin:8px 0">{{items.xiang.substring(0,20)}}</p>
                <p style="text-align:left;font-size:12px;color:lightgray">
                    <span style="padding-right:15px">评价{{items.ping}}</span>
                    <span>收藏{{items.shoucang}}</span>
                </p>
                <p style="text-align:left;font-size:20px;margin-top:15px;color:#ff5615;overflow:hidden">
                    <span style="float:left">￥{{items.price}}</span>
                    <span style="float:right;font-size:13px;display:inline-block;margin-top:4px;padding-right:18px">月销{{items.xiao}}</span>
                </p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data:function(){
            return{
               xuan:"",
               xiang:""
            }
        },
        methods:{
            zhu:function(name){
                 axios.get('/server/user/shi',{
                     params:{
                         name:name
                     }
                 }).then((val)=>{
                     console.log(val);
                     this.xiang=val.data.result;
                     console.log(this.xiang);
                 })
            }

        },
        mounted(){
            axios.get('/server/user/xian',{
               params:{
                    name1:"xuan"
                }
            }).then(res=>{
            //    console.log(res);
               this.xuan=res.data.result.cataList;
            //    console.log(this.youce);
           });
        //    axios.get('/server/user/shi',{
        //        params:{
        //            name2:
        //        }
        //    })
           axios.get('/server/user/shi',{
                     params:{
                         name:"qinglv"
                     }
                 }).then((val)=>{
                     console.log(val);
                     this.xiang=val.data.result;
                     console.log(this.xiang);
                 })

        }
    };
</script>
<style>
 .xuanxiang{
     height:100%;
     width: 100%;
     margin-top:12px;
 }
 .xuanxiang>p{
     position: relative;
     height: 22px;
     line-height: 22px;
     margin-left:18px;
     /* padding-top:10px; */
     font-size: 20px;
     font-weight: 500;
     color: #ff242d;
    /* padding-bottom:35px; */
     padding-top:10px;
     /* background:white; */
     text-align: left;
 }
 .xuanxiang>ul{
     overflow: hidden;
     margin-top:25px;
     border-bottom: 1px solid white;
     padding-bottom:10px;

 }
 .xuanxiang>ul>li{
     list-style: none;
     float: left;
     width: 8%;
     cursor: pointer;
 }
 .xuanxiang-div{
     width:20%;
     height:360px;
     border:1px solid #f4f4f4;
     float: left;
     padding: 20px;
 }
 .xuanxiang-div:hover{
     border:1px solid #ff5000;;
 }

</style>
