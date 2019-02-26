
var mongoose = require('mongoose');

var PingSchema = new mongoose.Schema({
    id:String,
    people:String,
    content:String,
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
   



})
PingSchema.methods.time = function(){
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

var PingModel = mongoose.model('pings', PingSchema);
module.exports = PingModel;
