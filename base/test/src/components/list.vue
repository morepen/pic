<template>
<div class="page">
  <ul class="article-list">
   <router-link :to="{ path:'/detail', query: { id:12} }">
    <li class="article-list-li" v-for="(item, index) in piclist">
      <a class="article-list-avatar"><img :src="userImageUrl(item.userpic)" alt=""></a> 
      <h2 class="article-tip"><a>{{item.title}}</a></h2> 
      <p class="article-abstract">{{item.content}}</p> 
        <p>
          <span><a>{{item.username}}</a></span> 
          <span>1小时前</span> 
          <span>标签</span> 
          <span class="article-list-hint">
            <a><i class="ivu-icon ivu-icon-chatbox-working"></i>8
              <i class="ivu-icon ivu-icon-ios-eye"></i>106
            </a></span>
        </p>
      </li>
      </router-link>
   </ul> 
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
    width:140px;
    height:140px;
    margin:5px;
    border:#ccc solid 1px;
}

.article-list {
    padding: 5px 0;
    background-color: #fff;
    border-radius: 2px;
    font-size: 12px;
    text-align:left;
}

.article-list li:last-child {
    border-bottom: none
}

.article-list .article-list-li {
    position: relative;
    height: 120px;
    margin-top: 0;
    padding: 10px 0 10px 75px;
    border-bottom: 1px dotted #e9e9e9
}

.article-list-li .article-list-avatar {
    position: absolute;
    left: 15px;
    top: 10px
}

.article-list-li h2 {
    line-height: 26px;
    font-size: 0
}

.article-list-li h2 * {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: top
}

.article-list-li h2 a {
    max-width: 86%;
    margin-left: 100px;
    margin-right: 10px;
    overflow: hidden;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px
}

.article-list-li h2 span {
    position: relative;
    top: 3px;
    margin-left: 5px
}

.article-list-li a:hover {
    color: #009e94
}

.article-list-li p {
    position: relative;
    line-height: 20px;
    margin-left: 100px;
    font-size: 12px;
    color: #999;
    margin-top: 10px
}

.article-list-li p span {
    padding-right: 15px
}

.article-list-li p span a {
    color: #999
}

.article-list-avatar img {
    width: 120px;
    height: 100px
}

.article-list-hint {
    position: absolute;
    right: 0;
    top: -2px
}

.article-list-hint i {
    padding-left: 10px;
    padding-right: 5px;
    font-size: 18px;
    color: #ccc;
    vertical-align: middle
}

.article-list-li .article-abstract {
    text-indent:0px;
    position: relative;
    line-height: 24px;
    margin-left: 100px;
    margin-right: 10px;
    font-size: 13px;
    color: #333;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2
}
</style>

