
var mongoose = require('mongoose');

var DingSchema = new mongoose.Schema({
    img_path:String,
    price:String,
    id:String,
    xinghao:String,
    color:String,
    num:String,
    buyer:String,
    xiang:String,
    createdTime:Object,


    // password:String,
    // shenfen:String,
    // telephone:Number,
    // email:String,
    // createTime:{
    //     type:Date,
    //     default:Date.now()
    // },

    // // 设置商品发布数量
    // buyCount:{
    //     type:Number,
    //     default:0
    // },
    // email:String,



})
DingSchema.methods.time = function(){
    let now = new Date();
    let time  = {
      date:now.getTime(),
      year:now.getFullYear(),
      month:now.getMonth() + 1,
      day:now.getDate(),
      showdate:now.getFullYear() + '-' + ( now.getMonth() + 1 ) + '-' + now.getDate(),
      showtime:now.getFullYear() + '-' + ( now.getMonth() + 1 ) + '-' + now.getDate() + ' ' + (now.getHours() < 10 ? '0' + now.getHours() : now.getHours() )  + ':' + ( now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes() ) + ':' + ( now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds() )
    };
  
    return time;
  };
  

const DingModel = mongoose.model('dings', DingSchema);
module.exports = DingModel;
