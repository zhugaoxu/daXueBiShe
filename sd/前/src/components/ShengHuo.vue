<template>
    <div class="shenghuo">
        <div class="shenghuo-head">
            <div v-for="(item,index) in sheng" :key="index">
                <img :src="item.img_path" alt="" style="width:100%;height:100%">
            </div>
        </div>
        <div class="shenghuo-body">
            <div class="shenghuo-shang" >
                <img :src="huo.img_path" style="height:30px;width:100px;margin:10px 15px 0;float:left">
                <span style="display:inline-block;float:left;color:rgb(153, 153, 153);font-size:15px;margin-top:4px">{{huo.desc}}</span>
            </div>
            <div class="shenghuo-xia" style="overflow:hidden">
                <div class="shenghuo-div" v-for="(items,index) in huo.cataList" :key="index" style="width:200px;height:100%;float:left;overflow:hidden">
                    <img :src="items.img_path" alt="" class="shenghuo-img" style="float:left;height:80px;width:80px;border:2px solid #17d0a2;border-radius:40px;margin:10px 10px;padding:5px">
                    <div style="float:left;text-align:left " >
                        <p class="shenghuo-p" style="margin-top:14px">{{items.lei}}</p>
                        <p style="color:rgb(153, 153, 153);margin-top:5px">{{items.miao}}</p>
                        <p style="color:rgb(153, 153, 153);font-size:14px;margin-top:5px">{{items.qi}}</p>
                    </div>
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
                sheng:"",
                huo:"",
            }
        },
        mounted(){
            axios.get('/server/user/xian',{
               params:{
                    name1:"sheng"
                }
            }).then(res=>{
               this.sheng=res.data.result.cataList;
            });
            axios.get('/server/user/xian',{
               params:{
                    name1:"huo"
                }
            }).then(res=>{
                // console.log(res);
               this.huo=res.data.result;
            });
        }
    };
</script>
<style>
.shenghuo{
    width: 100%;
    height:280px;
}
.shenghuo-head{
    width:100%;
    height:95px;
    /* border: 1px solid blue; */
    margin: 10px 0px;
    overflow: hidden;
}
.shenghuo-head>div{
   width: 20%;
   /* border: 1px solid green; */
   height:100%;
   float: left;
   padding-right:10px; 
   /* padding-top:5px; */
}
.shenghuo-body{
    height:170px;
    width:100%;
    background:white;
}
.shenghuo-shang{
    height:50px;
    text-align: left;
    line-height:50px;
    /* border:1px solid red; */
    overflow: hidden;
}
.shenghuo-xia{
    height:100px;
    width:100%;
    /* background:blue; */
    margin-top:8px;
}
.shenghuo-div:hover .shenghuo-p{
    color:#F40
}
.shenghuo-div:hover .shenghuo-img{
    border:2px solid #F40 !important;
}

</style>
