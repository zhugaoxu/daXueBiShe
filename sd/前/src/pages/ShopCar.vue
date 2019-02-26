<template>
    <div class="shopcar">
        <div class="xiangqing-div" style="height:32px;overflow:hidden">
            <tou-head/>
        </div>
        <div style="width:1200px;margin:0 auto;background:white">
            <div style="height:90px;width:100%;overflow:hidden">
                <div style="float:left">
                    <img
                        src="https://img.alicdn.com/tfs/TB180Z2kbvpK1RjSZPiXXbmwXXa-173-80.png"
                        alt=""
                    >
                </div>
                <div style="float:right">
                    <div
                        style="width:520px;height:33px;border:2px solid #ff4400;margin-top:25px;overflow:hidden;line-height:33px"
                    >
                        <div style="float:left;width:80px;background:#f5f5f5">宝贝</div>
                        <input
                            type="text"
                            placeholder="请输入商品"
                            style="padding-left:10px;float:left;width:345px;height:100%;border:none;outline-line:none"
                        >
                        <div
                            style="float:left;height:100%;width:91px;background:#ff4400;color:white;font-size:18px"
                        >搜索</div>
                    </div>
                </div>
            </div>
            <div
                style="height:50px;width:100%;border-bottom:2px solid lightgray"
            >
                <div class="zh1">
                    <ul class="zh2">
                        <li>
                            <strong>全部商品 {{shopshu.length}}</strong>
                        </li>
                        <li>
                            <strong>降价商品 4</strong>
                        </li>
                        <li>
                            <strong>库存紧张 0</strong>
                        </li>
                    </ul>
                    <ul class="zh3">
                        <li>已选商品（不含运费）</li>
                        <li id="zh4" style="padding-top:6px" :class="m>0 ? 'zl':'' ">0.00</li>
                        <!-- <li id="zh5">结算</li> -->
                        <div v-if="m==0"
                            id="zh5"
                            style="width:60px;margin-top:2px;background:#aaaaaa;float:left;color:#fff;font-size:13px;border-radius:3px;height:25px;line-height:25px"
                        >结算</div>
                        <div v-else class="zh"
                            id="zh5"
                            style="width:60px;margin-top:2px;background:#aaaaaa;float:left;color:#fff;font-size:13px;border-radius:3px;height:25px;line-height:25px"
                         @click="dingdan">结算</div>
                    </ul>
                </div>
            </div>
            <div class="zh6">
                <input
                    @click="allcheck"
                    type="checkbox"
                    id="ccc"
                    style="display: block;margin-left: 15px;float:left ;margin-top:20px ;"
                    name="checkbox"
                >
                <div class="zh7">全选</div>
                <div class="zh7" style="margin-left: 100px;">商品信息</div>
                <div class="zh7" style="margin-left: 300px;">单价</div>
                <div class="zh7" style="margin-left: 150px;">数量</div>
                <div class="zh7" style="margin-left: 150px;">金额</div>
                <div class="zh7" style="margin-left: 150px;">操作</div>
            </div>
            <div class="zh8" v-for="(item,index) in shopshu" :key="index">
                <div class="zh81">
                    <input
                        type="checkbox"
                        @click="danxuan(index)"
                        name="checkbox"
                        class="jian"
                        id="za2"
                        value=""
                    >店铺：王家卖肉总经销
                </div>
                <div class="zh82">
                    <input type="checkbox" name="checkbox" class="za3" value="">
                    <div class="zh83">
                        <img :src="item.img_path" style="height:80px;width:80px;">
                    </div>
                    <div class="zh84">
                        <p style="font-size: 15px;">【狂欢价】{{item.xiang}}</p>
                        <p style="background: red;width: 55px;font-size: 15px;">狂欢季</p>
                    </div>
                    <div class="zh85">
                        <p style="font-size: 15px;margin-top: 20px;margin-left: 25px;">
                            颜色分类：{{item.color}}
                            <br>
                            衣服型号:{{item.xinghao}}
                        </p>
                        <p style="font-size: 15px;margin-left: 25px;">安装方式：整装</p>
                    </div>
                    <div class="zh86">
                        <p style="color: darkgray;text-decoration: line-through;">￥1288</p>
                        <p class="jia">￥{{item.price}}</p>
                        <p style="background: lightseagreen">卖家降价</p>
                    </div>
                    <div class="zh9">
                        <button style="padding:10px 10px" @click="reduce(item._id,index)">-</button>
                        <span style="padding:10px 10px">{{item.num}}</span>
                        <button style="padding:10px 10px" @click="add(item._id,index)">+</button>
                    </div>
                    <div class="zh89">
                        <p>移入收藏夹</p>
                        <p
                            class="s"
                            style="margin-top: 15px;cursor:pointer"
                            @click="removeshop(item._id)"
                        >删除商品</p>
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
      shopshu: "",
      m: 0
    };
  },
  methods: {
    allcheck() {
      let quan = document.getElementById("ccc");
      let cc = document.querySelectorAll(".zh8");
      let mp = 0;
      console.log(cc.length);
      if (!quan.checked) {
        for (let j = 0; j < this.shopshu.length; j++) {
          let dg = parseInt(cc[j].querySelector(".jia").innerHTML.substring(1))*(this.shopshu[j].num);
          let dd = cc[j].querySelector(".jian");
          $(dd).prop("checked", "");
          mp = 0;
          this.m = 0;
        }
      } else if (quan.checked) {
        for (let j = 0; j < cc.length; j++) {
          let dg = parseInt(cc[j].querySelector(".jia").innerHTML.substring(1))*(this.shopshu[j].num);
          let dd = cc[j].querySelector(".jian");
          $(dd).prop("checked", "checked");
          mp = mp + dg;
          this.m = mp + dg;
        }
      }
      document.getElementById("zh4").innerHTML = mp;
    },
    danxuan(index) {
      let cc = document.querySelectorAll(".zh8");

      let dq = parseInt(cc[index].querySelector(".jia").innerHTML.substring(1))*(this.shopshu[index].num);
      let dd = cc[index].querySelector(".jian");

      if (!dd.checked) {
        $(dd).removeAttr("checked");
        this.m = this.m - dq;
      } else if (dd.checked) {
        $(dd).attr("checked", "true");
        this.m = this.m + dq;
      }
      document.getElementById("zh4").innerHTML = this.m;
    },
    removeshop(suo) {
      axios
        .get("/server/shop/remove", {
          params: {
            name: suo
          }
        })
        .then(val => {});
      axios
        .get("/server/user/lookfor", {
          params: {
            name: this.$route.params.id
          }
        })
        .then(val => {
          //    console.log(val);
          //    console.log(val.data.shops);
          this.shopshu = val.data.shops;
        });
    },


    add(suo,index) {
        console.log('ssd');
      axios
        .get("/server/shop/add", {
          params: {
            name: suo
          }
        })
        .then(val => {});
      axios
        .get("/server/user/lookfor", {
          params: {
            name: this.$route.params.id
          }
        })
        .then(val => {
          //    console.log(val);
          //    console.log(val.data.shops);
          this.shopshu = val.data.shops;
        });
        
    },
    reduce(suo) {
      axios
        .get("/server/shop/reduce", {
          params: {
            name: suo
          }
        })
        .then(val => {});
      axios
        .get("/server/user/lookfor", {
          params: {
            name: this.$route.params.id
          }
        })
        .then(val => {
          //    console.log(val);
          //    console.log(val.data.shops);
          this.shopshu = val.data.shops;
        });
    },
    dingdan(){
       let cc = document.querySelectorAll(".zh8");
      //  let dd = cc[index].querySelector(".jian");
      for(let dd=0;dd<this.shopshu.length;dd++){
        let ding=cc[dd].querySelector('.jian');
        let that=this;
        if(ding.checked){
          let data= `img_path=${that.shopshu[dd].img_path}&price=${that.shopshu[dd].price}&id=${that.shopshu[dd].id}&xinghao=${that.shopshu[dd].xinghao}&color=${that.shopshu[dd].color}&num=${that.shopshu[dd].num}&xiang=${that.shopshu[dd].xiang}` 
          axios.post('/server/user/dingdan',data).then((val)=>{
            console.log(val);
            // alert(val.data.msg);
          })
          that.removeshop(that.shopshu[dd]._id);
         
        }
      }
      alert('购买商品成功')
      location.href='#/';
      
      
    }

  },
  mounted() {
    axios
      .get("/server/user/lookfor", {
        params: {
          name: this.$route.params.id
        }
      })
      .then(val => {
        //    console.log(val);
        //    console.log(val.data.shops);
        this.shopshu = val.data.shops;
      });
  },
  components: {
    TouHead
  }
};
</script>
<style>
.zh1 {
  height: 42px;
  width: 1200px;
  background: white;
  overflow: hidden;
}
.zh2 {
  list-style: none;
  overflow: hidden;
  float: left;
}
.zh2 > li {
  list-style: none;
  float: left;
  display: block;
  height: 26px;
  width: 120px;
  border-right: 1px solid green;
  margin-top: 8px;
  font-size: 20px;
  text-align: center;
}
.zh2 > li:last-child {
  border-right: none;
}
.zh3 {
  float: right;
  overflow: hidden;
  /* border: 1px solid red; */
  margin-top: 12px;
}
.zh3 > li {
  float: left;
  list-style: none;
  padding: 5px 12px;
  font-size: 13px;
  color: rgb(153, 153, 153);
}

.zh6 {
  width: 1200px;
  height: 50px;
  /*border: 1px solid red;*/
  line-height: 50px;
  background: white;
  overflow: hidden;
}
.zh7 {
  float: left;
}

.zh8 {
  height: 150px;
  width: 1200px;
  margin-top: 15px;
  /*border: 1px solid red;*/
  text-align: left;
  position: relative;
}
.zh81 {
  height: 30px;
  width: 1200px;
  background: white;
  line-height: 30px;
  padding-left: 20px;
}
#za {
  margin-left: 15px;
}
.zh82 {
  height: 120px;
  width: 1200px;
  border: 1px solid gray;
}
.za3 {
  margin-left: 25px;
  margin-top: 18px;
}
.zh83 {
  height: 80px;
  width: 80px;
  border: 1px solid black;
  margin-top: -15px;
  margin-left: 48px;
}
.zh84 {
  height: 80px;
  width: 220px;
  margin-left: 136px;
  /*border:1px solid red;*/
  margin-top: -80px;
}
.zh85 {
  width: 200px;
  height: 110px;
  /*border:1px dotted red;*/
  margin-top: -98px;
  margin-left: 400px;
}
.zh86 {
  width: 80px;
  height: 63px;
  /*border: 1px solid red;*/
  background: lightgray;
  margin-top: -108px;
  margin-left: 700px;
}
.zh89 {
  width: 100px;
  height: 60px;
  /*border: 1px solid red;*/
  margin-top: -58px;
  margin-left: 1000px;
}
.zh9 {
  position: absolute;
  height: 60px;
  width: 120px;
  left: 820px;
  top: 60px;
  /* border: 2px solid red; */
  font-size: 18px;
}
.zl{
  color:orangered !important;
}
.zh{
  background:orangered !important;
  cursor: pointer;
}
</style>
