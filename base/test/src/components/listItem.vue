<template>
<div class="page">
 <div class="page-list" v-show='listshow'>
   <ul class="article-list">
    <li v-on:click="url(item)" class="article-list-li" v-for="(item, index) in piclist">
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
    </div>
    <div class="page-content" v-show='detailshow'>
        <div class="article-title-box">
          <span class="article-type type-1 float-left"></span>   
          <h6 class="title-article">{{curDate.title}}</h6>
        </div>
        <div class="article-bar-top pen-flex">
          <span class="float-left time">时间</span>
          <div class="float-right">
              <span class="read-count">阅读数：899</span>
          </div>
        </div>
        <div>
           <ul class="tage_list">
               <li>标签1</li>
               <li>标签1</li>
               <li>标签1</li>
           </ul>
           <div class="author">作者:<span>{{curDate.username}}</span></div>
        </div>
        <div class="detail_content">
          <div>
           {{curDate.content}}
           </div>
          <div class="imglist" v-for="(pic, k) in jsonChange(curDate.pics)">
             <img class="content-picture" :src="attachImageUrl(pic)" alt="">
          </div>
        </div>
    </div>
</div>
</template>

<script>
import api from '../fetch/api';
export default{
        data(){
            return{
                isReply:false,
                picpath:this.$store.state.uploadpath,
                listshow:true,
                detailshow:false,
                piclist:[],
                curDate:[],
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
                        localStorage.itemList = JSON.stringify(response.data);                       
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
            url(item) {
               this.listshow=false;
               this.detailshow=true;
               var allArr=this.piclist;
               for(var i = 0;i<allArr.length;i++){
                 if(item.id==allArr[i].id){
                    this.curDate=allArr[i];
                 }
               }

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
</style>

