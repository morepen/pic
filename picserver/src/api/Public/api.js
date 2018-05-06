
var EventProxy = require('eventproxy');
var settings = require('../../settings.js');
var _errors = require('../libs/errors');
var hcUti = require('../libs/hcUti');
var fs = require("fs");
var path = require('path');
//var request = require('request');
var nodemailer = require('nodemailer');
var md5=require("md5") 
var crypto = require('crypto');

function md5(data) {
    var buf = new Buffer(data);
    var str = buf.toString("binary");
    return crypto.createHash("md5").update(str).digest("hex");
}
exports.GetApi = function (_req, _res, _callback) {
    return {
        db: require('../libs/mysql.js'),//数据库连接属性
        req: _req,
        res: _res,
        cb: _callback,

        getParam: function (param, _code) {
            var code = _code || 400024;
            if (typeof (_req.query[param]) === "undefined" && typeof (_req.body[param]) === "undefined")
                throw { code: code, msg: _errors[code].message, data: _errors[code].name };
            else if (!_req.query[param])
                return _req.body[param];
            else
                return _req.query[param];
        },
        test: function () {
            this.cb(200, "", 'ok');
        },
        Register:function(){
            var Me, username, password,email;
            Me = this;
            username = Me.getParam('username');
            password = Me.getParam('password');
            email=Me.getParam('email');
            var time=new Date().getTime();
            var key=md5(username+time+settings.activeKey);
            var ep = new EventProxy();
            var sqlCmd = 'select * from users  where username=?';
            var sqlParams = [username];
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    if (_results.length > 0) {
                        return cbError(10013, Me.cb);
                    }
                    ep.emit('select1');
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
            ep.once('select1', function () {
                console.log('select1');
                var sqlCmd1 = 'select * from users  where email=?';
                var sqlParams1 = [email];
                Me.db.query(sqlCmd1, sqlParams1, function (_err, _results) {
                if (!_err) {
                    if (_results.length > 0) {
                        return cbError(10014, Me.cb);
                    }
                    ep.emit('insert1');
                }
                else {
                    return cbError(10001, Me.cb);
                }
               });
            })
            ep.once('insert1', function () {
                var sqlCmd2 = "insert into users (username,password,email,activecode) values (?,?,?,?);";
                var sqlParams2=[];
                sqlParams2[sqlParams2.length] = username;
                sqlParams2[sqlParams2.length] = password;
                sqlParams2[sqlParams2.length] =email;
                sqlParams2[sqlParams2.length] =key;
                Me.db.query(sqlCmd2, sqlParams2, function (_err, _results) {
                  console.log(_err);
                    if (!_err) {
                        ep.emit('sendemail');
                        
                    }else {
                        return cbError(10001, Me.cb);
                    }
                })
            })

            ep.once('sendemail',function(){                
                var activeUrl=settings.activeUrl+"?usernmae="+username+"&key="+key;
                Me.sendEmail(email,username,activeUrl,function(err,result){
                    if(err){
                       return cbError(10014, Me.cb);
                    }else{
                      Me.cb(200, _err, username); 
                    }
              })
            })
        },
        CheckActive:function(){
            console.log("CheckActive");
            var Me, username,activecode;
            Me = this;
            username = Me.getParam('username');
            activecode = Me.getParam('key'); 
            console.log(activecode);
            var ep = new EventProxy();
            var sqlCmd = 'select * from users where username=? and activecode=?';
            var sqlParams=[];
                sqlParams[sqlParams.length]=username;
                sqlParams[sqlParams.length]=activecode;
            console.log(sqlCmd+sqlParams);
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                console.log(_results);
                if (!_err) {
                    if (_results.length > 0) {
                       ep.emit('update1');
                    }else{
                       return cbError(10016, Me.cb);  
                    }
                   
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
            ep.once('update1', function () {
                var updateCmd = 'update users set activetype=1 where username=? and activecode=?';
                Me.db.query(updateCmd,sqlParams, function (_err, _results) {
                    if (!_err) {
                        Me.cb(200, _err, username);                         
                    }else {
                        return cbError(10001, Me.cb);
                    }
                })
            })
        },
        LoginCheck: function () {
            var Me, username, password;
            Me = this;
            username = Me.getParam('username');
            password = Me.getParam('password');
            // var sqlCmd = "select * from users where (username = ? or email= ?) and password = ?";
            // Me.db.query(sqlCmd, [username,username,password], function (_err, _results) {
            var sqlCmd = "select * from users where username = ? and password = ?";
            var sqlParams=[];
                sqlParams[sqlParams.length]=username;
                sqlParams[sqlParams.length]=password;  
                Me.db.query(sqlCmd,sqlParams, function (_err, _results) {
                if (!_err) {
                    if (_results.length > 0) {
                        if (_results[0].activetype == 0){
                            return cbError(10005, Me.cb);
                        }
                        // _results[0].password = '';
                        // Me.req.session.UserInfo = _results[0];
                         Me.cb(200, _err, _results);
                    } 
                    else {
                        return cbError(10000, Me.cb);
                    }
                } 
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        PicUpload:function (){
            console.log("PicUpload");
            var Me, userid,title,imgData;
            Me = this;
            userid=Me.getParam('userid');
            title = Me.getParam('title');
            imgData = Me.getParam('imgData');
            var picArr=[];
            for(var i = 0;i < imgData.length; i++) {
                var item=imgData[i];
                var base64Data = item.replace(/^data:image\/\w+;base64,/, "");                
                var dataBuffer = new Buffer(base64Data, 'base64');
                var time = new Date();
                var timetemp = time.getTime();
                var picDir = settings.picDir;
                var filename=userid+"-"+timetemp+".png";
                fs.writeFileSync(picDir+filename,dataBuffer,'utf-8');
                picArr[picArr.length]=filename;    
            }
            var pics=JSON.stringify(picArr);  
            var sqlCmd="insert into pics (userid,title,pics,uploadtime) values(?,?,?,?);";
            var sql_params=[userid,title,pics,timetemp];
            Me.db.query(sqlCmd,sql_params,function (_err, _results) {
                console.log(_results);
                if (!_err) {
                    Me.cb(200, '', null);
                }else {
                    return cbError(10012, Me.cb);
                }
            });     
         },
         PicList:function(){
            var Me;
            var Me = this;
            // var state = Me.getParam('state');
            // var start = Me.getParam('start');
            // var limit = Me.getParam('limit');
            var sqlParams=[];
            var sqlCmd = 'select * from pics ';
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, _results);
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
         },
         sendEmail:function(email,username,url,cb){
            var Me=this;
            var transporter = nodemailer.createTransport({
                service: 'qq',
                auth: {
                    user: '493891498@qq.com',
                    pass: 'vynsjdnpdyyjbjeg' //授权码,通过QQ获取
                }
            });
            var mailOptions = {
                from: '493891498@qq.com', // 发送者
                to: email, // 接受者,可以同时发送多个,以逗号隔开
                subject: '邮件', // 标题
                //text: 'Hello world', // 文本
                html: '<h2>尊敬'+username+'，您已注册本站成功</h2><div>请点击如下链接激活:'+url+'</div>',
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    //console.log(err);
                    console.log(email+"该邮箱未发送成功");
                    return cb(true,null);
                }
                console.log(email+"该邮箱发送成功");
                cb(null,{});
                //var suc_text="给"+qq+"发送成功";
                //return Me.callbackFunction(null,suc_text);
            });
        }



    };
};
function cbError(code, cb) {
    cb(code, _errors[code].message, _errors[code].name);
}