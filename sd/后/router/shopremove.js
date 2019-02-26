const express=require('express');
const app=express();
const ShopModel=require('../models/Shopping');

app.get('/shop/remove',(req,res)=>{
    let _id=req.query.name;
    console.log(_id);
    
    ShopModel.remove({_id}).exec((err,shops)=>{
        if(err){
            return res.json({
                error:1,
                msg:"数据库进行错误",
               
            })
        }
        return res.json({
            error:0,
            msg:"删除商品成功"
        })

    })
})



// app.get('/shop/add',(req,res)=>{
//     let _id=req.query.name;
//     console.log('ss');
//     ShopModel.findOne({_id}).exec((err,data)=>{
//         if(err){
//             return res.json({
//                 error:1,
//                 msg:"数据库进行错误",
               
//             })
//         }
//         if(!data){
//             return res.json({
//                 error:1,
//                 msg:"你所操作的商品不存在"
//             })
//         }
//         data.num++;
//         data.save();
//     })
// })

module.exports=app;