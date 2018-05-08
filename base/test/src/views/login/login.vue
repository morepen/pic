<template>
	<div class="login">
	    <div id="main" style="padding-bottom: 100px">
    <p class="title iconfont login-title">
        <span><i class=" iconfont"></i>用户登录</span>
    </p>
    <div class="edit">
        <form id="new-user-form" class="clearfix" action="/api/user/login" method="post" enctype="application/x-www-form-urlencoded">
            <div class="item">
                <span class="input-span"><i class="iconfont" style="position:relative;top: -2px;"></i>请输入用户名</span>
                <input class="loginname" v-model="username" name="loginname" type="text" placeholder="昵称">
                <div class="line"></div>
            </div>
            <div class="item">
                <span class="input-span"><i class="iconfont"></i>请输入你的密码</span>
                <input class="password" v-model="password" name="password" type="password" placeholder="密码">
                <div class="line"></div>
            </div>
            <div class="item hc-btn finish" v-on:click="Login">登录</div>
            <router-link to="register"><a class="tologin" href="/user/new">还没有账号，马上注册</a></router-link>
            
            <span class="more">第三方账号登录</span>
            <div class="item login-more clearfix">
                <a class="item btn btn-quick" style="margin-right: 20px;" href="/auths/wb"><em class="iconfont" style="color: #ff424f;"></em></a>
                <a class="item btn btn-quick" href="/auths/qq"><em class="iconfont" style="color: #43d2f4;"></em></a>
            </div>
            

        </form>
    </div>
      </div>
	</div>
</template>
<script>
    import md5 from 'js-md5';
    import api from '../../fetch/api';
    export default{
        data(){
            return{
                isNowPage: true,
                username:"",
                password:"",
                email:""

            }
        },
        methods: {
          Login:function(){
                 var data={
                   username:this.username,
                   password:md5(this.password)
                  }
             
                  var that=this;
                  api.Login(data).then(function (response) {

                    if(response.code=="200"){
                      debugger;
                      that.$store.state.userinfo=response.data[0];
                      localStorage.userinfo = JSON.stringify(response.data[0]);
                      that.$router.push({ path: 'usercenter' }) 
                    }
                
                  })
                 .catch(function (error) {
                  console.log(error);
                 });
          }
        }
    }
</script>
<style scoped>

.item {
    padding: 20px 5px;
    padding-bottom: 10px;
    line-height: 25px;
    border-bottom: 3px solid transparent;
    position: relative;
}
 .edit {
    position: relative;
    max-width: 510px;
    margin: 0 auto;
    margin-top: 40px;
    padding: 0 5px;
}

.edit-head {
    padding: 20px 60px 20px 40px;
    color: #34495e;
    font-size: 24px;
}

.edit-head  i {
    font-size: 24px;
    vertical-align: middle;
    padding-right: 10px;
    color: #3498DB;
}

.more{
    text-align: center;
    display: block;
    padding-top: 25px;
    cursor: pointer;
}
.tologin {
    width: 100%;
    height: 25px;
    padding-top: 10px;
    line-height: 25px;
    text-align: center;
    display: block;
    color: #3da2e3;
}
.edit-form {
	padding: 20px 50px;
    border-top: 1px solid #EAEAEA;
    margin: 0 auto;
}

.info {
    width: 620px;
    margin: 0 auto;
}

 .group {
    padding-bottom: 50px;
}
.title {
    font-size: 16px;
	color: #2c3e50;
}
span{
    font-size: 15px;
    color: #b8c5ce;
}
input {
    font-size: 16px;
    color: #5d6d7e;
    border-radius: 2px;
    opacity: 0.8;
    width: 600px;
    height: 52px;
    margin-top: 10px;
    padding-left: 15px;
    line-height: 52px;
    border: 1px solid #f0f2f4;
    display: inline-block;
    background-color: #f5f7f8;
    outline: none;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    border-bottom: 3px solid transparent;
}
input:hover {
    border-bottom: 3px solid #3498DB;
}
input:focus {
    background-color: #eaeaea;
    border-bottom: 3px solid #3498DB;
}


.community {
    float: left;
}
input {
    margin: 0 auto;
    vertical-align: top;
    width: 93%;
    height: 25px;
    display: block;
    padding: 5px 10px;
    resize: none;
    font-size: 14px;
    color: #5d6d7e;
    border-radius: 2px;
    opacity: .8;
    padding-left: 15px;
    line-height: 25px;
    border: 1px solid #f0f2f4;
    background-color: #f5f7f8;
    outline: 0;
    transition: all .3s;
    -webkit-transition: all .3s;
    border-bottom: 3px solid transparent;
}
img {
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    width: 140px;
    height: 140px;
}
.avatar {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    margin-bottom: 15px;
}

.edit .content .edit-form .avatar:hover .avatar{
    box-shadow: 0 0 10px rgba(0,0,0,.3);
}

.edit .content .edit-form .avatar input {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    cursor: pointer;
    opacity: 0;
}
.hc-btn {
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 2px;
    background: #3499da;
    color: #fff;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
}
.hc-btn:hover {
   background-color: #49a3de; 
}

.edit .content .edit-form .group .btn {
    float: left;
    margin-right: 20px;
}

.cancel {
    background: none;
    color: #576f81;
}
.cancel:hover {
    background: none;
    color: #3da2e3;
}
.login-title {
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    font-size: 20px;
    border-bottom: 1px solid #ddd;
    text-align:left;
}
.input-span {
    font-size: 15px;
    color: #b8c5ce;
    display: block;
    height: 25px;
    line-height: 25px;
    padding-bottom: 10px;
    text-align:left;
}
@media only screen and ( max-width: 800px ) {

    body {
        background-color: white;
    }

    .edit {
        margin-top: 70px;
        box-shadow: none;
        border: none;
        width: 100%;
    }

    .edit .content .edit-form {
        padding: 10px 20px;
        border: none;
    }

    .edit .content .edit-head {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        padding: 0;
        padding-left: 15px;
        display: none;
    }

    .edit .content .edit-head i {
        font-size: 18px;
    }


    .edit .content .edit-form .avatar {
        float: none;
        width: 80px;
        height: 80px;
    }
    
    .edit .content .edit-form .avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: none;
        box-shadow: none;
        margin: 0 auto;
        display: block;
    } 

    .edit .content .edit-form .avatar .btn {
        display: none;
    }

    .edit .content .edit-form .info {
        width: 100%;
    }

    .edit .content .edit-form .group {
        padding-bottom: 20px;
        float: none!important;
    }

    .edit .content .edit-form .group input {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding: 0;
        text-indent: 10px;
        font-size: 14px;
    }

    .edit .content .edit-form .community {
        float: none;
        margin-right: 0 !important;
    }

    .edit .content .edit-form .group .title span {
    }

    .edit .content .edit-form .group .title {
        font-size: 14px;
    }

    .edit .content .edit-form .group .cancel {
        display: none;
    }

    .edit .content .edit-form .group .btn {
        float: none;
        margin: 0;
    }


}

</style>