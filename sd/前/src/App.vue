<template>
  <div id="app">
    <!-- <home-page></home-page> -->
    <router-view />
    <foot-er/>
  </div>
</template>

<script>
import axios from "axios";
// import HomePage from './pages/Homepage';
import FootEr from './components/FootEr'
export default {
  data:function(){
    return{
      name: 'App'
    }
  },
  mounted(){
    // alert('猪宝宝');·
    // console.log('zhuzhu ');
    // axios.get('/server/user',(res)=>{
      // console.log('chengle');
    // })
    
  },
  components:{
    //  HomePage
    FootEr
  }

  
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}
body{
  background:#f4f4f4;
}
a{
  text-decoration: none;
}
</style>
