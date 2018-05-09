<template>
  <div class="header">
	<div id="header">
    <div class="head-main clearfix">
        <div class="band clearfix">
            <router-link :to="{path: '/'}">
              <img src="../assets/img/logo.png" class="hc_login">
            </router-link>
            <div class="port">
                <router-link to="pass"><a href="/post/pass" class="iconfont">&#xe6de;</a></router-link>
                <router-link to="publish"><a class="iconfont post-up">&#xe6e5;</a></router-link>
            </div>
        </div>
        <div class="menu">
            <ul class="clearfix">
                
                <li  class="on"  ><a href="/">最新</a></li>
                <li  ><a href="/week">周榜</a></li>
                <li  ><a href="/month">月榜</a></li>
                <router-link to="pass" v-show="false"><li class="hid post"><a href="/post/pass">审贴</a></li> </router-link>
                <router-link to="publish"><li class="hid post-up"><a class="post-up" href="/post/up">投稿</a></li></router-link>
                <router-link to="usercenter"><li class="hid post-up"><a class="post-up" href="/post/up">我的</a></li></router-link>
                <router-link to="chat"><li class="hid post-up"><a class="post-up" href="/post/up">聊天室</a></li></router-link>
                <li class="user">
                    
                    <a href="/user/login">
                        登录
                    </a>
                    
                </li>
            </ul>
        </div>
        <div class="login">
          <router-link to="login"><span><span class="loginStyle">[</span>登陆<span class="loginStyle">]</span></span></router-link>
          <router-link to="register"><span><span class="loginStyle">[</span>注册<span class="loginStyle">]</span></span></router-link>
        </div>
        <div class="login1" v-show="false">
            <a class="login-btn quick" href="javascript:void(0)"><i class="iconfont">&#xe606;</i>快速登录</a>
            <router-link to="login"><a class="login-btn login-quick" href="/user/login"><i class="iconfont">&#xe6f0;</i>站内登录</a></router-link>
            <a class="login-btn login-quick" href="/auths/qq"><i class="iconfont">&#xe607;</i>QQ&nbsp;登录</a>
            <a class="login-btn login-quick" href="/auths/wb"><i class="iconfont">&#xe652;</i>微博登录</a>
        </div>
        
    </div>
    <div class="head-phone">
        <i class="iconfont back">&#xe605;</i>
        <h1>逗你的 【正经网站】内涵图，搞笑图片</h1>
        <a href="/user/login" class="iconfont user">
            &#xe606;
        </a>
    </div>
</div>
</div>
</template>

<script>
</script>
<style>
 #header {
    width: 100%;
    height: 60px;
    background: white;
    border-bottom: 1px solid #e2e2e2;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}

#hint {
    position: fixed;
    top: -60px;
    z-index: 99999;
    width: 100%;
    font-size: 16px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: white;
    background-color: #3498DB;
    opacity: 0.9;
}

#header .head-main {
    max-width: 1100px;
    padding: 0 10px;
    height: 60px;
    line-height: 50px;
    margin: 0 auto;
}

#header .head-main .logo {
    float: left;
    width: 120px;
    overflow: hidden;
}

#header .head-main .logo a {
    display: block;
    height: 0;
    margin-top: 15px;
    padding-top: 30px;
    overflow: hidden;
    background: url('/public/img/logo.png') no-repeat 0 0;
}

#header .head-main .band {
    float: left;
}

#header .head-main .band .port {
    float: right;
    display: none;
}

#header .head-main .band .port a {
    float: left;
    line-height: 45px;
    width: 45px;
    font-size: 24px;
    text-align: center;
    padding: 0 4px;
}

#header .head-main .band .port a:active {
    background-color: #eff3f5;
    color: #3498DB;
}

#header .head-main .menu {
    float: left;
}

#header .head-main .menu ul li {
    float: left;
    text-align: center;
}

#header .head-main .menu ul .on a {
    color: #3498DB;
}

#header .head-main .menu ul .user {
    display: none;
}

#header .head-main .menu ul li a {
    font-size: 16px;
    display: block;
    padding: 0 15px;
    border-top: 5px solid transparent;
}

#header .head-main .menu ul li a:hover {
    border-top: 5px solid #3498DB;
    box-shadow: 0 0 2px rgba(0, 0, 0, .1);
    color: #3498DB;
}

#header .head-main .login {
    float: right;
    max-width: 190px;
    height: 60px;
    box-sizing: border-box;
    font-size: 16px;
    border-top: 5px solid transparent;
    background-color: white;
    overflow: hidden;
}


#header .head-main .login1 .login-btn:hover {
    background-color: #eff3f5;
}

#header .head-main .login1 .login-btn {
    display: block;
    padding: 0 15px;
    height: 55px;
    transition: all 0.3s;
    text-align: center;
    color: #3498DB;
    line-height: 50px;
}

#header .head-main .login1 .login-btn i {
    padding-right: 10px;
}

#header .head-main .login1 .login-btn img {
    vertical-align: middle;
    padding-right: 5px;
}

#header .head-main .login1 .quick {
    font-weight: bold;
}

#header .head-main .login1.quick i {
    font-size: 25px;
    vertical-align: middle;
    position: relative;
    top: -2px;
}

#header .head-main .login1 .login-quick {
    color: #7a8e9d;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
}

#header .head-main .login1 .login-quick:hover {
    color: #3498DB;
}

#header .head-main .login1 .login-quick i {
    font-size: 20px;
    vertical-align: middle;
}

#header .head-main .login1 .login-quick .set {
    position: relative;
    top: -2px;
}


#header .head-phone {
    display: none;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: white;
    position: relative;
    border-bottom: 1px solid #d1dbdc;
}

#header .head-phone i {
    position: absolute;
    font-size: 20px;
    width: 50px;
    text-align: center;
    top: 0;
    left: 0;
    cursor: pointer;
}

#header .head-phone h1 {
    text-align: center;
    font-size: 18px;
}

#header .head-phone a {
    position: absolute;
    font-size: 25px;
    width: 50px;
    padding: 10px 0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    top: 0;
    right: 0;
    cursor: pointer;
}

#header .head-phone a img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

#header .head-phone a:active {
    background-color: #efefef;
}

#header .head-phone i:active {
    background-color: #efefef;
}

/*
* 适应屏幕
* 770
*/

@media only screen and (max-width: 800px) {
    #header {
        height: auto;
        border: none;
        box-shadow: none;
    }
    .hc_login{
        position:absolute;

        top:-5px;
        left:10px;
        width:10px;

    }
    #hint {
        height: 45px;
        line-height: 45px;
    }

    #header .head-main {
        line-height: normal;
        padding: 0;
        height: auto;
    }

    #header .head-main .login {
        display: none;
    }

    #header .head-main .band {
        height: 45px;
        float: none;
    }

    #header .head-main .logo {
        width: 198px;
    }

    #header .head-main .band .logo a {
        background: none;
        height: 45px;
        line-height: 45px;
        padding: 0;
        margin: 0;
        font-size: 18px;
        padding-left: 10px;
    }

    #header .head-main .band .port {
        display: block;
        height: 45px;
    }

    #header .head-main .menu {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #d1dbdc;
    }

    #header .head-main .menu .hid{
        display: none;
    }

    #header .head-main .menu ul .user{
        display: block;
    }

    #header .head-main .menu ul li {
        width: 25%;
    }

    #header .head-main .menu ul li a {
        border: none;
        border-bottom: 2px solid transparent;
        height: 38px;
    }

    #header .head-main .menu ul .on a {
        color: #3498DB;
        border: none;
    }

    #header .head-main .menu ul li a:hover {
        background-color: #e6e6e6;
        color: #3498DB;
        border: none;
        border-bottom: 2px solid #3498DB;
    }
}
.hc_login{
    margin:10px;
    width:40px;
    height:40px;
}
.loginStyle{
    color:#41b883;
    font-weight:bloder;
    font-size:16px;
}
</style>

