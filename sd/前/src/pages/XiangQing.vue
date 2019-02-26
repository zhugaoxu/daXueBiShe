<template>
    <div class="xiangqing">
        <div class="xiangqing-div" style="height:32px;overflow:hidden">
            <tou-head/>
        </div>
        <div style="width:100%;background:white">
            <img src="/static/biao.png" alt="" style="width:1200px;margin:0 auto;">
        </div>
        <div style="width:100%;background:white">
            <img src="/static/ti.png" alt="" style="width:100%;margin:0 auto;">
        </div>
        <div style="width:100%;background:white">
            <img src="https://gdp.alicdn.com/imgextra/i4/2182695700/O1CN011rye2i1e7jtY4jp_!!2182695700.jpg" alt="" style="width:100%;margin:0 auto;" >
        </div>
        <div style="width:1200px;height:600px;margin:0 auto;overflow:hidden">
            <div style="width:450px;height:100%;float:left;">
                <div style="width:100%;height:470px">
                    <div style="width:420px;height:420px;margin:15px auto;background:red">
                        <img :src="xian.img_path" alt="" style="width:100%;height:100%">
                    </div>
                    <div style="width:360px;height:60px;overflow:hidden;margin:0 auto">
                        <!-- <img :src="xian.img_path" style="width:60px;height:60px;float:left;margin-left:10px" > -->
                        <div v-for="(item,index) in 5" :key="index" style="width:60px;height:60px;float:left;margin-left:10px" class="suixin" >
                            <img :src=" `/static/${item}.jpg` " alt="" style="width:100%;height:100%" @mouseover="zz(index)" >
                        </div>
                    </div>
                    <div style="width:100%;height:80px;;margin-top:20px;padding-left:20px;color:#6c6c6c;font-size:12px;padding-top:20px">
                        <span style="float:left;display:inline-block;padding-right:15px;cursor:pointer">分享</span>
                        <span style="float:left;display:inline-block;padding-right:15px;cursor:pointer">收藏商品</span>
                        <span style="float:left;display:inline-block;padding-right:15px;cursor:pointer">人气({{xian.ping}})</span>
                        <span style="float:right;display:inline-block;padding-right:10px;cursor:pointer">举报</span>
                    </div>
                </div>
            </div>
            <div style="float:right;height:100%;width:730px;padding:20px;text-align:left;overflow:hidden">
                
                <div style="width:550px;height:100%;float:left;">
                    <div style="width:100%;font-size:16px;font-weight:700;padding-left:15px">
                        <p>{{xian.xiang}}</p>
                        <p style="font-size:13px;color:rgb(255, 0, 54);">{{xian.xi}}</p>
                    </div>
                    <div style="overflow:hidden;background-size:cover;height:42px;line-height:42px;width:100%;background-image:url('data:image/png;base64,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');margin-top:12px" >
                        <span style="font-size:13px;color:rgb(153, 153, 153);padding-left:12px;padding-right:40px;display:inine-block;float:left">价格</span>
                        <span style="font-size:24px;font-weight:bolder;color:#FF0036;display:inine-block;float:left">￥{{xian.price}}</span>
                    </div>
                    <div style="height:45px;line-height:45px;border-bottom:1px dotted gray">
                        <span style="font-size:14px;color:rgb(153, 153, 153);padding-left:12px;padding-right:40px">运费</span>
                        <span style="font-size:14px">
                            <span>郑州</span>
                            <span class="fa fa-chevron-down"></span>
                        </span>
                    </div>
                    <ul class="xiangqing-ul">
                        <li style="border-right:1px solid gray;">
                            <span>累计评价</span>
                            <span style="color:#FF0036">{{xian.ping}}</span>
                        </li>
                        <li>
                            <span>销售数量</span>
                            <span style="color:rgb(34, 136, 0);">{{xian.xiao}}</span>
                        </li>
                    </ul>
                    <div style="width:100%;height:240px;padding:20px 12px;">
                        <div class="xiangqing-fen">
                              <span style="font-size:14px;color:rgb(153, 153, 153);padding-right:40px" >尺寸</span>
                              <el-radio v-model="radio7" label="M"  size="small">M</el-radio>
                              <el-radio v-model="radio7" label="L" size="small">L</el-radio>
                              <el-radio v-model="radio7" label="XL"  size="small">XL</el-radio>
                              <el-radio v-model="radio7" label="2XL" size="small">2XL</el-radio>
                              <el-radio v-model="radio7" label="3XL"  size="small">3XL</el-radio>
                              <el-radio v-model="radio7" label="4XL" size="small">4XL</el-radio>
                        </div>
                        <div class="xiangqing-fen" style="overflow:hidden">
                             <span style="font-size:14px;color:rgb(153, 153, 153);padding-right:40px;display:inline-block;float:left;margin-top:10px" >颜色</span>
                              <!-- <el-radio v-model="radio8" label="赤血红" border size="small">赤血红</el-radio>
                              <el-radio v-model="radio8" label="靛蓝青" border size="small">靛蓝青</el-radio>
                              <el-radio v-model="radio8" label="朱砂白" border   size="small">朱砂白</el-radio>
                              <el-radio v-model="radio8" label="电子绿" border size="small">电子绿</el-radio>
                              <el-radio v-model="radio8" label="公司黑" border size="small">公司黑</el-radio> -->
                              <span style="float:left;display:inline-block;width:400px;">
                                  <el-radio v-model="radio8" label="赤血红" border size="small">赤血红</el-radio>
                                  <el-radio v-model="radio8" label="靛蓝青" border size="small">靛蓝青</el-radio>
                                  <el-radio v-model="radio8" label="朱砂白" border   size="small">朱砂白</el-radio>
                                  <el-radio v-model="radio8" label="电子绿" border size="small">电子绿</el-radio>
                                  <el-radio v-model="radio8" label="公司黑" border size="small">公司黑</el-radio>
                                  <el-radio v-model="radio8" label="胭脂红" border size="small">胭脂红</el-radio>
                                  <el-radio v-model="radio8" label="天蓝黑" border size="small">天蓝黑</el-radio>
                                  <el-radio v-model="radio8" label="浅蓝黄" border   size="small">浅蓝黄</el-radio>
                                  <el-radio v-model="radio8" label="红发紫" border size="small">红发紫</el-radio>
                                  <el-radio v-model="radio8" label="碧绿澄" border size="small">碧绿澄</el-radio>

                              </span>
                             

                        </div>
                        <div class="xiangqing-fen">
                            <span style="font-size:14px;color:rgb(153, 153, 153);padding-right:40px" >数量</span>
                            <el-input-number v-model="num" controls-position="right" size="small" :min="1" :max="10"></el-input-number>

                        </div>
                        <div  style="width:100%;height:60px;margin-top:12px">
                                <button class="xiangqing-button">立即购买</button>
                                <button v-if="user==null" @click="tishi" class="xiangqing-button" >加入购物车</button>
                                <button v-else class="xiangqing-button" @click="jiaru">加入购物车</button>
                        </div>
                        <div class="xiangqing-fen" style="margin-top:20px;">
                            <span style="font-size:14px;color:rgb(153, 153, 153);padding-right:40px" >服务承诺</span>
                            <span style="font-size:14px;color:black;padding:0 ">正品保证</span>
                            <span style="font-size:14px;color:black;padding:0 15px;">极速退款</span>
                            <span style="font-size:14px;color:black;padding:0 15px;">赠运费险</span>
                            <span style="font-size:14px;color:black;padding:0 15px;">七天无理由退换</span>

                        </div>
                    </div>
                    
                    
                </div>
                <div style="width:130px;height:100%;float:right;border-left:1px dotted gray">
                   <div style="font-size:12px;text-align:center">
                       ——<span style="padding:10px;color:rgb(153, 153, 153);">看了又看</span>——
                   </div>
                   <div style="width:100%;height:150px;margin-top:10px;">
                        <img :src="xian.img_path" alt="" style="width:100%;height:130px">
                        <p style='background:gray;margin-top:-4px'>￥{{xian.price}}</p>
                   </div>
                   <div style="width:100%;height:150px;margin-top:10px;">
                        <img :src="xian.img_path" alt="" style="width:100%;height:130px">
                        <p style='background:gray;margin-top:-4px'>￥{{xian.price}}</p>
                   </div>
                   <div style="width:100%;height:150px;margin-top:20px;">
                        <img :src="xian.img_path" alt="" style="width:100%;height:130px">
                        <p style='background:gray;margin-top:-4px'>￥{{xian.price}}</p>
                   </div>
                </div>
            </div>
        </div>
        <div style="width:1200px;margin:20px auto;">
            <div v-for="(item,index) in ping" :key="index" style="text-align:left" >
                
                <!-- {{item.people}}{{item.content}} -->
                <div style="overflow:hidden">
                    <img src="/static/12.jpeg" alt="" style="height:30px;width:30px;border-radius:15px;display:inline-block;float:left;margin-left:25px">
                    <span style="display:inline-block;display:inline-block;float:left;margin:4px 10px">{{item.people}}</span>
                </div>
                <dir style="padding-left:100px;color:gray">
                    {{item.content}}
                </dir>

            </div>
            <div style="width:400px">
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
                <el-button type="primary" @click="pingjia">提交</el-button>
            </div>
        </div>
       
    </div>
</template>
<script>
import TouHead from "../components/TouHead";
import axios from "axios";
export default {
  data: function() {
    return {
      xian: "",
      radio7:"L",
      radio8:'天蓝黑',
      num:1,
      img_path:"",
      user:"",
      textarea: '',
      ping:"",
    };
  },
  mounted() {
    // console.log(this.$route.params);
    // console.log(this.$route.params.id);
    this.user=this.$cookies.get('username');
    
    axios
      .get("/server/user/shu", {
        params: {
          name: this.$route.params.id
        }
      })
      .then(val => {
        console.log(val);
        this.xian = val.data.result;
        this.ping=val.data.datas;
        this.img_path=val.data.result.img_path;
        // console.log(this.xiang);
      });
  },
  methods: {
    zz(index) {
    //   console.log(index);
      // console.log($(e).target.attr('src'));
      this.xian.img_path = $(".suixin:eq(" + index + ")>img").attr("src");
    },
    jiaru(){
        let data= `img_path=${this.img_path}&price=${this.xian.price}&id=${this.xian.id}&xinghao=${this.radio7}&color=${this.radio8}&num=${this.num}&xiang=${this.xian.xiang}` 
        // console.log(data);
        axios.post('/server/shopcar',data).then((val)=>{
            // console.log(val);
            alert(val.data.msg)
        })
    },
    tishi(){
        alert('亲，登录之后才能购买');
    },
    pingjia(){
        let data=`content=${this.textarea}&people=${this.user}&id=${this.$route.params.id}`;
        axios.post('/server/pingjia',data).then((val)=>{
            console.log(val)
        })
        axios
      .get("/server/user/shu", {
        params: {
          name: this.$route.params.id
        }
      })
      .then(val => {
        console.log(val);
        this.xian = val.data.result;
        this.ping=val.data.datas;
        this.img_path=val.data.result.img_path;
        // console.log(this.xiang);
      });
      this.textarea=""
    }
  },
  components: {
    TouHead
  }
};
</script>
<style>
.xiangqing {
  background: white;
}
.xiangqing-ul{
    padding: 10px 0;
    width: 100%;
    list-style: none;
    overflow: hidden; 
    border-bottom:1px dotted gray;
}
.xiangqing-ul li{
    list-style: none;
    float: left;
    width: 50%;
    /* border-right:1px solid blue; */
    color:rgb(153, 153, 153);
    text-align: center;
    font-size: 13px;
}
.xiangqing .el-radio + .el-radio{
    margin-left:10px !important;
}
.xiangqing-fen{
    margin-bottom:20px;
    /* margin-top:-10px; */
}
.xiangqing-fen .el-radio--small.is-bordered{
    margin-top:10px !important;
    margin-left:0 !important;
    margin-right:10px !important;
}
.xiangqing-button{
    width:180px;
    height:40px;
    text-align: center;
    line-height: 40px;
    margin-top: 10px;
    border:1px solid red;
    margin-right:25px;
    background:#ff0036;
    color:white;
    font-size:18px;
}
.xiangqing-button:first-child{
    margin-left:75px;
    background: #ffeded;
    color:#ff0036;
}
</style>
