
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name:String,
    pass:String,
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
    email:String,



})

var UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;
