const express=require('express');
const app=express();
const UserModel=require('../models/zhuce');
const crypto = require('crypto' );


app.post('/user/login',function(req,res){

    const hash =crypto.createHash('sha1');
    hash.update(req.body.pass);
    req.body.pass=hash.digest('hex');
    
    

    console.log(req.body);
    let name=req.body.name;
    let pass=req.body.pass;
    UserModel.findOne({name}).exec((err,data)=>{
        if(err){
            return res.json({
                error:1,
                msg:"数据库进行错误"
            })
        }
        if(!data){
            return res.json({
                error:1,
                msg:"该用户还未进行注册"
            })
        }
        if(pass!==data.pass){
            return res.json({
                error:1,
                msg:"输入的密码有错"
            })
        }
        req.session.user=data;
        return res.json({
            error:0,
            msg:"登录成功",
            users:req.session.user.name
        })
    })
    

    
})

module.exports=app;