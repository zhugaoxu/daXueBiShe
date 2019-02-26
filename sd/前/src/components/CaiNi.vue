<template>
    <div class="caini">
          <p >
              <span style="border-left:6px solid #ffad00;padding-left:14px">猜你喜欢</span>
          </p>
          <div style="overflow:hidden">
              <!-- <el-col :span="6" v-for="(content,ins) in shuzu.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="ins">
                  {{content}}
              </el-col> -->
              <div  v-for="(items,index) in shuzu.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index" class="caini-div">
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
                <div class="caini-absolute">
                    <div style="width:130px;height:60px;margin:20px auto;">
                         <p style="border-bottom:1px solid white;padding-bottom:4px;color:white">找相似</p>
                         <p style="padding-top:4px;color:white;font-size:13px">发现更多相似的宝贝 ></p>
                    </div>
                </div>
            </div>
              
          </div>


           <div class="fenye" style="margin-top:30PX">
              <el-pagination
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage"
                   :page-sizes="[10, 20, 25, 50,100]"
                   :page-size="pagesize"         
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="shuzu.length">    
             </el-pagination>
           </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data:function(){
            return{
               shuzu:[],
               currentPage:1, //初始页
               pagesize:100,
            }
        },
        mounted(){
           axios.get('/server/caini').then((val)=>{
               console.log(val.data.result);
               this.shuzu=val.data.result;
           })
        },
         methods:{
           　handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
              },
             handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
              }

        },
    };
</script>
<style>
.caini{
    width:100%;
    margin-top:15px;
    background:white;
}
.caini>p{
     position: relative;
     height: 22px;
     line-height: 22px;
     margin-left:18px;
     
     font-size: 20px;
     font-weight: 500;
     color: #ffad00;
     padding-bottom:35px;
     padding-top:10px;
     /* background:white; */
     text-align: left;
 }
.caini-div{
     width:20%;
     height:360px;
     border:1px solid #f4f4f4;
     float: left;
     padding: 20px;
     position: relative;
 }
 .caini-div:hover{
     border:1px solid #ff5000;;
 }
 .caini-absolute{
     position:absolute;
     bottom:0;
     left:0;
     width:100%;
     height:100px;
     background:#FF5000;
     display: none;
 }
 .caini-div:hover .caini-absolute{
     display: block;
 }
</style>
