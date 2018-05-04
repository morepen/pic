<template>
  <div class="sidebar">
    <div class="rank">
    <span class="title"><i class="iconfont"></i>大神榜</span>
    
    <div class="item clearfix">
        <a class="head" href="/people/愿祖国繁荣昌盛" target="_blank">
            <img src="/avatar/愿祖国繁荣昌盛.jpg" alt="愿祖国繁荣昌盛" width="50" height="50">
        </a>
        <div class="info text-left">
            <a href="/people/愿祖国繁荣昌盛" target="_blank">愿祖国繁荣昌盛</a>
            <p class="ell">有朋自远方来，虽远必诛…</p>
        </div>
    </div>  
    </div>
    <div class="side-float">
        <div class="rank post-rank">
    <span class="title"><i class="iconfont" style="color: #3498DB;"></i>热门推荐</span>
    
   
    
    
    
  
    
   
    
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
    border-top: 5px solid #6598dc;
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
</style>

