<template>
	<div class="checkbox pass">
    <div class="content">
        <div class="up-head">
            <i class="iconfont">&#xe616;</i>图片审核
        </div>
        <div class="pic-main clearfix">
            <h2 id="topic-title"></h2>
            <img id="topic-img" src="">
            <div id="port" class="port clearfix">
                <a id="not-pass" class="item btn btn-quick" href="" title="看不懂"><em class="iconfont" style="color: #43d2f4;">&#xe864;</em></a>
                <a id="allowPass" class="item btn btn-quick pass" href="" title="通过"><em class="iconfont" style="color: #ff424f;">&#xe609;</em></a>
            </div>
        </div>
    </div>
    <div class="side">
        <h2>请别让以下帖子通过审核!</h2>
        <h3>1. 带有色情或者求车牌什么的</h3>
        <h3>2. 政治敏感内容</h3>
        <h3>3. 灌水恶意求赞</h3>
        <h3>4. 无笑点带有广告</h3>
        <h3>5. 画质渣</h3>
    </div>
</div>
</template>

<style>
 @import '../../assets/css/page/pass.css';
</style>

<script>
	export default{
		data(){
			return{
				isNowPage: true,
				showAdd: false,
				showEdit: false,
				peoples: [{'name':'Jack'},{'name':'Joe'}],
				nameValue: '',
				newName: '',
				editId: 0
			}
		},
		methods: {
			add(){
				this.showAdd = true
			},
			addName(){
				var v = this.nameValue
				if(v.trim() == ""){
					alert("请输入新增人员姓名")
				}else{
					var data = {}
					data.name = v
					this.peoples.push(data)
				}
			},
			del(e){
				var id = e.target.offsetParent.id
				this.peoples.splice(id,1)
			},
			edit(e){
				var id = e.target.offsetParent.id
				this.showEdit = true
				this.editId = id
				this.newName = this.peoples[id].name
			},
			cancel(){
				this.showEdit = false
			},
			editName(){
				var v = this.newName
				if(v.trim() == ""){
					alert("请输入姓名")
				}else{
					this.peoples[this.editId].name = this.newName
					this.showEdit = false
				}
			}
		}
	}
</script>
