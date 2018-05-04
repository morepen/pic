
var EventProxy = require('eventproxy');
var settings = require('../../settings.js');
var _errors = require('../libs/errors');
var path = require('path');
var hcUtil = require('../libs/hcUti');
var File = require('../libs/File');
var md5 = require("md5")

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
        GetUser: function () {
        // 获取用户列表
            var Me = this;
            var start, limit;
            var sqlParams=[];
            var sqlCmd = 'select * from users';
            start = Me.getParam('start');
            limit = Me.getParam('limit');
            var sqlWhere = '';
            // 分页相关
            sqlCmd = sqlCmd + sqlWhere + " limit " + start + "," + limit + ";";
            //求总数
            sqlCmd += "select count(0) as totalCount from users";
            // console.log("sqlCmd"+sqlCmd);
            // console.log("sqlParams"+sqlParams);
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
                console.log(_results);
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
                var sqlParams = [realname,jobNo,username, md5('000000'),mobile,frontrole];
                console.log(sqlCmd);
                console.log(sqlParams);
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
            var sqlCmd = 'update users set realname=?,jobNo=?,username=?,password=?,frontrole=?,mobile=?  where id=?';
            var sqlParams = [realname,jobNo,username,password,frontrole,mobile,id];
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
            var start, limit;
            var sqlParams=[];
            var sqlCmd = 'select * from policy';
            start = Me.getParam('start');
            limit = Me.getParam('limit');
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
            var ep = new EventProxy();
            var sqlCmd = 'select * from policy where caseCode=?';
            var sqlParams = [caseCode];
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
            var start, limit;
            var sqlParams=[changeState];
            var sqlCmd = 'select * from cases ';
            start = Me.getParam('start');
            limit = Me.getParam('limit');
            var sqlWhere = 'where changeState=?';
            sqlParams = [changeState];
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
        //任务调度
        EditTask:function(){
            var Me = this;
            var id, realname;
            id = Me.getParam('id');
            caseHandler = Me.getParam('caseHandler');
            var sqlCmd = 'update cases set caseHandler=? where id=?';
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
        GetCase: function () {
        //获取案件处理
            var Me = this;
            var handleState = Me.getParam('handleState');
            var start, limit;
            var sqlParams=[handleState];
            var sqlCmd = 'select * from cases ';
            start = Me.getParam('start');
            limit = Me.getParam('limit');
            var sqlWhere = 'where handleState=?';
            sqlParams = [handleState];
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
        //案件处理
        HandleCase:function(){
            var Me = this;
            var id, realname;
            id = Me.getParam('id');
            caseHandler = Me.getParam('caseHandler');
            var sqlCmd = 'update cases set caseHandler=? where id=?';
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
        GetCostStatistics: function () {
        //获取数据统计
            var Me = this;
            var start, limit;
            var sqlParams=[];
            var sqlCmd = 'select * from cases';
            start = Me.getParam('start');
            limit = Me.getParam('limit');
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