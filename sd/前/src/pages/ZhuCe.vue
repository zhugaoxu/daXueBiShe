<template>
  <div class="zhuce">
      <div class="zhuce-body">
          <p>欢迎您的到来</p>
          <div class="zhuce-main">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                     <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
               <el-form-item label="密码" prop="pass">
                     <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
               </el-form-item>
               <el-form-item label="确认密码" prop="checkPass">
                     <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
               </el-form-item>
                <el-form-item label="邮箱" prop="email" class="zhuce-you" >
                     <el-input v-model="ruleForm.email"></el-input>
                     <!-- <el-button style="float:left">发送邮箱</el-button> -->
                </el-form-item>
                <el-form-item label="验证码" prop="semail">
                     <el-input v-model="ruleForm.semail"></el-input>
                </el-form-item>
                <el-form-item class="zhuce-foo">
                       <el-button v-if="ruleForm.isBoo" @click="sendemail">发送邮件</el-button>
                       <el-button v-else style="disabled"><span class="chong"></span>s重新发送</el-button>
                       <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                       <el-button @click="resetForm('ruleForm')">重置</el-button>

                </el-form-item>
            </el-form>
          </div>
      </div>
  </div>
</template>
<script>
   import axios from 'axios';
   export default {
     data() {

        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        else if(value!=this.ruleForm.num){

          callback(new Error('输入的验证码错误'));
        }
        else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
       var validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
         ruleForm: {
          name: '',
          pass: '',
          checkPass: '',
          email:"",
          semail:"",

          num:"",
          isBoo:true

        },
         rules: {
          name: [
            { required: true, message: '请输入你的姓名', trigger: 'blur' },
            { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: 'blur' },
            //  { validator: validatePass, trigger: 'blur' }
          ],
          pass: [
             { required:true,message:"密码输入不能为空" },
             { pattern:/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{8,}$/, message: '长度大于8，不同输入类型' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          email:[
            { required: true, message: '输入邮箱不能为空', trigger: 'blur' },
            { pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: '请输入正确的邮箱地址' }
          ],
          semail:[
            { required: true, message: '请输入验证码', trigger: 'blur' },
          ]


        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');

            let xinxi=`name=${this.ruleForm.name}&pass=${this.ruleForm.pass}&email=${this.ruleForm.email}`;
            // console.log(xinxi);
            axios.post('/server/user/zhuce',xinxi).then((val)=>{
              console.log(val);
              alert(val.data.msg);
              if(val.data.error==0){
                location.href='/'
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      sendemail(){
        this.ruleForm.isBoo=false;
        let that=this;
        let ss=60;
        setInterval(function(){
          if(ss>1){
            ss--;
            $('.chong').text(ss);
          }
          else{
            that.ruleForm.isBoo=true;
            // clearInterval;
            return;

          }

        },1000)



        let data=this.ruleForm.email;
        axios.get('/server/user/sendemail',{
          params:{
            mail:data
          }
        }).then((val)=>{
          console.log(val.data.num);
          this.ruleForm.num=val.data.num;

        })

      }
    },
    mounted(){
         console.log(this.$route.params)

    }
  }

</script>
<style>
.zhuce{
  height: 950px;
  width: 1920px;
  background-image: url('http://uploads.5068.com/allimg/1712/151-1G204103113.jpg');
  position: absolute;
  top:0;
  left: 0;
}
.zhuce-body{
  height: 500px;
  width: 400px;
  position: absolute;
  top: 220px;
  left: 750px;
  border: 1px solid red;
  background: rgba(0,0,0);
}

.zhuce-body p{
  height: 80px;
  width: 100%;
  /* background: red; */
  line-height: 80px;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 2px;
  border: 1px solid red;
}
.zhuce-main{
  text-align: left;
  padding: 0;
  margin: 0;
  margin-top: 10px;
}
.zhuce .el-input__inner{
  width: 250px !important;
}
/* .zhuce-you .el-input__inner{
  width:120px !important;
} */
.zhuce-foo .el-form-item__content{
  margin-top:15px !important;
  margin-left:70px !important;
}
</style>

