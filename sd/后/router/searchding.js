const express=require('express');
const app=express();

const DingModel=require('../models/DingDan');


app.get('/huoqu/dingdan',(req,res)=>{
//    console.log(req.body)
    let buyer=req.session.user.name;
    console.log(buyer);
    DingModel.find({buyer}).exec((err,dings)=>{
        if(err){
            return res.json({
                error:1,
                msg:"数据库进行错误",
               
            })
        }
        if(!dings){
            return res.json({
                error:1,
                msg:"订单为空",
              
            })
        }
        return res.json({
            error:0,
            msg:'获取数据成功',
            dings
        })
    })
     
})




module.exports=app;