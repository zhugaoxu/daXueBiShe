<template>
    <div class="dibu">
          <p style="padding-top:30px;color:#ccccd0">
              ————<span style="padding:30px;">END</span>————
          </p>
          <div>
              <div>
                  <div style="height:50px;text-align:left;overflow:hidden;line-height:50px">
                      <img src="/static/anquan.png" alt="" style="height:40px;float:left;margin-top:5px">
                      <span style="cursor:pointer;display:inline-block;float:right;font-size:18px;font-weight:500;margin-right:95px">消费者保障</span>
                  </div>
                  <ul class="dibu-ul">
                      <li>保障范围</li>
                      <li>退货退款流程</li>
                      <li>服务中心</li>
                      <li>更多特色服务</li>

                  </ul>

              </div>
             <div>
                  <div style="height:50px;text-align:left;overflow:hidden;line-height:50px">
                      <img src="/static/wen.png" alt="" style="height:40px;float:left;margin-top:5px">
                      <span style="cursor:pointer;display:inline-block;float:right;font-size:18px;font-weight:500;margin-right:110px">新手上路</span>
                  </div>
                  <ul class="dibu-ul">
                      <li>新手专区</li>
                      <li>消费警示</li>
                      <li>交易安全</li>
                      <li>24小时在线帮助</li>
                      <li>免费开店</li>

                  </ul>

              </div>
              <div>
                  <div style="height:50px;text-align:left;overflow:hidden;line-height:50px">
                      <img src="/static/fukuan.png" alt="" style="height:40px;float:left;margin-top:5px">
                      <span style="cursor:pointer;display:inline-block;float:right;font-size:18px;font-weight:500;margin-right:110px">付款方式</span>
                  </div>
                  <ul class="dibu-ul">
                      <li>快捷支付</li>
                      <li>信用卡</li>
                      <li>余额宝</li>
                      <li>蚂蚁花呗</li>
                      <li>货到付款</li>

                  </ul>

              </div>
             <div>
                  <div style="height:50px;text-align:left;overflow:hidden;line-height:50px">
                      <img src="/static/taobao.png" alt="" style="height:40px;float:left;margin-top:5px">
                      <span style="cursor:pointer;display:inline-block;float:right;font-size:18px;font-weight:500;margin-right:110px">淘宝特色</span>
                  </div>
                  <ul class="dibu-ul">
                      <li>手机淘宝</li>
                      <li>旺旺/旺信</li>
                      <li>大众评审</li>
                    
                  </ul>

              </div>
          </div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return{

            }
        },
        mounted(){
           
        }
    };
</script>
<style>
.dibu{
    height:100%;
    height:100%;
    /* background:orange; */
}
.dibu>div{
    height:100px;
    width:100%;
    margin-top:60px;
    /* border:1px solid red; */
    overflow: hidden;
   
}
.dibu>div>div{
    width:250px;
    margin: 0 25px;
    /* border:1px solid blue; */
    height:100%;
    float: left;
     padding-right:20px;
}
.dibu-ul{
    list-style: none;
    width:100%;
    overflow:hidden;
    margin-top:5px;
}
.dibu-ul li{
    float: left;
    list-style: none;
    font-size:12px;
    margin-right:15px;
    line-height:25px;
    cursor: pointer;
    color:#999;
}
.dibu-ul li:hover{
    color:red;
}

</style>
