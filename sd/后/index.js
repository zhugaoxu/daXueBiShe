const express=require('express');
const app=express();
const nodemailer=require('nodemailer');
const bodyParser=require('body-parser');
const session=require('express-session');
const MongoStore=require('connect-mongo')(session);


const db=require('./models/db');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('www'));
const crypto = require('crypto' );


app.use( session({
    // 设置session的加密
    secret:'sessionLogin',
    // 设置cookie的存储时长，单位毫秒
    // cookie:{ maxAge:8 * 60 * 60 * 1000 },
    // 设置session数据存储的位置
    store:new MongoStore({
        url:'mongodb://localhost/jin'
    }),
    // 是否强制进行未初始化数据的保存
    saveUninitialized:false,
    // 是否强制进行session数据的保存
    resave:false,
    // 设置当前session id 值(这个属性值存储在cookie中)
    // 默认值是coonect.sid
    name:'sessLogin'
}) );


app.get('/user/xian',(req,res)=>{
    console.log('sss');
    let name=req.query.name1;
    db.collection('zz').find({name},(err,data)=>{
        if(err){
            return res.json({
                error:1,
                msg:"服务器异常",
                result:''
            })
        }
        data.toArray((err,item)=>{
            
            res.json({
                error:0,
                msg:"请求成功asd",
                result:item[0]
            })
        })
    })
    

})
app.get('/user/shi',(req,res)=>{
    
    let name=req.query.name;
    db.collection('ll').find({name},(err,data)=>{
        if(err){
            return res.json({
                error:1,
                msg:"服务器异常",
                result:''
            })
        }
        data.toArray((err,item)=>{
            
            res.json({
                error:0,
                msg:"请求成功asd",
                result:item
            })
        })
    })
})





app.get('/caini',(req,res)=>{
    console.log('caini');
    
    db.collection('ll').find((err,data)=>{
        if(err){
            return res.json({
                error:1,
                msg:"服务器异常",
                result:''
            })
        }
        data.toArray((err,item)=>{
            
            res.json({
                error:0,
                msg:"请求成功asd",
                result:item
            })
        })
    })
})



app.get('/user/sendemail',function(req,res){
         console.log(req.query.mail)
   
        let transporter = nodemailer.createTransport({
            // host: 'smtp.ethereal.email',
            service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
            port: 587, // SMTP 端口
            secureConnection: true, // 使用了 SSL
            auth: {
                user: '1302569547@qq.com',
                // 这里密码不是qq密码，是你设置的smtp授权码
                pass: 'yvlyydokfihthdef',
            }
        });

        let num = Math.floor(Math.random()*1000000);
        let mailOptions = {
            from: '1302569547@qq.com', // sender address
            to: req.query.mail, // list of receivers
            subject: 'Hello', // Subject line
            // 发送text或者html格式
            // text: 'Hello world?', // plain text body
            html: `<b>【昊辰】您的验证码是${num},请贫次验证码拿取狗粮</b>`
        };

// send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
        });
        res.json({
            error:0,
            msg:'发送成功',
            num
        })
        
    

})
app.get('/tuichu',(req,res)=>{
    req.session.user='';
    res.json({
        error:0
    })
})
app.use(require('./router/userzhuce'));
// app.use(require('./router/userlogin'));

app.use(require('./router/userlogin'));

app.use(require('./router/shopcar'));
app.use(require('./router/lookfor'));
app.use(require('./router/shopremove'));
app.use(require('./router/shopadd'));
app.use(require('./router/shopreduce'));
app.use(require('./router/dingdan'));
app.use(require('./router/searchding'));
app.use(require('./router/dingremove'));
app.use(require('./router/ping'));
app.use(require('./router/xiangqing'));

app.listen(3600,()=>{
    console.log('zhixing');
})