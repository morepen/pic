var express = require('express');
var router = express.Router();

module.exports = (function() {

    // 该路由使用的中间件
    // router.use(function timeLog(req, res, next) {
    //     console.log('Time: ', Date.now());
    //     next();
    // });

    // router.get('/',function (req,res,next) {
    //     res.send('ok');
    //     });

    router.all('/:ifName',
        function(req, res) {
            var ifName = req.params.ifName;
            if(!ifName) res.send(404);
             function callback(_code,_err,_result) {
                 res.send({code:_code,msg:_err,data:_result});
             }
            var errors = require('../libs/errors.js');
            var api = require('./api.js').GetApi(req,res,callback,errors);
            try {
                if(api[ifName]) {
                    if(req.session.UserInfo) return api[ifName]();
                    return res.send({code:400001,msg:"未登录用户",data:""});

                } else {
                    res.send({code:50002,msg:"接口异常",data:""});
                }
            } catch (_err){
                res.send({code:_err.code,msg:_err.msg,data:_err.data});
            }
        }
    );

    return router;

}).call(this);