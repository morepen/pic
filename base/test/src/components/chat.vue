<template>
    <div class="chat">
       <h2 class="text-center">在线聊天室</h2>
        <p>昵称:{{nickName}}</p>
        <form action="" class="form-horizontal">
            <div class="form-group">
                <div class="chat-list form-control">
                    <p v-for="item in chatList">{{item.nickName}} : {{item.content}}</p>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="content" placeholder="请输入内容">
                </div>
                <button class="btn btn-primary col-sm-1" @click.prevent="send">发送</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ws: null,
                nickName: "test",
                chatList: [],
                content: ""
            }
        },
        mounted: function () {
                this.ws = new WebSocket("ws://127.0.0.1:8081");
                debugger;
                this.ws.loginSuccess = function () {
                    alert("连接成功")
                }
                var _this = this
                this.ws.onmessage = function (ev) {
                    var item = JSON.parse(ev.data)
                    _this.chatList.push(item)
                }
            },
        methods: {
                send() {
                    var data = {
                        nickName: this.nickName,
                        content: this.content
                    }
                    //将信息发送到后端
                    this.ws.send(JSON.stringify(data))
                }
        }
    }
</script>
<style>
.vue-uploader .file-list {
    padding: 10px 0px;
}
.vue-uploader .file-list:after {
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
    font-size: 0;
}
.vue-uploader .file-list .file-item {
    float: left;
    position: relative;
    width: 100px;
    text-align: center;
}
.vue-uploader .file-list .file-item img{
    width: 80px;
    height: 80px;
    border: 1px solid #ececec;
}
.vue-uploader .file-list .file-item .file-remove {
    position: absolute;
    right: 12px;
    display: none;
    top: 4px;
    width: 14px;
    height: 14px;
    color: white;
    cursor: pointer;
    line-height: 12px;
    border-radius: 100%;
    transform: rotate(45deg);
    background: rgba(0, 0, 0, 0.5);
}
.vue-uploader .file-list .file-item:hover .file-remove {
    display: inline;
}
.vue-uploader .file-list .file-item .file-name {
    margin: 0;
    height: 40px;
    word-break: break-all;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.vue-uploader .add {
    width: 80px;
    height: 80px;
    margin-left: 10px;
    float: left;
    text-align: center;
    line-height: 80px;
    border: 1px dashed #dadada;
    font-size: 30px;
    cursor: pointer;
}
.vue-uploader .upload-func {
    display: flex;
    padding: 10px;
    margin: 0px;
}
.vue-uploader .upload-func .progress-bar {
    flex-grow: 1;
}
.vue-uploader .upload-func .progress-bar section {
    margin-top: 5px;
    background: #00b4aa;
    border-radius: 3px;
    text-align: center; 
    color: #fff;
    font-size: 12px;
    transition: all .5s ease;
}
.vue-uploader .upload-func .operation-box {
    flex-grow: 0;
    padding-left: 10px;
}
.vue-uploader .upload-func .operation-box button {
    padding: 4px 12px;
    color: #fff;
    background: #007ACC;
    border: none;
    border-radius: 2px;
    cursor: pointer;
}
.vue-uploader > input[type="file"] {
    display: none;
}
</style>