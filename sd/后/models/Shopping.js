
var mongoose = require('mongoose');

var ShopSchema = new mongoose.Schema({
    img_path:String,
    price:String,
    id:String,
    xinghao:String,
    color:String,
    num:String,
    buyer:String,
    xiang:String

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

const ShopModel = mongoose.model('shops', ShopSchema);
module.exports = ShopModel;
