const express=require('express');
const app=express();
const PingModel=require('../models/pingjia');

app.post('/pingjia',(req,res)=>{
   console.log(req.body);
    let order = new PingModel(req.body);
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