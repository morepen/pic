<template>
    <div class="chat">
     <router-link to="/chat/room">  
       <div class="chat_list">
          <div class="owner_img">
            <img :src="attachImageUrl(userinfo.userpic)" class="avatar_chat">
          </div>
          <div class="owner_name">{{userinfo.username}}</div>
          <div class="owner_notice">房间说明</div>
       </div>
       </router-link>
    </div>
</template>
<script>
   export default{
        data(){
            return{
                userinfo:this.$store.state.userinfo
            }
        },
        created() {

        },
        methods: {
          register(){

          },
          attachImageUrl(srcUrl) {
              var that=this;              
              if (srcUrl !== undefined) {
                 return this.$store.state.userpicUrl+srcUrl;
               }
           },
           loginOut:function(){
             localStorage.userinfo ="";
             this.$store.state.loginOut=true;
             this.$store.state.loginIn=false;
             this.$router.push({ path: 'login' }) 
          }
        }
   }
</script>
<style style scoped>
  .chat{
    max-width: 1100px;
    padding: 0 10px;
    margin:0 auto;
    overflow: hidden;
  }
  .chat_list{
     width: 33%;
     margin:10px;
     min-height:200px;
     background:#fff;
  }
  .avatar_chat{
    width:80px;
    height:80px;
    border-radius:100%;
    margin-top:18px;
  }
  .owner_name{
    line-height:26px;
  } 
  .owner_notice{
    line-height:30px;
  }
</style>