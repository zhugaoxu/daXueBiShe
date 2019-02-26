<template>
    <div class="ab">
          
       <ul>
           <li v-for="(item,index) in aa" :key="index" class='as'>
                  <span style="padding-left:10px;display:inline-block;width:100%;font:slider" class="as-span">{{item.name}}</span>
                  <div class="ass" >
                      <div class="ass-left">
                        <div v-for="(items,index) in item.shangpin" :key="index" >
                            <p>{{items.uname}}</p>
                            <p >
                                <span v-for="(itemss,index) in items.xiangxi" :key="index">
                                    {{itemss}}
                                </span>
                            </p>
                        </div>
                      </div>
                      <div class="ass-right">
                          <p style="text-align:center;margin-top:8px">猜你喜欢</p>
                          <div class="ass-right-right">
                              <div class="ass-right-xiang" v-for="(items,index) in item.tu" :key="index">
                                  <img :src="items.img_path">
                                  <p >{{items.description}}</p>
                              </div>
                          </div>
                      </div>
                  </div>
           </li>
       </ul>
  <!-- <p>{{aa}}</p> -->
      
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data:function(){
            return{
                tabPosition: 'top',
                aa:''
            }
        },
        mounted(){
           
            axios.get("/server/user/xian",{
                params:{
                    name1:"zuoce"
                }
            }).then(res=>{
                // console.log(res);
                this.aa=res.data.result.cataList
            })

        }
    };
</script>
<style >
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
  .ab>ul{
      position: relative;
      text-align: left;
      border: 1px solid red;
      height: 530px;
      width: 194px;
  }
  .ab ul li{
      height: 33px;
      line-height: 33px;
      cursor: pointer;
  }
  
  .ab ul li:hover .ass{
      display: block;
  }
  
  .ass{
      position: absolute;
      left: 192px;
      top: 0;
      border: 1px solid red;
      width: 700px;
      height: 530px;
      overflow: hidden;
      display:none;
      z-index:100;
      background: white;
}
  .ass-left{
      width: 450px;
      float: left;
      padding-left:15px;
      height: 100%;
  }
  .ass-left span{
      font-size: 12px;
  }
  .ass-left div{
      margin-top: 12px;
  }
  .ass-right{
      width: 233px;
      /* background: green; */
      height: 100%;
      float: left;
  }
  .ass-right-xiang{
      width: 100px;
      height: 130px;
      float: left;
      margin-left: 10px;
      margin-top: 20px;
      /* border: 1px solid red; */
  }
  .ass-right-xiang img{
      height: 100px;
      width: 100px;
      border: 1px solid orangered;
      /* display: inline-block; */
      /* background: gray; */
  }
  .ass-right-xiang p{
      font-size:14px;
      line-height:15px;
      margin-top:-4px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }

  .as:hover .as-span{
      background: #ffe4dd;
      color: red;
  }
</style>

