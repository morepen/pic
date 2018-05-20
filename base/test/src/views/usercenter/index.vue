<template>
  <div class="main">
       <list-item></list-item>
       <div class="sidebar">
        <div id="asideProfile" class="user-box aside-box">
          <h3 class="aside-title">个人资料</h3>
          <div class="profile-intro d-flex">
            <div class="avatar-box d-flex justify-content-center flex-column">
                <a href="https://my.csdn.net/qq_30604453">
                    <img :src="attachImageUrl(userinfo.userpic)" class="avatar_pic">
                    <span class="username">{{userinfo.username}}</span>
                </a>
             </div>
             <div><h3 class="signname">"只想做一名的骑士"</h3></div>
             <div class="useer_publish"><router-link to="publish"><span class="publish_btn">发布资讯</span></router-link></div>
           </div>
           <div class="ivu-edit" v-show="false" v-on:click="loginOut">编辑</div>
           <div class="ivu-btn" v-on:click="loginOut">退出</div>

        </div>
       </div>
  </div>
</template>

<script>
  import ListItem from '../../components/listItem'
  import PicSidebar from '../../components/sidebar.vue'
  export default{
        components: {
            'list-item':ListItem,
            'pic-sidebar':PicSidebar
        },
        data(){
            return{
                userinfo:this.$store.state.userinfo
            }
        },
        created() {
         if(!this.$store.state.userinfo.id){
            var _this=this;
            setTimeout(function(){
                            const url = 'login';
                            _this.$router.push({"path":url});
            },1000)
          }
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
<style>
@import '../../assets/css/page/sidebar.css';
 .main{
   margin: 100px auto;
    max-width: 1100px;
    padding: 0 10px;
    overflow: hidden;
  }
  .user-box{
    background:#fff;
    height:172px;
    position:relative;
  }
  #asideProfile{
    background:#fff;
    margin-bottom:10px;
    position:relative;
    padding-bottom:16px;
}
.aside-title{
    padding: 16px 16px 0;
    font-size: 14px;
    color: #333;
    text-align:left;
}
.aside-title:before{
    display: inline-block;
    margin-right: 8px;
    content: '';
    width: 4px;
    height: 22px;
    vertical-align: -6px;
    background-color: #41b883;
}

  .avatar_pic{
    display: inline-block;
    width: 48px;
    vertical-align:middle;
    height: 48px;
    border-radius: 50%;
}
.avatar-box{
    padding:0px 16px;
    padding-top:10px;
    text-align:left;
}
.username{
    vertical-align:middle;
}
.signname{
    color:#333;
    text-align:left;
    padding-left:16px;
    line-height:36px;
}
.ivu-edit{
   position:absolute;
    top:95px;
    right:76px;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.5;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 6px 15px;
    font-size: 12px;
    border-radius: 4px;
    transition: color .2s linear,background-color .2s linear,border .2s linear;
    color: #495060;
    background-color: #f7f7f7;
    border-color: #dddee1;
}
.ivu-btn{
    position:absolute;
    top:140px;
    right:16px;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.5;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 6px 15px;
    font-size: 12px;
    border-radius: 4px;
    transition: color .2s linear,background-color .2s linear,border .2s linear;
    color: #495060;
    background-color: #f7f7f7;
    border-color: #dddee1;
}
.useer_publish{
   text-align:left
}
.publish_btn{
  float:left;
  background:#41b883;
  padding:0 24px;
  line-height:30px;
  border-radius:15px;
  margin-top:10px;
  margin-left:20px;

  color:#fff;
}
</style>

