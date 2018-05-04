
var EventProxy = require('eventproxy');
var settings = require('../../settings.js');
var _errors = require('../libs/errors');
var path = require('path');
var hcUti = require('../libs/hcUti');
var File = require('../libs/File');
var md5 = require("md5");
var request = require("request");
String.prototype.trim = function () {
//    return this.replace(/(^\s*)|(\s*$)/g, '');
    var str = this.replace(/^\s+/, ''),//使用正则处理头部空格，非正则过滤尾部字符
        end = str.length - 1,
        ws = /\s/;
    while (ws.test(str.charAt(end))) {
        end--;
    }
    return str.slice(0, end + 1);
};
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
        //useModle
        UserCheck: function () {
            var Me = this;
            // Me.callbackFunction(null, Me.req.session.CPSuser);
            Me.cb(200, null, Me.req.session.UserInfo);
        },
        GetUser: function () {
        // 获取用户列表
            var Me = this;
            var frontrole = this.getParam("frontrole");
            var start = this.getParam('start');
            var limit = this.getParam('limit');
            var sqlParams=[];
            var sqlCmd = 'select * from users';
            var sqlWhere = ' where frontrole in (1,2,3)';
            // 分页相关
            sqlCmd += sqlWhere + " limit " + start + "," + limit + ";";
            //求总数
            sqlCmd += "select count(0) as totalCount from users;";
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, { "totalCount": _results[1][0].totalCount, 'topics': _results[0] });
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        AddUser: function () {
            // 新增管理员
            var Me = this;
            var id, realname,jobNo,username,password,frontrole,mobile;
            realname = Me.getParam('realname');
            jobNo = Me.getParam('jobNo');
            username = Me.getParam('username');
            password = Me.getParam('password');
            mobile = Me.getParam('mobile');
            frontrole = Me.getParam('frontrole');
            var ep = new EventProxy();
            var sqlCmd = 'select * from users where username=?';
            var sqlParams = [username];
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    if (_results.length > 0) {
                        return cbError(10006, Me.cb);
                    }
                    ep.emit('insert1');
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
            ep.once('insert1', function () {
                var sqlCmd = 'insert into users (realname,jobNo,username,password,mobile,frontrole) values (?,?,?,?,?,?)';
                var sqlParams = [realname,jobNo,username, password,mobile,frontrole];
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
        EditUser: function () {
            // 修改管理员
            var Me = this;
            var id, realname,jobNo,username,password,frontrole,mobile;
            id = Me.getParam('id');
            realname = Me.getParam('realname');
            jobNo = Me.getParam('jobNo');
            username = Me.getParam('username');
            password = Me.getParam('password');
            mobile = Me.getParam('mobile');
            frontrole = Me.getParam('frontrole');
            var sqlCmd='';
            var sqlParams=[];

            if (password != "" && password != null && password != undefined) {
                sqlCmd = 'update users set realname=?,jobNo=?,username=?,password=?,frontrole=?,mobile=?  where id=?';
                sqlParams = [realname,jobNo,username,password,frontrole,mobile,id];
            } else {
                sqlCmd = 'update users set realname=?,jobNo=?,username=?,frontrole=?,mobile=?  where id=?';
                sqlParams = [realname,jobNo,username,frontrole,mobile,id];
            }

            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, _results);
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        DelUser:function(){
           var Me = this;
            var id, realname;
            id = Me.getParam('id');
            var sqlCmd = 'DELETE FROM users WHERE id = ?';
            var sqlParams = [id];
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, _results);
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        GetTaskUser:function(){
            var Me=this;
            var sqlCmd='select * from users where frontrole=3 ;';
            Me.db.query(sqlCmd, [], function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, _results);
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        ResetPwd: function () {
            // 重置密码
            var Me = this;
            var id;
            id = Me.getParam('id');
            var sqlCmd = 'update users set password=? where id=?';
            var sqlParams = [md5('000000'), id];
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, _results);
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        //保单Modle
        GetPolicy: function () {
        //获取保单规则
            var Me = this;
            var start = Me.getParam('start');
            var limit = Me.getParam('limit');
            var sqlParams=[];
            var sqlCmd = 'select * from policy';
            var sqlWhere = '';
            // 分页相关
            sqlCmd = sqlCmd + sqlWhere + " limit " + start + "," + limit + ";";
            //求总数
            sqlCmd += "select count(0) as totalCount from policy";
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, { "totalCount": _results[1][0].totalCount, 'topics': _results[0] });
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        AddPolicy: function () {
            // 新增保单规则
            var Me = this;
            var caseCode,insurant,injuredCondition;
            caseCode = Me.getParam('caseCode');
            insurant=Me.getParam('insurant');
            injuredCondition = Me.getParam('injuredCondition');
            var reg1 = /^[A-Z]{3}$/;
            if(caseCode=='' || caseCode==undefined || caseCode==null || !reg1.test(caseCode)){
                Me.callbackFunction({message:'保单号输入有误，请重新输入'}, null);
            }
            if(insurant!=''){
                if(!injuredCondition){
                    Me.callbackFunction({message:'人伤条件为空，请勾选'}, null);
                }
            }else{
                injuredCondition=0;
            }
            var ep = new EventProxy();
            var sqlCmd = 'select * from policy where caseCode=?';
            var sqlParams = [caseCode];
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    if (_results.length > 0) {
                        return cbError(10004, Me.cb);
                    }
                    ep.emit('insert1');
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
            ep.once('insert1', function () {
                var sqlCmd = 'insert into policy (caseCode,insurant,injuredCondition) values (?,?,?)';
                var sqlParams = [caseCode,insurant,injuredCondition];
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
        EditPolicy: function () {
            // 修改管理员
            var Me = this;
            var id, realname;
            id = Me.getParam('id');
            realname = Me.getParam('realname');
            var sqlCmd = 'update users set realname=? where id=?';
            var sqlParams = [realname, id];
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, _results);
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        DelPolicy:function(){
            var Me = this;
            var id = Me.getParam('id');
            var sqlCmd = 'DELETE FROM policy WHERE id = ?';
            var sqlParams = [id];
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, _results);
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        GetTask: function () {
        //获取任务调度
            var Me = this;
            var changeState = Me.getParam('changeState');
            var start = Me.getParam('start');
            var limit = Me.getParam('limit');
            var sqlParams=[];
            var sqlCmd = 'select * from cases ';
            var sqlWhere = 'where changeState=?';
            sqlParams.push(changeState);
            // 分页相关
            sqlCmd = sqlCmd + sqlWhere + " order by damagedate desc limit " + start + "," + limit + ";";
            //求总数
            sqlCmd += "select count(0) as totalCount from cases";
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, { "totalCount": _results[1][0].totalCount, 'topics': _results[0] });
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        ChangeTask:function(){
            var Me=this;
            var id=this.getParam('id');
            var yardman_id=this.getParam('yardman_id');
            var yardman=this.getParam('yardman');
            var caseHandler_id=this.getParam('caseHandler_id');
            var caseHandler=this.getParam('caseHandler');
            var yardtime = hcUti.formatDate(new Date(),'yyyy-MM-dd hh:mm:ss');
            var sqlCmd1='update cases set yardman_id = ?,yardman = ?,caseHandler_id = ?,caseHandler = ?,yardtime = ?,operatetimeforhis = ?,changeState = ? where id = ?' +
                ' and handleState in (0,1) ;';
            Me.db.query(sqlCmd1, [yardman_id,yardman,caseHandler_id,caseHandler,yardtime,yardtime,1,id], function (_err, _results) {
                if (!_err) {
                    if(_results.affectedRows==1){
                        return Me.cb(200, null, _results);
                    }else{
                        return Me.cb({msg:'该案件已被处理或已注销'}, null);
                    }
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        GetComments:function(){
            var Me=this;
            var storageID=Me.getParam('storageID');
            var sqlCmd='select * from comments where caseID = ? order by commentsTime DESC;';
            Me.db.query(sqlCmd,[storageID],function(_err,_results){
                if(!_err){
                    return Me.cb(200,null,_results);
                }else{
                    return cbError(10001,Me.cb);
                }
            })
        },
        GetCase: function () {
            //获取案件处理
            var Me = this;
            var start, limit,time,handleState;
            start=Me.getParam('start');
            limit=Me.getParam('limit');
            handleState=Me.getParam('handleState');
            time=Me.getParam('time');
            if(!settings.timeObj[time]) return cbError(400002, Me.cb);
            var starttime_00_day=hcUti.formatDate(new Date(),'yyyy-MM-dd');
            var starttime_00= starttime_00_day+" 00:00:00";
            var starttime_00_stamp=new Date(starttime_00).getTime();
            var starttime_00_stamp_before=starttime_00_stamp-time*30*24*60*60*1000;
            var starttime=hcUti.formatDate(new Date(starttime_00_stamp_before),'yyyy-MM-dd 00:00:00');
            var endtime= starttime_00_day+" 23:59:59";
            var sqlParams=[];
            var userid=Me.req.session.UserInfo.id;
            var sqlCmd = 'select * from cases';
            var sqlWhere = " where handleState=? and caseHandler_id=? and yardtime>? and yardtime<? ";
            // 分页相关
            sqlCmd = sqlCmd + sqlWhere +"order by yardtime desc limit ?,?;";
            //求总数
            sqlCmd += "select count(0) as totalCount from cases"+sqlWhere;
            sqlParams=[handleState,userid,starttime,endtime,start*1,limit*1,handleState,userid,starttime,endtime];
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, { "totalCount": _results[1][0].totalCount, 'topics': _results[0] });
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        //案件处理
        HandleCase:function(){
            var Me = this;
            var storageID, comment,handleState,case_state,evaluateMoney,isReport;
            storageID=Me.getParam('storageID');
            comment=Me.getParam('comment')||'';
            handleState=Me.getParam('handleState');
            isReport=Me.getParam('isReport');
            case_state=Me.getParam('case_state');
            evaluateMoney=Me.getParam('evaluateMoney');
            var operatetimeforhis=hcUti.formatDate(new Date(),'yyyy-MM-dd hh:mm:ss');
            var strFlag=true;//默认留言有内容
            if(comment.trim()==''){
                console.log('comment未传值');
                strFlag=false;
            }
            var sql_update="update cases set handleState = ?,isReport = ?";
            var sql_params=[handleState,isReport];
            if(evaluateMoney>0){
                sql_update+=",evaluateMoney=?";
                sql_params[sql_params.length]=evaluateMoney;
            }
            if(case_state>0){
                sql_update+=",case_state=?";
                sql_params[sql_params.length]=case_state;
            }
            sql_update+=",operatetimeforhis=? where storageID=?;";
            sql_params[sql_params.length]=operatetimeforhis;
            sql_params[sql_params.length]=storageID;
            if(strFlag){
                sql_update+="insert into comments (caseID,commentsTime,commentsContent) values (?,?,?);";
                sql_params[sql_params.length]=storageID;
                sql_params[sql_params.length]=operatetimeforhis;
                sql_params[sql_params.length]=comment;
            }
            Me.db.query(sql_update,sql_params,function(err,result){
                if(err) return cbError(10001, Me.cb);
                return Me.cb(200, null, true);
            });

        },
        //正式报案
        ReportCase:function(){
            var Me=this;
            var storageID = Me.getParam('storageID');
            var isReport = Me.getParam('isReport');
            var operatetimeforhis=hcUti.formatDate(new Date(),'yyyy-MM-dd hh:mm:ss');
            var sqlCmd='update cases set isReport = ?, operatetimeforhis = ? where storageID = ? ;';
            Me.db.query(sqlCmd,[isReport,operatetimeforhis,storageID],function(err,result){
                if (!err) {
                    return Me.cb(200, null, result);
                }
                else {
                    return cbError(10001, Me.cb);
                }
            })
        },
        //导出需报案案件
        ExportReportTasks:function(){
            var Me=this;
            var filename=Me.getParam("filename");
            var sqlCmd = 'select * from cases where handleState in (0,1) and isReport = 1 ;';
            Me.db.query(sqlCmd,[],function(err,result){
                if(err){
                    return cbError(10001, Me.cb);
                }else{
                    var data=result;
                    var excel=[
                        ['暂存ID','出险时间','承保机构','被保险人','接收时间','案件处理人']
                    ];
                    for(var i=0;i<data.length;i++){
                        var idata=data[i];
                        var arr=[];
                        arr.push(idata.storageID);
                        var str1='';
                        var str2='';
                        if(idata.damagedate){
                            str1=idata.damagedate;
                        }
                        if(idata.damagehour){
                            str2=idata.damagehour;
                        }
                        var outtime = str1+" "+str2;
                        arr.push(outtime);
                        arr.push(idata.institution);
                        arr.push(idata.insurant);
                        arr.push(idata.yardtime);
                        arr.push(idata.caseHandler);
                        excel.push(arr);
                    }
                    var xlsx2 = require("../libs/xlsx2");
                    var excelDir = settings.excelDir;
                    xlsx2.createExcelUrl(filename, excel, excelDir, function (err, result) {
                        if (err) {
                            return cbError(10001, Me.cb);
                        }else {
                            var employeePath = path.join(__dirname, '../../web/excel');
                            var fullPath = File.joinfilePath([filename + ".xlsx"]);
                            xlsx2.deleteFile(fullPath, function (_err, _result) {
                                if (_result) {}
                                else {}
                            });
                            return Me.cb(200, null, result);
                        }
                    });
                }
            });
        },
        //注销案件
        LogoutCase:function(){
            var Me=this;
            var storageID = Me.getParam('storageID');
            var handleState = Me.getParam('handleState');
            var operatetimeforhis=hcUti.formatDate(new Date(),'yyyy-MM-dd hh:mm:ss');
            var sqlCmd='update cases set handleState = ?, operatetimeforhis = ? where storageID = ? ;';
            Me.db.query(sqlCmd,[handleState,operatetimeforhis,storageID],function(err,result){
                if (!err) {
                    return Me.cb(200, null, result);
                }
                else {
                    return cbError(10001, Me.cb);
                }
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

        },

        GetCostStatistics: function () {
        //获取数据统计
            var Me = this;
            var sqlParams=[];
            var start = Me.getParam('start');
            var limit = Me.getParam('limit');
            var sqlCmd = 'select * from cases';
            var sqlWhere = '';
            // 分页相关
            sqlCmd = sqlCmd + sqlWhere + " limit " + start + "," + limit + ";";
            //求总数
            sqlCmd += "select count(0) as totalCount from cases";
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, { "totalCount": _results[1][0].totalCount, 'topics': _results[0] });
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        GetCalculate: function () {
        //获取数据统计
            var Me = this;
            var sqlParams=[];
            var sqlParams1=[];
            var sqlParams2=[];
            var reportdate1 = Me.getParam('reportdate1');
            var reportdate2 = Me.getParam('reportdate2');
            var storageday1 = Me.getParam('storageday1');
            var storageday2 = Me.getParam('storageday2');
            var operatetimeforhis1 = Me.getParam('operatetimeforhis1');
            var operatetimeforhis2 = Me.getParam('operatetimeforhis2');
            var storageID = Me.getParam('storageID');
            var policyNo = Me.getParam('policyNo');
            var handleState = Me.getParam('handleState');
            var start = Me.getParam('start');
            var limit = Me.getParam('limit');
            var sqlCmd = 'select * from cases ';
            var sqlWhere = ' where 1 = 1 ';
            if(reportdate1){
                sqlWhere += ' and reportdate >= ? ';
                sqlParams2.push(reportdate1);
                sqlParams1.push(reportdate1);
            }
            if(reportdate2){
                sqlWhere += ' and reportdate <= ? ';
                sqlParams2.push(reportdate2);
                sqlParams1.push(reportdate2);
            }
            if(storageday1){
                sqlWhere += ' and storageday >= ? ';
                sqlParams2.push(storageday1);
                sqlParams1.push(storageday1);
            }
            if(storageday2){
                sqlWhere += ' and storageday <= ? ';
                sqlParams2.push(storageday2);
                sqlParams1.push(storageday2);
            }
            if(operatetimeforhis1){
                sqlWhere += ' and operatetimeforhis >= ? ';
                sqlParams2.push(operatetimeforhis1);
                sqlParams1.push(operatetimeforhis1);
            }
            if(operatetimeforhis2){
                sqlWhere += ' and operatetimeforhis <= ? ';
                sqlParams2.push(operatetimeforhis2);
                sqlParams1.push(operatetimeforhis2);
            }
             if(storageID){
                sqlWhere += ' and storageID like ? ';
                sqlParams2.push(storageID);
                sqlParams1.push(storageID);
            }
             if(policyNo){
                sqlWhere += ' and policyNo like ? ';
                sqlParams2.push(policyNo);
                sqlParams1.push(policyNo);
            }

            if(handleState!='' && handleState != undefined && handleState!=null){
                sqlWhere += ' and handleState = ? ';
                sqlParams2.push(handleState);
                sqlParams1.push(handleState);
            }

            sqlParams=sqlParams2.concat(sqlParams1);

            // 分页相关
            sqlCmd = sqlCmd + sqlWhere + " limit " + (start * 1) + "," + (limit * 1) + ";";
            //求总数
            sqlCmd += "select count(0) as totalCount from cases "+sqlWhere+';';
            Me.db.query(sqlCmd, sqlParams, function (_err, _results) {
                if (!_err) {
                    return Me.cb(200, null, { "totalCount": _results[1][0].totalCount, 'topics': _results[0] });
                }
                else {
                    return cbError(10001, Me.cb);
                }
            });
        },
        ExportCalculate:function(){
            var Me = this;
            var ep = new EventProxy();
            var sqlParams=[];
            var selectDataArr = Me.getParam('selectDataArr');
            var reportdate1 = Me.getParam('reportdate1');
            var reportdate2 = Me.getParam('reportdate2');
            var storageday1 = Me.getParam('storageday1');
            var storageday2 = Me.getParam('storageday2');
            var operatetimeforhis1 = Me.getParam('operatetimeforhis1');
            var operatetimeforhis2 = Me.getParam('operatetimeforhis2');
            var storageID = Me.getParam('storageID');
            var policyNo = Me.getParam('policyNo');
            var handleState = Me.getParam('handleState');
            var filename = Me.getParam('filename');
            var sqlCmd = 'select * from cases ';
            var sqlWhere = ' where 1 = 1 ';
            if(reportdate1){
                sqlWhere += ' and reportdate >= ? ';
                sqlParams.push(reportdate1);
            }
            if(reportdate2){
                sqlWhere += ' and reportdate <= ? ';
                sqlParams.push(reportdate2);
            }
            if(storageday1){
                sqlWhere += ' and storageday >= ? ';
                sqlParams.push(storageday1);
            }
            if(storageday2){
                sqlWhere += ' and storageday <= ? ';
                sqlParams.push(storageday2);
            }
            if(operatetimeforhis1){
                sqlWhere += ' and operatetimeforhis >= ? ';
                sqlParams.push(operatetimeforhis1);
            }
            if(operatetimeforhis2){
                sqlWhere += ' and operatetimeforhis <= ? ';
                sqlParams.push(operatetimeforhis2);
            }
            if(storageID){
                sqlWhere += ' and storageID like ? ';
                sqlParams.push(storageID);
            }
            if(policyNo){
                sqlWhere += ' and policyNo like ? ';
                sqlParams.push(policyNo);
            }
            if(handleState!='' && handleState != undefined && handleState!=null){
                sqlWhere += ' and handleState = ? ';
                sqlParams.push(handleState);
            }
            sqlCmd = sqlCmd + sqlWhere + ";";

            var sqlCmd1 = 'select * from comments;';
            selectDataArr=JSON.parse(selectDataArr);
            if(selectDataArr.length==0){
                Me.db.query(sqlCmd,sqlParams,ep.done('QueryCases'));
                Me.db.query(sqlCmd1,[],ep.done('QueryComments'));

                ep.all('QueryCases','QueryComments',function (result1,result2) {
                    var excel = [
                        ["暂存ID", "保单号","承保机构","报案日期","被保险人","估损金额","跟踪留言", "案件状态","暂存日期","最后更新日期"]
                    ];
                    for (var i = 0; i < result1.length; i++) {
                        var iData = result1[i];
                        var arr = [];
                        arr[arr.length] = iData.storageID;
                        arr[arr.length] = iData.policyNo;
                        arr[arr.length] = iData.institution;
                        var reportdate = iData.reportdate;
                        var reporthour = iData.reporthour;
                        arr[arr.length] = reportdate+" "+reporthour;
                        arr[arr.length] = iData.insurant;
                        arr[arr.length] = iData.amount;
                        var commentsContent='';
                        for(var j=0;j<result2.length;j++){
                            var jData=result2[j];
                            if(jData.caseID==iData.storageID){
                                commentsContent+=jData.commentsContent+';';
                            }
                        }
                        arr[arr.length] = commentsContent;
                        var handleState = iData.handleState;
                        var str='';
                        if(handleState==-1){
                            str='已注销';
                        }else if(handleState==0){
                            str='未处理';
                        }else if(handleState==1){
                            str='处理中';
                        }else if(handleState==2){
                            str='已完成';
                        }
                        arr[arr.length] = str;
                        var storageday = iData.storageday;
                        var str1='';
                        if(storageday){
                            var storageday1=storageday.substr(0,4);
                            var storageday2=storageday.substr(4,2);
                            var storageday3=storageday.substr(6,2);
                            str1=storageday1+'-'+storageday2+'-'+storageday3;
                        }
                        arr[arr.length] = str1;
                        arr[arr.length] = iData.operatetimeforhis;
                        excel[excel.length] = arr;
                    }
                    var xlsx2 = require("../libs/xlsx2");
                    var excelDir = settings.excelDir;
                    xlsx2.createExcelUrl(filename, excel, excelDir, function (err, result) {
                        if (err) {
                            return cbError(10001, Me.cb);
                        }
                        else {
                            var employeePath = path.join(__dirname, '../../web/excel');
                            var fullPath = File.joinfilePath([filename + ".xlsx"]);
                            xlsx2.deleteFile(fullPath, function (_err, _result) {
                                if (_result) {

                                }
                                else {

                                }
                            });
                            return Me.cb(200, null, result);
                        }
                    });
                });
                ep.fail(function(err){
                    return cbError(10001,Me.cb);
                });
            }else{
                Me.db.query(sqlCmd1,[],function(_err,_results){
                    if(!_err){
                        var excel = [
                            ["暂存ID", "保单号","承保机构","报案日期","被保险人","估损金额","跟踪留言", "案件状态","暂存日期","最后更新日期"]
                        ];
                        for(var i=0;i<selectDataArr.length;i++){
                            var iData = selectDataArr[i];
                            var arr = [];
                            arr[arr.length] = iData.storageID;
                            arr[arr.length] = iData.policyNo;
                            arr[arr.length] = iData.institution;
                            var reportdate = iData.reportdate;
                            var reporthour = iData.reporthour;
                            arr[arr.length] = reportdate+" "+reporthour;
                            arr[arr.length] = iData.insurant;
                            arr[arr.length] = iData.amount;
                            var commentsContent='';
                            for(var j=0;j<_results.length;j++){
                                var jData=_results[j];
                                if(jData.caseID==iData.storageID){
                                    commentsContent+=jData.commentsContent+';';
                                }
                            }
                            arr[arr.length] = commentsContent;
                            var handleState = iData.handleState;
                            var str='';
                            if(handleState==-1){
                                str='已注销';
                            }else if(handleState==0){
                                str='未处理';
                            }else if(handleState==1){
                                str='处理中';
                            }else if(handleState==2){
                                str='已完成';
                            }
                            arr[arr.length] = str;
                            var storageday = iData.storageday;
                            var str1='';
                            if(storageday){
                                var storageday1=storageday.substr(0,4);
                                var storageday2=storageday.substr(4,2);
                                var storageday3=storageday.substr(6,2);
                                str1=storageday1+'-'+storageday2+'-'+storageday3;
                            }
                            arr[arr.length] = str1;
                            arr[arr.length] = iData.operatetimeforhis;
                            excel[excel.length] = arr;
                        }
                        var xlsx2 = require("../libs/xlsx2");
                        var excelDir = settings.excelDir;
                        xlsx2.createExcelUrl(filename, excel, excelDir, function (err, result) {
                            if (err) {
                                return cbError(10001, Me.cb);
                            }
                            else {
                                var employeePath = path.join(__dirname, '../../web/excel');
                                var fullPath = File.joinfilePath([filename + ".xlsx"]);
                                xlsx2.deleteFile(fullPath, function (_err, _result) {
                                    if (_result) {

                                    }
                                    else {

                                    }
                                });
                                return Me.cb(200, null, result);
                            }
                        });
                    }else{
                        return cbError(10001,Me.cb);
                    }
                });
            }

            //Me.db.query(sqlCmd, sqlParams, function (_err, _result) {
            //    if (_err) {
            //        return cbError(10001, Me.cb);
            //    }
            //    else {
            //        var excel = [
            //            ["暂存ID", "保单号","承保机构","报案日期","被保险人","估损金额","案件状态","暂存日期","最后更新日期"]
            //        ];
            //        for (var i = 0; i < _result.length; i++) {
            //            var iData = _result[i];
            //            var arr = [];
            //            arr[arr.length] = iData.storageID;
            //            arr[arr.length] = iData.policyNo;
            //            arr[arr.length] = iData.institution;
            //            var reportdate = iData.reportdate;
            //            var reporthour = iData.reporthour;
            //            arr[arr.length] = reportdate+" "+reporthour;
            //            arr[arr.length] = iData.insurant;
            //            arr[arr.length] = iData.amount;
            //            //arr[arr.length] = iData.policyNo;//跟踪留言
            //            var handleState = iData.handleState;
            //            var str='';
            //            if(handleState==-1){
            //                str='已注销';
            //            }else if(handleState==0){
            //                str='未处理';
            //            }else if(handleState==1){
            //                str='处理中';
            //            }else if(handleState==2){
            //                str='已完成';
            //            }
            //            arr[arr.length] = str;
            //            var storageday = iData.storageday;
            //            var str1='';
            //            if(storageday){
            //                var storageday1=storageday.substr(0,4);
            //                var storageday2=storageday.substr(4,2);
            //                var storageday3=storageday.substr(6,2);
            //                str1=storageday1+'-'+storageday2+'-'+storageday3;
            //            }
            //            arr[arr.length] = str1;
            //            arr[arr.length] = iData.operatetimeforhis;
            //            excel[excel.length] = arr;
            //        }
            //        console.log(excel);
            //        var xlsx2 = require("../libs/xlsx2");
            //        var excelDir = settings.excelDir;
            //        console.log('excelDir:', excelDir);
            //        xlsx2.createExcelUrl(filename, excel, excelDir, function (err, result) {
            //            if (err) {
            //                return cbError(10001, Me.cb);
            //            }
            //            else {
            //                var employeePath = path.join(__dirname, '../../web/excel');
            //                var fullPath = File.joinfilePath([filename + ".xlsx"]);
            //                xlsx2.deleteFile(fullPath, function (_err, _result) {
            //                    if (_result) {
            //
            //                    }
            //                    else {
            //
            //                    }
            //                });
            //                return Me.cb(200, null, result);
            //            }
            //        });
            //    }
            //})

        },
        ExportExcel: function () {
            //导出保单
            var Me = this;
            var keyword, filename;
            keyword = Me.getParam('keyword');
            filename = '保费统计-' + new Date().getTime();

            var sqlCmd = 'select * from coststatistics where years = ?';
            var sqlParams = [];
            sqlParams[sqlParams.length] = keyword;


            //sqlCmd += sqlWhere;
            Me.db.query(sqlCmd, sqlParams, function (err, _result) {
                if (err) {
                    return cbError(10001, Me.cb);
                }
                else {
                    var excel = [
                        ["月份", "行程次数"]
                    ];
                    for (var i = 0; i < _result.length; i++) {
                        var iData = _result[i];
                        var arr = [];
                        arr[arr.length] = iData.month;
                        arr[arr.length] = iData.number;
                        excel[excel.length] = arr;
                    }
                    console.log(excel);
                    var xlsx2 = require("../libs/xlsx2");
                    var excelDir = settings.excelDir;
                    console.log('excelDir:', excelDir);
                    xlsx2.createExcelUrl(filename, excel, excelDir, function (err, result) {
                        if (err) {
                            return cbError(10001, Me.cb);
                        }
                        else {
                            var employeePath = path.join(__dirname, '../../web/excel');
                            var fullPath = File.joinfilePath([filename + ".xlsx"]);
                            // console.log("全局路径", fullPath);
                            xlsx2.deleteFile(fullPath, function (_err, _result) {
                                if (_result) {

                                }
                                else {

                                }
                            });
                            return Me.cb(200, null, result);
                        }
                    });
                }
            })
        },
        getCommitList:function(){
            
        }
       
    };
};






//非正常错误统一处理
function cbError(code, cb) {
    cb(code, _errors[code].message, _errors[code].name);
}