const express=require('express');
const app=express();
const ShopModel=require('../models/Shopping');
const DingModel=require('../models/DingDan');


app.post('/user/dingdan',(req,res)=>{
//    console.log(req.body)
     req.body.buyer=req.session.user.name;
     let order = new DingModel(req.body);
     order.createdTime = order.time();

     order.save((err, data)=>{
         if(err){
            return res.json({
                error:1,
                msg:"数据库进行错误",
               
            })
         }
         return res.json({
             error:0,
             msg:"保存成功"
         })
     })
})




module.exports=app;