var express=require('express');
var app=express();
var UserModel=require('../models/zhuce');
const crypto = require('crypto' );


app.post('/user/zhuce',function(req,res){
   
    const hash =crypto.createHash('sha1');
    hash.update(req.body.pass);
    req.body.pass=hash.digest('hex');
    
    let name=req.body.name;
    UserModel.findOne({name}).exec((err,user)=>{
        if(err){
            return res.json({
                error:1,
                msg:"数据库错误12"
            })
        }
        if(user){
            return res.json({
                error:1,
                msg:"该用户已经注册"
            })
        }
        
        var data = new UserModel(req.body);
            data.save(function(err){
                if (err) {
                    return res.json({
                        error:1,
                        msg:"数据库错误13"
                    })
                };
                return res.json({
                    error:0,
                    msg:"注册成功"
                })
            })
    })

})

module.exports=app;