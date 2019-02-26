<template>
    <div class="foo">
          <div v-for="(item,index) in dibu" :key="index" class="foo-div">
              <ul style="width:100%;overflow:hidden">
                  <li v-for="(items,index) in item" :key="index" style="float:left;list-style:none">
                     <span style="border-right:1px solid gray;padding:0px 10px">{{items}}</span>
                  </li>
              </ul>
          </div>
          <div class="foo-di">
              <img src="https://img.alicdn.com/tps/i1/T1FeW3XXNfXXXXXXXX-36-36.gif" alt="">
              <img src="https://img.alicdn.com/tfs/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg" style="width:1100px;margin-left:15px;margin-top:4px" alt="" >
          </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data:function(){
            return{
                dibu:""
            }
        },
        mounted(){
          axios.get('/server/user/xian',{
               params:{
                    name1:"dibu"
                }
           }).then(res=>{
            //    console.log(res);
               this.dibu=res.data.result.cataList;
               console.log(this.dibu);
           });
        }
    };
</script>
<style>
*{
    padding: 0;
    margin: 0;
}
.foo{
    width:1200px;
    margin:0 auto;
    text-align: left;
    background:white;
   
}
.foo>div>ul>li{
    font-size:12px;
    color:#6c6c6c;
    margin:5px 0px;
    cursor: pointer;
    

}
.foo>div>ul>li:hover{
    color:red;
}

li:last-child span{
    border:none !important;
}
.foo-div:first-child{
    border-bottom:1px solid #6c6c6c;
    padding-bottom:8px;
    padding-top:12px;
}
.foo-di{
    overflow:hidden;
}
.foo-di>img{
    height:40px;
    float:left;
    /* display: inline-block; */
}
</style>
