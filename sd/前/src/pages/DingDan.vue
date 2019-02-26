<template>
    <div class="dingdan">
        <div class="xiangqing-div" style="height:32px;overflow:hidden">
            <tou-head/>
        </div>
        <div style="height:62px;width:100%;background:#ff4401">
            <div class="dingdan-head">
                <img src="https://img.alicdn.com/tps/i2/T1KNKSFldbXXcEPB2X-140-34.png" alt="">
                <span>
                    <router-link to="/" style="color:white">首页</router-link>
                </span>
                <span>账户设置</span>
                <span>消息</span>
                <div>
                    <input type="text" style="height:100%;width:250px;float:left;padding-left:10px" placeholder="请输入商品" >
                    <div style="color:gray;height:100%;width:80px;background:lightgray;display:inline-block;float:left;line-height:29px;font-size:13px;letter-spacing:10px;text-align:center">搜索</div>
                </div>
            </div>
        </div>
        <div class="dingdan-div">
            <div class="dingdan-div-left">
                <p style="color:red">全部商品</p>
                <el-collapse accordion>
                            <el-collapse-item title="我的购物车" style="height:24px;overflow:hidden" class="biaozhi">
                               
                            </el-collapse-item>
                            <el-collapse-item>
                                <template slot="title">
                                    已买到的宝贝 
                                </template>
                                <ul>
                                    <li>我的拍卖</li>
                                    <li>机票酒店保险</li>
                                    <li>我的彩票</li>
                                    <li>官方集运</li>
                                </ul>
                            </el-collapse-item>
                            <el-collapse-item title="购买过的店铺" style="height:24px;overflow:hidden" class="biaozhi">
                                
                            </el-collapse-item>
                            <el-collapse-item title="我的发票" >
                                <ul>
                                    <li>开票信息</li>
                                    <li>发票管理</li>
                                    
                                </ul>
                                
                            </el-collapse-item>

                            <el-collapse-item title="我的收藏" style="height:24px;overflow:hidden" class="biaozhi">
                                
                            </el-collapse-item>
                            <el-collapse-item title="我的优惠信息" style="height:24px;overflow:hidden" class="biaozhi">
                                
                            </el-collapse-item>
                            <el-collapse-item title="我的积分" style="height:24px;overflow:hidden" class="biaozhi">
                                
                            </el-collapse-item>
                            <el-collapse-item title="评价管理" style="height:24px;overflow:hidden" class="biaozhi">
                                
                            </el-collapse-item>
                            <el-collapse-item title="退款维权" >
                                 <ul>
                                    <li>退款管理</li>
                                    <li>投诉管理</li>
                                    <li>举报管理</li>
                                    
                                </ul>
                                
                            </el-collapse-item>
                             <el-collapse-item title="我的足迹" style="height:24px;overflow:hidden" class="biaozhi">
                                
                            </el-collapse-item>
                            <el-collapse-item title="流量钱包" style="height:24px;overflow:hidden" class="biaozhi">
                                
                            </el-collapse-item>
                </el-collapse>
                
            </div>
            <div class="dingdan-div-right">
                <div style="width:100%;height:60px;border-bottom:2px solid lightgray;padding-top:28px;overflow:hidden">
                    <ul class="ding-ul"  >
                       <li><span>所有订单</span></li>
                       <li><span>代发货</span></li>
                       <li><span>待收货</span></li>
                       <li><span>代付款</span></li>
                       <li><span>待评价</span></li>
                       <li><span>分阶段</span></li>
                    </ul>
                    <div style="float:right;font-size:14px;color:#6c6c6c;margin-top:5px">
                        <i class="fa fa-trash">订单回收站</i>
                    </div>
                </div>

                <div style="height:70px;width:100%;padding-top:22px">
                    <div style="height:26px;width:100%;overflow:hidden">
                         <input type="text" style="height:100%;width:250px;float:left;padding-left:10px" placeholder="输入商品名称或者订单号进行查询" >
                         <div style="color:gray;height:100%;width:80px;background:lightgray;display:inline-block;float:left;line-height:26px;font-size:13px;text-align:center">订单搜索</div>
                         <span style="float:left;padding-left:15px;font-size:12px;padding-top:5px">更多筛选条件</span>
                         <i class="fa fa-angle-down" style="float:left;padding-top:9px;font-size:12px"></i>
                    </div>
                    
                </div>
                <ul class="dan-ul" style="width:100%;height:40px;line-height:40px;font-size:12px;background:#f5f5f5">
                    <li style="width:410px;height:100%">宝贝</li>
                    <li style="width:110px;height:100%">单价</li>
                    <li style="width:53px;height:100%">数量</li>
                    <li style="width:128px;height:100%">商品操作</li>
                    <li style="width:130px;height:100%">实付款</li>
                    <li style="width:120px;height:100%">交易状态</li>
                    <li style="width:130px;height:100%">交替操作</li>

                </ul>
                <div style="width:100%;height:46px;padding-top:11px;overflow:hidden">
                    <div style="width:100%;height:24px;">
                        <button style="float:right;margin-right:12px;padding:2px 5px" >下一页</button>
                        <button style="float:right;margin-right:12px;padding:2px 5px" disabled>上一页</button>
                    </div>
                    
                </div>
                <div style="height:215px;width:100%;border:1px solid lightgray;margin-top:10px;font-size:12px" v-for="(item,index) in dings" :key="index">
                    <div style="height:45px;width:100%;overflow:hidden;background:#f1f1f1">
                        <div style="float:left;overflow:hidden">
                           <span style="display:inline-block;height:15px;width:15px;border:1px solid gray;background:white;margin:15px 2px 0 15px"></span>
                           <span style="padding-right:10px;font-weight:700;font-size:13px;letter-spacing:1px">{{item.createdTime.showdate}}</span>
                           <span style="font-size:14px">订单号：{{item.createdTime.date}}</span>
                        </div>
                        <div style="float:right;margin-top:12px;margin-right:20px;font-size:20px;color:gray">
                            <i class="fa fa-trash" @click="drop(item._id)"></i>
                        </div>
                    </div>
                     <div style="height:170px;width:100%;overflow:hidden">
                         <div style="width:703px;height:100%;float:left;">
                             <div style="padding:15px 0;width:100%;height:120px;overflow:hidden;border-bottom:1px dotted gray">
                                 <div style="height:100%;width:410px;float:left;overflow:hidden;">
                                     <router-link :to="{name:'lu',params:{id:item.id}}"> <img :src="item.img_path" alt="" style="height:80px;width:80px;display:inline-block;float:left;margin-left:15px"></router-link>
                                     <div style="float:left;text-align:left;width:300px;margin-left:10px">
                                         <p style="font-size:13px">{{item.xiang}}</p>
                                         <p style="margin-bottom:10px">
                                             <span style="font-size:12px;color:#9e9e9e;line-height:16px">颜色分类:{{item.color}}</span>
                                             <span style="font-size:12px;color:#9e9e9e;line-height:16px;padding-left:10px">型号:{{item.xinghao}}</span>
                                        </p>
                                        <p>
                                            <img src="https://img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png" alt="七天退换">
                                            <img src="https://img.alicdn.com/tps/TB1PDB6IVXXXXaVaXXXXXXXXXXX.png" alt="如实描述">
                                            <img src="https://img.alicdn.com/tps/i2/T1SyeXFpliXXaSQP_X-16-16.png" alt="正品保障">
                                        </p>
                                     </div>
                                 </div>
                                 <div style="height:100%;width:110px;float:left;">
                                     <p class="line">￥1288.00</p>
                                     <p style="font-size:12px;line-height:20px">￥{{item.price}}.00</p>
                                 </div>
                                 <div style="height:100%;width:53px;float:left;">
                                     <p style="font-size:14px">{{item.num}}</p>
                                 </div>
                                 <div style="height:100%;width:130px;float:left;k">
                                     <p>申请售后</p>
                                     <p>投诉卖家</p>
                                     <p>运费险已失效</p>
                                 </div>

                             </div>
                             <div style="height:50px;width:100%;line-height:50px">
                                 <div style="height:100%;width:410px;float:left;text-align:left;padding-left:30px">
                                     保险服务
                                 </div>
                                 <div style="height:100%;width:110px;float:left;">
                                     0.00
                                 </div>

                             </div>

                         </div>
                         <div style="float:right;width:380px;height:100%;margin:0px 0;overflow:hidden">
                             <div style="height:100%;width:130px;float:left;border-left:1px dotted gray;padding-top:15px">
                                  <p style="font-size:13px;line-height:20px;font-weight:700">￥{{item.price*item.num}}.00</p>
                                  <p>（含运费险0.00）</p>
                             </div>
                             <div style="height:100%;width:120px;float:left;border-left:1px dotted gray;padding-top:15px">
                                 <p>交易成功</p>
                                 <p>订单详情</p>
                                 <p>查看物流</p>
                             </div>
                             <div style="height:100%;width:130px;float:left;border-left:1px dotted gray;padding-top:15px">
                                 <router-link :to="{name:'lu',params:{id:item.id}}"><span style="padding:3px 5px;border:1px solid black;display:inline-block;margin-top:20px">评价</span></router-link>
                             </div>
                             

                         </div>
                     </div>

                </div>
               

            </div>
        </div>
    </div>
</template>
<script>

import axios from "axios";
import TouHead from "../components/TouHead";
export default {
  data: function() {
    
   

    return {
      dings: ""
    };
  },
  methods:{
      drop(xin){
          axios.get('/server/ding/remove',{
              params:{
                  name:xin
              }
          }).then((val) =>{});
          axios.get("/server/huoqu/dingdan", {
              name: this.$route.params.id
              }).then(val => {
                  this.dings = val.data.dings;
          });

      }

  },
  mounted() {
    axios
      .get("/server/huoqu/dingdan", {
        // name: this.$route.params.id
        params:{
            name: this.$route.params.id
        }
      })
      .then(val => {
        console.log(val);
        this.dings = val.data.dings;
      });
  },
  components: {
    TouHead
  }
};
</script>
<style>
.dingdan{
    background:#ffffff;
}
.dingdan-head {
  width: 1200px;
  margin: 0 auto;
  padding-top: 12px;
  overflow: hidden;
}
.dingdan-head > span,
.dingdan-head > img {
  float: left;
  display: inline-block;
  cursor: pointer;
  color: white !important;
  font-size: 13px;
}
.dingdan-head > div {
  float: right;
  display: inline-block;
  height: 29px;
  margin-top: 10px;
  /* width:600px; */
  overflow: hidden;
}
.dingdan-head > img {
  margin-right: 100px;
}
.dingdan-head > span {
  margin-top: 9px;
  margin-right: 60px;
}

.dingdan-div {
  width: 1200px;
  margin: 20px auto;
  /* height: 1200px; */
  /* border: 1px solid red; */
  overflow: hidden;
}
.dingdan-div-left {
  width: 110px;
  height: 100%;
  /* border: 1px solid blue; */
  float: left;
  text-align: left;
  padding-left:8px;
}
.dingdan-div-right {
  width: 1085px;
  float: right;
  /* background: green; */
  height: 100%;
}
.dingdan .el-collapse-item__header{
    height:36px !important;
    line-height:36px !important;
}
.dingdan .el-collapse-item__arrow{
    height:36px !important;
    line-height:36px !important;
}
.dingdan-div-left li{
    font-size:13px;
    font-weight: 500;
    color:rgb(48, 49, 51);
    background:white;
    height:24px;
    line-height:24px;
    padding-left:10px;
    /* overflow: hidden; */
}
.dingdan-div-left li:hover{
    color:red;
}
.biaozhi .el-collapse-item__arrow{
    display:none;
}
.dingdan .el-collapse-item__content{
    padding-bottom:0px !important;
}
.dingdan .el-collapse-item__header:hover{
    color:red;

}
.ding-ul{
    float: left;
    overflow: hidden;
    /* padding-bottom: */
    padding-left:25px;
}
.ding-ul li{
    list-style: none;
    float: left;
   
    font-size: 16px;
    font-weight:600;
    padding-bottom: 7px;
   
    

}
.ding-ul li span{
    padding:0 12px  ;
    border-right:1px solid lightgray;
    cursor: pointer;
}
.ding-ul li:first-child{
    border-bottom:2px solid red;
    color:orangered;
}
.ding-ul li:hover{
    /* border-bottom:2px solid red; */
    color:orangered;
}
.ding-ul li:last-child{
    border-right:none;
    font-size:15px;
    padding-top:2px;
}


.dan-ul>li{
    list-style: none;
    float:left;

}

.line{
    text-decoration: line-through;
    color: #9c9c9c;
    font-size: 12px;
    line-height:20px
}
</style>
