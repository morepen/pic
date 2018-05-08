<template>
  <div class="page">

<div class="post-item" v-for="(item, index) in piclist">
    <div></div>
    <div class="post-head clearfix">
        <a class="avatar clearfix" href="/people/哈哈小姐" target="_blank">
            <img :src="userImageUrl(item.userpic)" alt="" width="50" height="50">
            <span class="name">{{item.username}}</span>
        </a>
        <div class="user-info">
            <a class="name" href="/people/哈哈小姐" target="_blank">标题为：{{item.title}}</a>
            <p class="ell"></p>
        </div>
    </div>
    <div class="content">
        <h3 class="title content-title"><a href="/topic/5ad4164d46d01604d8511d12" target="_blank">内容为：{{item.content}}</a></h3>
        <div class="imglist" v-for="(pic, k) in jsonChange(item.pics)">
            <img class="content-picture" :src="attachImageUrl(pic)" alt="">
        </div>
    </div>
    <div class="port">
        <div class="bar">
            <a href="javascript:void(0)" class="share-bn">
                <span><i class="iconfont"></i></span>
                <ul>
                    <li><span onclick="shareTo(0, 'qq' ,'5ad4164d46d01604d8511d12')"><em class="iconfont"></em>QQ空间</span></li>
                    <li><span onclick="shareTo(0, 'wb' ,'5ad4164d46d01604d8511d12')"><em class="iconfont"></em>新浪微博</span></li>
                    <li class="wx_code"><span><em class="iconfont"></em>微信</span><img src="http://qr.liantu.com/api.php?&amp;w=153&amp;text=laosij.cn/topic/5ad4164d46d01604d8511d12"></li>
                </ul>
            </a>
            <a class="reply-button" v-on:click="showReply()" href="javascript:void(0)"  data-topic-id="5ad4164d46d01604d8511d12">
                <span><i class="iconfont"></i>1</span>
            </a>
            <a class="like" href="javascript:void(0)" liked="0" data-topic-id="5ad4164d46d01604d8511d12">
                <span><i class="iconfont"></i><em>1</em></span>
            </a>
        </div>
    </div>
    <div class="reply" v-show="isReply">
        <div class="default" v-show="falses"><i class="iconfont"></i><span>加载中1...</span></div>
        <div class="reply-wrap">

        </div>
        <div class="comment clearfix">
            <textarea class="comment-content" data-topic-id="5ad4164d46d01604d8511d12" placeholder="大家都是文化人，有话好好说"></textarea>
            <span class="comment-bnt">发表评论</span>
        </div>
    </div>
</div>
   
<div id="paging">
    <ul class="clearfix">
        
                <li><a class="on" href="/p/1">1</a></li>
            
                <li><a href="/p/2">2</a></li>
            
                <li><a href="/p/3">3</a></li>
            
                <li><a href="/p/4">4</a></li>
            
                <li><a href="/p/5">5</a></li>
            

        
            <li><a href="/p/2">下一页</a></li>
        

        <li class="clearfix skip-to">
            <input id="skip-to" paging-link="/p/" class="skip-to" type="text" placeholder="">
            <a id="skip-bn" href="javascript:void(0)">跳转</a>
        </li>
    </ul>
</div>

    <script type="text/html" id="replyTemplate">
        <div class="reply-item clearfix">
            <a class="reply-head" href="">
                <img src="[avatar]" alt="" width="30" height="30">
            </a>
            <div class="reply-content">
                <a href="/people/[name]" target="_blank">[name]</a>
                <span>[text]</span>
            </div>
            <div class="reply-port clearfix">
                <div class="r">
                    <a class="reply-like-btn[liked]" href="javascript:void(0)" liked="[is-liked]" data-reply-id="[_id]"><i class="iconfont">&#xe872;</i><span>[like]</span></a>
                </div>
                <em>[floor]L</em>
            </div>
        </div>
    </script>
</div>
</template>

<script>
import api from '../fetch/api';
export default{
        data(){
            return{
                isReply:false,
                picpath:this.$store.state.uploadpath,
                piclist:[],
                imglist:[],
                state:'1',
                start:'1',
                limit:'10'


            }
        },
        created() {
            var data={
                   state:this.state,
                   start:this.start,
                   limit:this.limit
            }
            var that=this;
            api.PicList(data).then(function (response) {
                    if(response.code=="200"){
                        that.piclist=response.data;                       
                    }
                
                  })
            .catch(function (error) {
                  console.log(error);
            });
        },
        methods: {
            showReply(){
                this.isReply = true
            },
            userImageUrl(srcUrl) {
              var that=this;
              
              if (srcUrl !== undefined) {
                 return this.$store.state.userpicUrl+srcUrl;
                 alert(this.$store.state.userpicUrl+srcUrl);
               }
            },
            attachImageUrl(srcUrl) {
              var that=this;
              if (srcUrl !== undefined) {
                 return that.picpath+srcUrl;
               }
            },
            jsonChange(string) {
              if (string) {
                 return JSON.parse(string);
               }
            }
        }
    }


</script>
<style>
@import '../assets/css/page/reply.css';
@import '../assets/css/page/paging.css';
@import '../assets/css/page/page.css';
.imglist{
    float:left;

}
.content-picture{
    width:160px;
    height:160px; 
}
</style>

