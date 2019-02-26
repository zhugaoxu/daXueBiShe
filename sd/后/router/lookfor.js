const express=require('express');
const app=express();
const ShopModel=require('../models/Shopping');

app.get('/user/lookfor',(req,res)=>{
    let buyer=req.query.name;
    ShopModel.find({buyer}).exec((err,shops)=>{
        if(err){
            return res.json({
                error:1,
                msg:"数据库进行错误",
                shops:""
            })
        }
        if(!shops){
            return res.json({
                error:1,
                msg:"购物车为空，还没进行购买",
                shops:""
            })
        }
        return res.json({
            error:0,
            msg:"打开购物车中",
            shops

        })

    })
})

module.exports=app;