import axios from 'axios';

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://116.196.81.196:8091/';
//axios.defaults.baseURL = 'http://127.0.0.1:8091/';//测试地址

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}

export default {
    /**
     * 用户登录
     */
    Login(params) {
        return fetch('/api/Public/LoginCheck', params)
    },
    
    /**
     * 用户注册
     */
    Regist(params) {
        return fetch('/api/Public/Register', params)
    },
     /**
     * 上传图片
     */
    PicUpload(params){
       return fetch('/api/Public/PicUpload', params) 
    },
       /**
     * 
     */
    PicList(params){
       return fetch('/api/Public/PicList', params) 
    },
}
