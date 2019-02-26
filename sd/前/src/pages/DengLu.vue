<template>
  <div class="denglu">
      <div class="denglu-body">
          <p>欢迎您的到来</p>
          <div class="denglu-main">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                     <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
               <el-form-item label="密码" prop="pass">
                     <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
               </el-form-item>
              
                <el-form-item class="denglu-foo">
                      
                       <el-button class="deng-button" type="primary" @click="submitForm('ruleForm')">登录</el-button>
                       <el-button class="deng-button" @click="resetForm('ruleForm')">重置</el-button>
                       
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
        return {
         ruleForm: {
          name: '',
          pass: '',    
        },
         rules: {
          name: [
            { required: true, message: '请输入你的姓名', trigger: 'blur' },
            { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: 'blur' },
           
          ],
          pass: [
             { required:true, message: '请输入密码' ,trigger:'blur' },
             { pattern:/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{8,}$/, message: '长度大于8，不同输入类型' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let denglu=`name=${this.ruleForm.name}&pass=${this.ruleForm.pass}`;
            // console.log(xinxi);
            axios.post('/server/user/login',denglu).then((val)=>{
            //   console.log(val);
            //    console.log(val.data.users);
              this.$cookies.set('username',val.data.users);
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
    },
    mounted(){
         console.log(this.$route.params)   
    }
  }
  
</script>
<style>
.denglu{
  height: 950px;
  width: 1920px;
  background-image: url('http://uploads.5068.com/allimg/1712/151-1G204103113.jpg');
  position: absolute;
  top:0;
  left: 0; 
}
.denglu-body{
  height: 500px;
  width: 400px;
  position: absolute;
  top: 220px;
  left: 750px;
  border: 1px solid red; 
  background: rgba(0,0,0);
}

.denglu-body p{
  height: 80px;
  width: 100%;
  /* background: red; */
  line-height: 80px;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 2px;
  border: 1px solid red;
}
.denglu-main{
  text-align: left;
  padding: 0;
  margin: 0;
  margin-top: 10px;
}
.denglu .el-input__inner{
  width: 250px !important;
}
.denglu .el-form-item{
    margin:60px 0px !important;
}
.deng-button{
    margin: 0 30px 0 5px !important;
}
</style>

