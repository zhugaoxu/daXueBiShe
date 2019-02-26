const express=require('express');
const app=express();
const ShopModel=require('../models/Shopping');

app.post('/shopcar',(req,res)=>{
    req.body.buyer=req.session.user.name;
    let buyer=req.body.buyer;
    ShopModel.find({buyer}).exec((err,yonghu)=>{
        console.log(yonghu);
        if(err){
            return res.json({
                error:1,
                msg:"数据库进行错误"
            })
        }
        if(!yonghu){
            let shopcar=new ShopModel(req.body);
            shopcar.save(function(err){
                if (err) {
                    return res.json({
                        error:1,
                        msg:"数据库错误13"
                    })
                };
                return res.json({
                    error:0,
                    msg:"注册成功123"
                })
            })
        }
        for(var i=0;i<yonghu.length;i++){
            if( (yonghu[i].id==req.body.id)&&(yonghu[i].color==req.body.color)&&(yonghu[i].xinghao==req.body.xinghao) ){
                // return res.json({
                //     error:1, 
                //     msg:"该商品已经存在你的购物车"
                // })
                yonghu[i].num=parseInt(yonghu[i].num)+parseInt(req.body.num);
                yonghu[i].save();
                return res.json({
                    error:1, 
                    msg:"添加到你的购物车成功"
                })
            }
            
        }
        let shopcars=new ShopModel(req.body);
        shopcars.save(function(err){
            if (err) {
                return res.json({
                    error:1,
                    msg:"数据库错误13"
                })
            };
            return res.json({
                error:0,
                msg:"购买成功"
            })
        })

    })
})


module.exports=app;