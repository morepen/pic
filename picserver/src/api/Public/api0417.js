
var EventProxy = require('eventproxy');
var settings = require('../../settings.js');
var _errors = require('../libs/errors');
var hcUti = require('../libs/hcUti');
//var request = require('request');

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
        LoginCheck: function () {
            var Me, username, password;
            Me = this;
            username = Me.getParam('username');
            password = Me.getParam('password');
            var sqlCmd = "select * from users where username = ? and password = ? and frontrole in (1,2,3)";
            Me.db.query(sqlCmd, [username, password], function (_err, _results) {
                if (!_err) {
                    if (_results.length > 0) {
                        if (_results[0].status == 0){
                            return cbError(10005, Me.cb);
                        }
                        _results[0].password = '';
                        Me.req.session.UserInfo = _results[0];
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
        AddCases:function (){
            var Me, ep, id, CaseInfoData, ThirdCarInfoData, PollLossInfoData, PerLossInfoData,caseinfo_id, create_time, update_time, resultData;
            Me = this;
            ep = new EventProxy();
            create_time = hcUti.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss");
            var storageday=hcUti.formatDate(new Date(), "yyyyMMdd");
            var storageID="";
            var orderid=0;
            var orderidStr="";
            var policyno=Me.getParam('policyno');
            var insurant=Me.getParam('insurant')||'';
            var injuredCondition=Me.getParam('injuredCondition')||0;
            var CaseInfoData=Me.getParam('CaseInfoData');
            CaseInfoData=JSON.parse(CaseInfoData);
            policynoStr=policyno.substr(1,3);
            var sql_getOrderid="select Max(orderid) as orderid from cases where storageday=?;";
            Me.res.header("Access-Control-Allow-Origin", "*");
            Me.res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
            Me.res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
            ep.fail(function(err){
                console.log('addErr:',err);
                if(err.code== 'ER_DUP_ENTRY') return cbError('10007',Me.cb);
                return cbError('10001',Me.cb);
            });
            var sql_getPo="select * from policy where caseCode=?;";
            var errPolicy={};
            Me.db.query(sql_getPo,[policynoStr],ep.done('getPolicyno'));
            ep.once('getPolicyno',function(result){
                var flag=false;
                if(result.length==0) return cbError('10009',Me.cb);
                for(var i=0;i<result.length;i++){
                    if(result[i].insurant==''){
                        flag=true;
                        break;
                    }
                                            console.log('1:',result[i]);
                        console.log('2:',injuredCondition,insurant);
                    if(result[i].injuredCondition==injuredCondition&&result[i].insurant==insurant){

                        flag=true;
                        break;
                    }
                    errPolicy=result[i];
                }
                if(flag){
                    Me.db.query(sql_getOrderid,[storageday],ep.done('getorderid'));
                }else{
                    if(errPolicy.insurant!=insurant) return cbError('10010',Me.cb);
                    if(errPolicy.injuredCondition!=injuredCondition) return cbError('10011',Me.cb);
                    return cbError('10008',Me.cb);
                }
            });
            ep.once('getorderid',function(result){
                console.log('result:',result);
                orderid=result[0].orderid||0;
                orderid+=1;
                console.log('orderid:',orderid);
                if(orderid.toString().length==1) {
                    orderidStr="000"+orderid;
                }else if(orderid.toString().length==2) {
                    orderidStr="00"+orderid;
                }else if(orderid.toString().length==3) {
                    orderidStr="0"+orderid;
                }else if(orderid.toString().length>=5) {
                    return ep.emit('error','长度超过限制');
                }else{
                    orderidStr=orderid.toString();
                }
                storageID=policynoStr+storageday+orderidStr;
                ep.emit('do_insert');
//                return Me.cb(200,null,storageID);
            });
            ep.once('do_insert',function(){
                sqlCmd = "insert into cases (case_state,storageTime,storageday,orderid,storageID";
                sqlValue = ") values (?,?,?,?,?";
                var sqlParams=[];
                var sqlKey="";
                sqlParams[sqlParams.length] = 0;
                sqlParams[sqlParams.length] = create_time;
                sqlParams[sqlParams.length] = storageday;
                sqlParams[sqlParams.length] = orderid;
                sqlParams[sqlParams.length] = storageID;
                for (var keyStr in CaseInfoData) {
                    sqlKey += "," + keyStr;
                    sqlValue += ",?";
                    sqlParams[sqlParams.length] = CaseInfoData[keyStr];
                }
                sqlCmd = sqlCmd + sqlKey + sqlValue + ");";
                Me.db.query(sqlCmd,sqlParams,ep.done('insertCase'));
            });
            ep.once('insertCase',function(result){
                return Me.cb(200,null,true);
            })


            resultData = {
                status: -1,
                caseinfo_id: -1
            };

        },
       fcxHandleCase:function(){
         var Me=this;
         var ep = new EventProxy();
             Me.res.header("Access-Control-Allow-Origin", "*");
             Me.res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
             Me.res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
             var sqlWhere = "";
             var sqlCmd = "";
             var sqlParams = [];
             var UpdateParams=[];
             var id=Me.getParam("id");
             var sqlCmd ="select case_state from cases where id=?";
             sqlParams[sqlParams.length]=id;
             Me.db.query(sqlCmd,sqlParams,function (err, result) {
                if (!err) {
                     ep.emit('update');                   
                } else {
                     return Me.cb(10004,err,null);
                   
                }
            })
            ep.once('update', function () {
                 var sqlUpdate="update cases set isLead = ? where id=?";
                 UpdateParams[UpdateParams.length]=1;//isLead是1为已导入
                 UpdateParams[UpdateParams.length]=id;
                 Me.db.query(sqlUpdate,UpdateParams,function (err, result) {
                    console.log(result);
                    if (!err) {
                        return Me.cb(200,null,result);
                    } else {                    
                        return Me.cb(404,err,null);
                    }
                 });
            })

       },       
       fcxQueryCaseInfo:function(){
          var Me = this;
            Me.res.header("Access-Control-Allow-Origin", "*");
            Me.res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
            Me.res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
          var sqlWhere = "";
          var sqlCmd = "";
          var sqlParams = [];
          var storageID =Me.getParam("plug_storageID"); //保单号查询
          var reportor_name_text=Me.getParam("plug_reporter"); //报案人查询
          var reStartTime =Me.getParam("plug_reStartTime"); //报案开始时间
          var reEndTime =Me.getParam("plug_reEndTime"); //报案结束时间
          var outStartTime =Me.getParam("plug_outStartTime"); //出险开始时间
          var outEndTime=Me.getParam("plug_outEndTime"); //出险结束时间
              sqlCmd = "select * from cases "+
              "where handleState !=-1 ";
            // if (storageID) {
            //     sqlWhere += ' and storageID like "%' + storageID + '%"';
            // }
            // if (reportor_name_text) {
            //     sqlWhere += ' and reportorname like "%' + reportor_name_text + '%"';
            // }
            if (storageID) {
                sqlWhere += ' and storageID =?';
                sqlParams[sqlParams.length]=storageID;
            }
            if (reportor_name_text) {
                sqlWhere += ' and reportorname =?';
                sqlParams[sqlParams.length]=reportor_name_text;
            }
            if(reStartTime&&reEndTime){
                sqlWhere +='and reportdate >= ? and reportdate <= ?';
                sqlParams[sqlParams.length]=reStartTime;
                sqlParams[sqlParams.length]=reEndTime;
            }
            if(outStartTime&&outEndTime){
                sqlWhere +='and damagedate >= ? and damagedate <= ?';
                sqlParams[sqlParams.length]=outStartTime;
                sqlParams[sqlParams.length]=outEndTime;
            }
            if (sqlWhere != "") {
                sqlCmd = sqlCmd + sqlWhere + ";";
            }
            console.log(sqlCmd+sqlParams);
            Me.db.query(sqlCmd,sqlParams,function (err, result) {
                console.log(result);
                if (err) {
                    return Me.cb(404,err,null);
                } else {
                    return Me.cb(200,null,result);
                   
                }
            });
        },
        UserCheckOut: function () {
            var Me = this;
            try {
                delete Me.req.session.UserInfo;
            } catch (err) {
            }///单纯屏蔽错误，不作处理。
            // Me.callbackFunction(null, 'UserCheckOut');
            Me.cb(200, null, 'UserCheckOut');
        },
        ChangePwd: function () {
            var Me, id, oldPwd, newPwd;
            Me = this;
            id = Me.getParam('id');
            oldPwd = Me.getParam('oldPwd');
            newPwd = Me.getParam('newPwd');
            var ep = new EventProxy();
            var sqlCmd = 'select * from users where id=? and password=?';
            var sqlParams = [id,oldPwd];
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    if (_results.length == 0) {
                        return cbError(10002, Me.cb);
                    } 
                    else {
                        ep.emit('updatePwd');
                    }
                } 
                else {
                    return cbError(10001, Me.cb);
                }
            });
            ep.once('updatePwd', function(){
                var sqlCmd = 'update users set password=? where id=?';
                var sqlParams = [newPwd, id];
                Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                    if (!_err) {
                        return Me.cb(200, null, _results);
                    }
                    else {
                        return cbError(10001, Me.cb);
                    }
                });
            })
        },
        SendMessage:function(){
            var Me = this;
            var ep = new EventProxy();
            var telephone=Me.getParam('telephone');
            var content=Me.getParam('content');
            var smstype=Me.getParam('smstype');
            var storageID=Me.getParam('storageID');
            var _params={content:content,telephone:telephone,storageID:storageID};
            _params={content:"这是一条测速短信",telephone:13554219576,storageID:"123456"}
            Me.posttel(_params,function(err,result){
                if(err){
                    console.log("111");
                    ep.emit('sendFail');
                }else{
                    console.log("sendSuccess");
                    ep.emit('sendSuccess');
                }
            });
            ep.once('sendFail',function(){
                return Me.cb(200,null, true);
            });
            ep.once('sendSuccess',function(){
                var createtime=hcUti.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss");
                var sql_insert_sms="insert into sms (telephone,createtime,smstype,content,storageID) values(?,?,?,?,?);";
                var sql_params=[telephone,createtime,1,content,storageID];
                Me.db.query(sql_insert_sms,sql_params,function(err,result){
                    if (!err) {
                        console.log("333");
                        return Me.cb(200, null, true);
                    }
                    else {
                        console.log("444");
                        return cbError(10001, Me.cb);
                    }
                });
            });
        },
        posttel:function(_params, cb){
            console.log("555:",_params);
            var sendtime= hcUti.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss");
            return sendtime;
            var _data = {
                Login_name: '95518',
                Password: "95518",
                Mobile:_params.telephone,
                Message:_params.content,
                Start_time:sendtime,
                Search_ID: ""
            };
            console.log(_data);
            var url = "http://30.1.32.243:809/Service1.asmx/SendSms";
            //return cb(null,true);

            request({
                url:url,
                method:'POST',
                form: _data
            },function (res,body) {
                console.log('res:',res);
                console.log('body:',body);

                return cb(null,true);
                /*if(body.protoco141){

                 return cb(null,true);
                 }else{
                 return cb('error',null);
                 }
                 */
            })
        },
        htmltel:function(){
            var sendtime= hcUti.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss");
            var Me = this;
            var tel= Me.GetParams('telephone');
            var str="您好，您的报案信息已记录，如有任何疑问，请即时与95518联系！";
            var _data = {
                Login_name: '95518',
                Password: "95518",
                Mobile:tel,
                Message:str,
                Start_time:sendtime,
                Search_ID: ""
            };

            var url = "http://30.1.32.243:809/Service1.asmx/SendSms";

            request.post(url,
                {
                    form: _data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded;'}
                },function (body) {
                    if(body){

                        return Me.callbackFunction(null,true);
                    }else{
                        return Me.callbackFunction('error',null);
                    }

                })
        }
        
    };
};
function cbError(code, cb) {
    cb(code, _errors[code].message, _errors[code].name);
}