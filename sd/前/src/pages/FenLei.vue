<template>
    <div class="">

    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data:function(){
            return{
                zhi:"",
                fen:""
            }
        },
        mounted(){
           console.log(this.$route.params);
           this.zhi=this.$route.params.name;
           axios.get('/server/user/shi',{
                     params:{
                         name:this.zhi
                     }
                 }).then((val)=>{
                    //  console.log(val);
                     this.fen=val.data.result;
                     console.log(this.fen);
                 })
        }
    };
</script>
<style>

</style>
