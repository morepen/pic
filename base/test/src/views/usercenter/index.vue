<template>
<div class="center">
    <a class="item head clearfix" href="/user/edit">
        <img class="avatar" src="<%= user.info.avatar %>" alt="<%= user.info.loginname %>" width="55" height="55">
        <p class="info">
            <span class="ell"><%= user.info.loginname %></span>
            <span class="ell desc"><%= user.info.description %></span>
        </p>
        <p class="iconfont">&#xe625;</p>
    </a>
    <a href="/user/edit" class="item clearfix">
        <p class="title">修改资料</p>
        <p class="iconfont">&#xe625;</p>
    </a>
    <a href="/people/<%= user.info.loginname %>" class="item clearfix">
        <p class="title">我的帖子</p>
        <p class="iconfont">&#xe625;</p>
    </a>
    <a href="/reply/<%= user.info.loginname %>" class="item clearfix">
        <p class="title">我的评论</p>
        <p class="iconfont">&#xe625;</p>
    </a>
    <a href="/user/out" class="item clearfix">
        <p class="title">退出登录</p>
        <p class="iconfont">&#xe625;</p>
    </a>
    <a href="" class="item clearfix">
        <p class="title">关于我们</p>
        <p class="iconfont">&#xe625;</p>
    </a>
</div>
</template>
<style>
@import '../../assets/css/page/user_center.css';

</style>
<script>
</script>
