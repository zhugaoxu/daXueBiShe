const express=require('express');
const app=express();
const ShopModel=require('../models/Shopping');



app.get('/shop/add',(req,res)=>{
    let _id=req.query.name;
    console.log('ss');
    ShopModel.findOne({_id}).exec((err,data)=>{
        if(err){
            return res.json({
                error:1,
                msg:"数据库进行错误",
               
            })
        }
        if(!data){
            return res.json({
                error:1,
                msg:"你所操作的商品不存在"
            })
        }
        data.num++;
        data.save((err,success)=>{
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
        });
    })
})

module.exports=app;