<template>
  <div class="sidebar">
        <div class="rank">
          <span class="title"><i class="iconfont"></i>最新推荐</span>
          <div class="item clearfix">
            <a class="head" href="" target="_blank">
                <img :src="userImageUrl(newData.userpic)" alt="" width="50" height="50">
            </a>
            <div class="info text-left">
                <p class="ell">{{newData.title}}</p>
                <p class="ell">{{newData.content}}</p>
            </div>
          </div>  
        </div>
        <div class="rank">
          <span class="title"><i class="iconfont"></i>热门推荐</span>
          <div class="item clearfix">
            <a class="head" href="" target="_blank">
                <img :src="userImageUrl(newData.userpic)" alt="" width="50" height="50">
            </a>
            <div class="info text-left">
                <p class="ell">{{newData.title}}</p>
                <p class="ell">{{newData.content}}</p>
            </div>
          </div>  
        </div>
        <div class="community rank">
            <span class="title"><i class="iconfont" style="vertical-align: middle;"></i>未知领域</span>
            <div class="item clearfix">
                <div class="info">
                    <ul>
                        <li class="community-list"><a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=fa57df8675a558ad5b9c4e6289d29e13fda1f44b54e3e12cce54cc2e69efcb3a"><i class="iconfont fs49"></i></a></li>
                        <li class="community-list"><a target="_blank" style="line-height:61px;" href="https://user.qzone.qq.com/786726541"><i class="iconfont fs49"></i></a></li>
                        <li class="community-list"><a target="_blank" href="http://weibo.com/5437487880"><i class="iconfont fs49"></i></a></li>
                        <li class="community-list"><a target="_blank" href="https://user.qzone.qq.com/786726541"><i class="iconfont fs49"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
            </div>
</div>
</template>

<script>
export default{
        data(){
            return{
                isNowPage: true,
                username:"",
                password:"",
                newData:this.$store.state.itemList[0],
                rankData:this.$store.state.itemList[0],
                email:""
            }
        },
        methods: {
          loginOut:function(){
             localStorage.userinfo ="";
             this.$router.push({ path: 'login' }) 
          },
          userImageUrl(srcUrl) {
              var that=this;
              
              if (srcUrl !== undefined) {
                 return this.$store.state.userpicUrl+srcUrl;
                 alert(this.$store.state.userpicUrl+srcUrl);
               }
            }
        }
    }


</script>
<style>
@import '../assets/css/page/sidebar.css';
 .sidebar {
    float: right;
    width: 325px;
  }
 .rank {
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    margin-bottom: 30px;
}

.rank .title{
    display: block;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    color: #8590a6;
    border-top: 5px solid #41b883;
    border-bottom: 1px solid #DFDFDF;
    background: white;
}

.rank .title i {
    font-size: 24px;
    padding-right: 5px;
}

.rank .item {
    border-bottom: 1px solid #DFDFDF;
    padding: 10px 13px;
    padding-left: 20px;
    background: white;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
}

.rank .item:hover {
    background-color: #f6f9fa;
}

.rank .item .head {
    float: left;
    margin-right: 13px;
}

.rank .item .head img {
    display: block;
}

.rank .item .info {
    float: left;
}

.rank .item .info a {
    display: block;
    width: 70px;
    font-size: 14px;
}

.rank .item .info a:hover {
    color: #3498DB;
}

.rank .item .info p {
    width: 210px;
    padding-top: 5px;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    padding-right: 10px;
    color: #9a9b9c;
}
.fs49{
    font-size:49px;
    display:inline-block;
}
.community-list{
    float:left;
    display:inline-block;
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
.ivu-btn{
    position:absolute;
    bottom:10px;
    right:10px;
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
</style>

