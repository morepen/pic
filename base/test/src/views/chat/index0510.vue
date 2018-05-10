<template>
    <div class="chat">
      <div class="userlist">
        <p>在线用户列表:</p>
        <div class="useritem" v-for="(item, index) in userlist">
           <img class="avatar" :src="attachImageUrl(item.userpic)"  width="55" height="55">
           <p>{{item.username}}</p>
        </div> 
      </diV>
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
                        _this.userlist=data['db'];
                        _this.$store.state.onlinenum=data['db'].length;
                        var string = "";
                        for(i = 0; i < data['length']; i++){
                            console.log(data['db'][i]['username']);
                            string += '<h4>' + data['db'][i]['username'] + '</h4>';
                        }
                   
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
    float: none;
  }
  .userlist{
    min-height:300px;
  }
  .useritemDiv{
     overflow:hidden;
   }
  .useritem{
     float:left;
     width:60px;
     margin:0 5px;
  }
  .avatar{
    border-radius:50%;
  }
</style>