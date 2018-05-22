<template>
    <div class="chat">
      <div class="chat_online">
        <p class="online-text">在线用户列表:</p>
        <div class="useritem" v-for="(item, index) in userlist">
           <img class="avatar" :src="attachImageUrl(item.userpic)"  width="55" height="55">
           <p>{{item.username}}</p>
        </div> 
      </diV>
      <ul class="chat_head">
             <li>通知</li>
             <li>聊天</li>
      </ul>
      <div class="chat_content">
         <div class="chat_left"></div>
         <div class="chat_right">
             <div class="chat_info">122</div>
             <div class="chat_handle"></div>
         </div>
      </div>

    </div>
</template>
<script>
    import io from 'socket.io-client'
    export default {
        data() {
            return {
                ws: null,
                nickName: "123",
                chatList: [],
                content: "444",
                userlist:[]
            }
        },
        created() {
          if(!this.$store.state.userinfo.id){
            var _this=this;
            setTimeout(function(){
                            const url = 'login';
                            _this.$router.push({"path":url});
            },1000)
          }else{
             this.getonline();
          }                        
        },
        mounted: function () {
              
        },
        methods: {
            getonline(){
                    this.content=555;
                    this.socket = io.connect("http://localhost:3000/");
                    var _this=this;
                    this.socket.on('news', function (data) {
                         alert(data);
                   
                    })
            },
            attachImageUrl(srcUrl) {
              var that=this;              
              if (srcUrl !== undefined) {
                 return this.$store.state.userpicUrl+srcUrl;
               }
            }    
        }
    }
</script>
<style style scoped>
  .chat{
    width: 800px;
    margin: 0 auto;
  }
  .chat_online{
    margin-top:100px;
    text-align:left;
    background:#fff;
    height:120px;
  }
  
  .useritemDiv{
     overflow:hidden;
     background:#fff;
   }
  .online-text{
    line-height:30px;
    padding-left:10px;
  }
  .useritem{
     float:left;
     width:60px;
     margin:10px 5px;
  }
  .avatar{
    border-radius:50%;
  }
  .chat_munu li{
    float:left;
    width:40px;
    line-height:36px;
  }
  .chat_head{
    overflow:hidden;


  }
</style>