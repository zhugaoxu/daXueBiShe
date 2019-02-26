var express=require('express');
var app=express();
const db=require('../models/db');
const PingModel=require('../models/pingjia');

app.get('/user/shu',(req,res)=>{
    
    let id=req.query.name;
    db.collection('ll').find({id},(err,data)=>{
        if(err){
            return res.json({
                error:1,
                msg:"服务器异常",
                result:''
            })
        }
        PingModel.find({id}).exec((err,datas)=>{
            data.toArray((err,item)=>{
            
               return res.json({
                    error:0,
                    msg:"请求成功asd",
                    datas:datas,
                    result:item[0],
                    
                })
            })

        })
       
    })
})
module.exports=app;