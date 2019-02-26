<template>
    <div class="">
        <div class="block">
           <el-row>
          <el-col :span="6" v-for="(content,ins) in shuzu.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="ins">
              {{content}}
          </el-col>
        </el-row>

       </div>
       <div class="fenye">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[8, 12, 16, 20]"
        :page-size="pagesize"         
        layout="total, sizes, prev, pager, next, jumper"
        :total="shuzu.length">    
        </el-pagination>
    </div>

    </div>
</template>
<script>
    export default {
        data:function(){
            return{
                shuzu:[],
                 currentPage:1, //初始页
                 pagesize:8,

            }
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
        mounted(){
           
        } 
    };
</script>
<style>

</style>
