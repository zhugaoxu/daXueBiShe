<template>
   <div class="homepage"  >
     <div class="Nav-head">
          <tou-head />
     </div>
    <div class="zz">
        <div class="Nav-body">
            <div >
               主体市场
            </div>
            <ul >
              <li>
                <a href='/'>天猫</a>
              </li>
              <li>
                <a href="/">聚划算</a>
              </li>
              <li>
                 <a href="/">天猫超市</a>
              </li>

            </ul>
            <ul >
              <li>
                <a href='/'>淘抢购</a>
              </li>
              <li>
                <a href="/">电器城</a>
              </li>
              <li>
                 <a href="/">司法拍卖</a>
              </li>
              <li>
                <a href="/">淘宝心选</a>
              </li>
              <li>
                 <a href="/">兴农扶贫</a>
              </li>

            </ul>
            <ul >
              <li>
                <a href='/'>飞猪旅行</a>
              </li>
              <li>
                <a href="/">智能生活</a>
              </li>
              <li>
                 <a href="/" style="border-right:none">苏宁易购</a>
              </li>

            </ul>
        </div>
        <div class="aside">
          <div class="aside-left">
             <div class="aside-left-top">
                 <div class="aside-left-top-left">
                    <zhu-page />
                 </div>
                 <div class="aside-left-top-right">
                    <lun-bo/>
                 </div>
             </div>
             <div class="aside-left-bottom">
               <xiang-shang/>
             </div>

          </div>
          <div class="aside-right">
              <you-ce />
          </div>

        </div>
        <div class="sheng" style="width:100%;height:280px;">
             <sheng-huo/>
        </div> 
        <div class="xuan" style="width:1200px;height:800px;background:white">
          <xuan-xiang />
        </div>
        <div style="width:100%;height:175px;background:white;padding-top:21px;">
          <div style="width:1200px;height:133px;border:1px solid white;overflow:hidden">
            <div class="sanbiao"></div>
            <div class="sanbiao"></div>
            <div class="sanbiao"></div>
          </div>
        </div>
        <div style="width:100%">
          <cai-ni/>
        </div>
        <div style="width:100%;height:265px;">
          <di-bu />
        </div>
        
    </div>

    <div>
           <ding-wei/>
    </div> 








    <div class="beijing-zuo">

    </div>
    <div class="beijing-you">

    </div>
  </div>
</template>
<script>
    import axios from 'axios';
    import ZhuPage from '../components/ZhuPage';
    import LunBo from '../components/LunBo';
    import XiangShang from '../components/XiangShang';
    import YouCe from '../components/YouCe';
    import TouHead from '../components/TouHead';
    import ShengHuo from '../components/ShengHuo';
    import XuanXiang from '../components/XuanXiang';
    import CaiNi from '../components/CaiNi';
    import DiBu from '../components/DiBu';
    import DingWei from '../components/DingWei';
    export default {
        data:function(){
          return{

          }
        },
        components:{
          ZhuPage,
          LunBo,
          XiangShang,
          YouCe,
          TouHead,
          ShengHuo,
          XuanXiang,
          CaiNi,
          DiBu,
          DingWei
        
        },
        mounted(){
          
          console.log(this.$cookies.get('username'));
        },
        methods:{
         
        }
    }

    // window.onscroll=function(){
       
    //         let t=document.documentElement.scrollTop || document.body.scrollTop;
    //         console.log(t);
          
    // }
    
    
   
</script>
<style scoped>
.homepage{
  width: 100%;
}
.zz{
  width: 1200px;
  margin: 0 auto;
  /* margin-top: 100px; */
  /* border: 1px solid red; */
}
.Nav-head{
  /* height: 40px; */
  width: 100%;
  /* background:gray; */
  overflow: hidden;
}
.Nav-body{
  width: 1200px;
  height: 30px;
  background:-moz-linear-gradient( top,#ff8600,#ff5200);
}
.Nav-body ul{
  /* display: inline-block; */
  float: left;
  overflow: hidden;
  height: 30px;
  
}
.Nav-body div{
  background: #ff5000;
  height:30px;
  width: 193px;
  line-height: 30px;
  /* display: inline-block; */
  float:left;
  overflow: hidden;
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight:500;
}
/* .Nav-body ul li{
  list-style: none;
  float: left;
  margin-top: 4px;
  padding: 0 5px;
} */
.Nav-body ul li{
  list-style: none;
  float: left;
  margin-top: 4px;
  padding: 0 8px;
 
}
.Nav-body ul li a{
  color: white;
  font-weight: 600;
}

.Nav-body ul li:last-child a{
  border-right: 1px solid white;
  padding-right: 12px;
}

.Nav-body ul li:first-child{
  padding-left: 12px;
}
.aside{
  width: 1200px;
  height: 645px;
  /* border: 1px solid red; */
  overflow: hidden;
}
.aside-left{
  height: 100%;
  width: 895px;
  /* background: red; */
  float: left;
}
.aside-right{
  height: 100%;
  width: 300px;
  margin-left: 5px;
  margin-top: 5px;
  background: blue;
  float: left;
  
}
.aside-left-top{
  width: 100%;
  height: 530px;
  overflow: hidden;
}
.aside-left-bottom{
  width: 890px;
  height: 110px;
  margin-top: 10px;
  background: green;
  background: white;
}
.aside-left-top-left{
  width: 194px;
  height: 100%;
  /* background: purple; */
  float: left;
}
/* .aside-left-top-left:hover .aside-left-top-right{
  opacity: 0;
} */
.aside-left-top-right{
  width: 700px;
  padding-left: 5px;
  height: 100%;
  float: left;
  background: #f4f4f4;
}



.beijing-zuo{
  position: absolute;
  top: 133px;
  left:0px;
  width: 351px;
  height:700px;
  background-image: url('https://img.alicdn.com/tfs/TB18.HTlCzqK1RjSZFLXXcn2XXa-360-795.png');

}
.beijing-you{
  position: absolute;
  top: 133px;
  right:0px;
  width: 351px;
  height:700px;
  background-image: url('https://img.alicdn.com/tfs/TB114zYlrvpK1RjSZFqXXcXUVXa-360-795.png');

}
.sanbiao{
  width:370px;
  height:100%;
  margin:0 14px;
 
  float:left;
}
.sanbiao:first-child{
  background-image: url('https://img.alicdn.com/simba/img/TB1EnqRnNnaK1RjSZFBSuwW7VXa.jpg');
  background-size: cover;
}
.sanbiao:nth-child(2){
   background-image: url('https://img.alicdn.com/simba/img/TB1P0qXnsbpK1RjSZFySut_qFXa.jpg');
   background-size: cover;
}
.sanbiao:last-child{
   background-image: url('https://img.alicdn.com/simba/img/TB1p53UmNYaK1RjSZFnSuu80pXa.jpg');
   background-size: cover;
}
.sanbiao:hover{
  border:2px solid red;
}
</style>
