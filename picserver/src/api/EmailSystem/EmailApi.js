/**
 * Created by Administrator on 15-1-2.
 */


var mysql = require('mysql');
var config = require('../../settings');
var pool = mysql.createPool(config.mysql);
var access_token = "";
var Buffer = require("buffer").Buffer;
var crypto = require('crypto');
var tokenObj = {};
var db = require('../libs/db.js');
var EventProxy = require('eventproxy');
var module = "AuthServer";
var request = require('request');
//邮件话术配置
var handleUrl = "http://127.0.0.1:1001/emailhandle.html";
var AuthorityUrl="http://127.0.0.1:1001/emailhandle.html";
var AuthorityText= "这是一封超权限上报邮件123";
var SafeText= "这是一封风险上报邮件111";
var TicketText= "这是一封获票审批邮件";
var nodemailer = require('nodemailer');
console.log(nodemailer);
var rec = {
	fromUser: 'AuthServer',
	toUser: 'lg',
	text: '123',
	module: module,
	socketid: 1,
	roletype: 1, //1 查勘员 2定损员 3 查勘定损员
	eventype: 1 //1 待查勘 2已查勘 3待定损 4定损中 5已定损 6 获票
};
var emailConf = {
	host: "smtp.qq.com",
	port: "465",
	user: "493891498@qq.com",
	pass: "delhxwmrhamobheg"
}
//host: "smtp.mxhichina.com",  // 阿里邮箱
//host: "smtp.qq.com",         // 腾讯邮箱
//host: "smtp.163.com",        // 网易邮箱
//host:"smtp.live.com"         //微软邮箱
function md5(data) {
	var buf = new Buffer(data);
	var str = buf.toString("binary");
	return crypto.createHash("md5").update(str).digest("hex");
}

function SysTokens(args, callback) {
	console.log('SysTokens');
	var sql_getTokens = "select * from users where frontrole>0;";
	db.query(sql_getTokens, function(err, result) {
		if(err) {
			return callback(err, true);
		} else {
			if(result.length > 0) {
				for(var i = 0; i < result.length; i++) {
					tokenObj[result[i].username] = result[i].token;
				}
			}
			return callback(null, tokenObj);
		}
	});
}
exports.SysTokens = SysTokens;

function checkToken(token) {
	var token = token;
	var flag = false;
	for(var key in tokenObj) {
		if(tokenObj[key] == token) {
			console.log(tokenObj[key]);
			console.log(token);
			flag = key;
		}
	}
	if(flag) {
		return flag;
	}
	return false;
}
exports.GetApi = function(_req, _res, _callbackFunction, _errMark) {
	return {
		sqlConn: require('../libs/db.js'), //数据库连接属性
		req: _req,
		res: _res,
		errors: _errMark,
		callbackFunction: _callbackFunction,
		errObj: {
			code: '-1',
			cause: ''
		},
		GetParams: function(paramName) {
			if(typeof(_req.query[paramName]) == "undefined" && typeof(_req.body[paramName]) == "undefined")
				throw {
					message: '缺乏参数：' + paramName
				};
			else if(!_req.query[paramName])
				return _req.body[paramName];
			else
				return _req.query[paramName];
		},
		CheckTokens: function(token) {
			var username = checkToken(token);
			if(!username) {
				throw {
					message: 'token已失效，请重新登录'
				};
			} else {
				return username;
			}
		},
		TestSoclket123: function() {
			var Me = this;
			request.post('http://127.0.0.1:8080/sendMsgToClientFromServer', {
				form: rec
			}, function(err, response, body) {
				console.log('body:', body);
				return Me.callbackFunction(null, true);
			});
		},
		CheckToken: function() {
			console.log('CheckToken');
			//todo设置频率，相同token 10次/秒视为攻击。然后设置token失效
			var Me = this;
			var token = Me.GetParams('token');
			var username = checkToken(token);
			if(!username) {
				throw {
					message: 'token已失效，请重新登录'
				};
			} else {
				console.log(token);
				console.log(username);
				return Me.callbackFunction(null, username);
			}
		},
		test: function() {
			var email= "493891498@qq.com";
			var url =handleUrl;
			var content = "您有一封超权限上报的邮件";
			this.sendEmail(email,content,url);
		},
		md5: function(data) {
			var buf = new Buffer(data);
			var str = buf.toString("binary");
			return crypto.createHash("md5").update(str).digest("hex");
		},
		//客户端提交超权限上报并发送邮件
		AuthorityBook: function() {
			var Me = this;
			//var id = Me.GetParams('id');
			//var AuthorityType = Me.GetParams('AuthorityType'); //ck 查勘任务 ds定损
			//var AuthorityMoney = Me.GetParams('AuthorityMoney');
			//var AuthorityBrand = Me.GetParams('AuthorityBrand');
			//var AuthorityContent = Me.GetParams('AuthorityContent');
			var id=9;
			var AuthorityContent='超权限内容';
			var ep = new EventProxy();
			var sql_getAuthority = "select b.areaid,a.id from tasks_ds as a left join users as b on a.assessorNo = b.jobNo where a.id=?";
			db.query(sql_getAuthority, [id], function(err, result) {
				if(err) {
					return Me.callbackFunction('系统异常', null);
				}
				if(result.length > 0) {
					 var AuthorityData={
										areaid:result[0].areaid,
										taskid:result[0].id
						 }
					 var sqlCmd2 = "update tasks_ds set AuthorityContent = ? where id = ?;";
                            //console.log("sqlCmd2：", sqlCmd2);
                            //console.log("参数：", [lat, lng, id]);
                            db.query(sqlCmd2, [AuthorityContent,id], function(err, result) {
                                if (err) {
                                    return Me.callbackFunction('系统异常', null);
                                } else {
                                   
									//return Me.callbackFunction(null,AuthorityData);
									ep.emit('getEmail',AuthorityData);
                                }
                            });
					
					
					
					
				} else {
					return Me.callbackFunction('该任务不存在', null);
				}
			})
			ep.once('getEmail', function(AuthorityData) {
            	var dd=AuthorityData.areaid;
				//return Me.callbackFunction(null,dd);
				var sql_AuthorityEmail="select * FROM users where areaid=(select AreaID from area where Area3Code = (select Area3Code from area where AreaID=3) AND Area4Code='') AND userstate=1 AND backrole=5"
				db.query(sql_AuthorityEmail, [dd], function(err, result) {
				if(err) {
					return Me.callbackFunction('系统异常', null);
				}
				if(result.length > 0) {
					//return Me.callbackFunction(null,result);
					var result_email = result[0].email;
					console.log(result_email);
					var result_name= result[0].username;
					var result_url=AuthorityUrl+'?id='+AuthorityData.taskid+'&emailname='+result_name;
					//return Me.callbackFunction(null,result_email+AuthorityText+result_url);
				    Me.sendEmail(result_email,AuthorityText,result_url);	
					
				} else {
					return Me.callbackFunction('该任务不存在', null);
				}
			})
			})
		
		},
		//超权限上报数据显示
		AuthorityInfo:function(){			
			var Me = this;
			var TaskId = Me.GetParams('id');
		    var sql_AuthorityInfo = "select id,reporter,reporter1,caseNo,vehicleBrand,authority_remarks,authority_reply from tasks_ds as a where a.id=?";
			db.query(sql_AuthorityInfo, [TaskId], function(err, result) {
				if(err) {
					return Me.callbackFunction('系统异常', null);
				}
				if(result.length > 0) {
					var xw_info=result[0];
					var cbData={
                        id:xw_info.id,
                        reporter:xw_info.reporter,
                        reporter1:xw_info.reporter1,
                        caseNo:xw_info.caseNo,
                        expect_amount:xw_info.expect_amount,
                        vehicleBrand:xw_info.vehicleBrand,
                        authority_remarks:xw_info.authority_remarks,
                        authority_reply:xw_info.authority_reply
                    }
                    // tokenObj[username]=d;
                    //return Me.callbackFunction(null,cbData);
                     //var resddd = JSON.stringify(cbData);
                     //Me.res.send(resddd);
					  Me.res.send(Me.req.query.callback + "(" + JSON.stringify(cbData) + ")");
					
				} else {
					return Me.callbackFunction('该任务不存在', null);
				}
			})
		},
		//处理超权限上报结果
		AuthorityHandle:function(){
			var Me = this;
			var id = Me.GetParams('id');
			var type = Me.GetParams('type'); //1是同意，0是不同意
			var sqlCmd1 = "update tasks_ds set riskstate = ? where id = ?;";
            db.query(sqlCmd1, [type,id], function(err, result) {
                                if (err) {
                                    return Me.callbackFunction('系统异常', null);
                                } else {
                                    if(type=="1"){
										
										//处理定损平移分配规则
									}
                                }
            });
			
		},
		//处理定损平移结果
		AuthorityMoveHandle:function(){
			var Me = this;
			var id = Me.GetParams('id');
			var type = Me.GetParams('type'); //1是同意，0是不同意
			var sqlCmd1 = "update tasks_ds set riskstate = ? where id = ?;";
            db.query(sqlCmd1, [type,id], function(err, result) {
                                if (err) {
                                    return Me.callbackFunction('系统异常', null);
                                } else {
                                    if(type=="1"){
										
										//处理定损平移分配规则
									}
                                }
            });
		},
		//客户端提交风险上报并发送邮件
		SafeBook:function(){
			var Me = this;
			//var id = Me.GetParams('id');
			//var AuthorityType = Me.GetParams('AuthorityType'); //ck 查勘任务 ds定损
			//var AuthorityMoney = Me.GetParams('AuthorityMoney');
			//var AuthorityBrand = Me.GetParams('AuthorityBrand');
			//var AuthorityContent = Me.GetParams('AuthorityContent');
			var id=9;
			var AuthorityContent='超权限内容';
			var ep = new EventProxy();
			var sql_getAuthority = "select b.areaid,a.id from tasks_ds as a left join users as b on a.assessorNo = b.jobNo where a.id=?";
			db.query(sql_getAuthority, [id], function(err, result) {
				if(err) {
					return Me.callbackFunction('系统异常', null);
				}
				if(result.length > 0) {
					 var AuthorityData={
										areaid:result[0].areaid,
										taskid:result[0].id
						 }
					 var sqlCmd2 = "update tasks_ds set AuthorityContent = ? where id = ?;";
                            //console.log("sqlCmd2：", sqlCmd2);
                            //console.log("参数：", [lat, lng, id]);
                            db.query(sqlCmd2, [AuthorityContent,id], function(err, result) {
                                if (err) {
                                    return Me.callbackFunction('系统异常', null);
                                } else {
                                   
									//return Me.callbackFunction(null,AuthorityData);
									ep.emit('getEmail',AuthorityData);
                                }
                            });
					
					
					
					
				} else {
					return Me.callbackFunction('该任务不存在', null);
				}
			})
			ep.once('getEmail', function(AuthorityData) {
            	var dd=AuthorityData.areaid;
				//return Me.callbackFunction(null,dd);
				var sql_AuthorityEmail="select * FROM users where areaid=(select AreaID from area where Area3Code = (select Area3Code from area where AreaID=3) AND Area4Code='') AND userstate=1 AND backrole=5"
				db.query(sql_AuthorityEmail, [dd], function(err, result) {
				if(err) {
					return Me.callbackFunction('系统异常', null);
				}
				if(result.length > 0) {
					//return Me.callbackFunction(null,result);
					var result_email = result[0].email;
					console.log(result_email);
					var result_name= result[0].username;
					var result_url=AuthorityUrl+'?id='+AuthorityData.taskid+'&emailname='+result_name;
					//return Me.callbackFunction(null,result_email+AuthorityText+result_url);
				    Me.sendEmail(result_email,AuthorityText,result_url);	
					
				} else {
					return Me.callbackFunction('该任务不存在', null);
				}
			   })
		   })
			
		},
		//风险上报邮件页面显示
		SafeInfo:function(){			
			var Me = this;
			var TaskId = Me.GetParams('id');
		    var sql_AuthorityInfo = "select id,reporter,reporter1,caseNo,vehicleBrand,authority_remarks,authority_reply from tasks_ds as a where a.id=?";
			db.query(sql_AuthorityInfo, [TaskId], function(err, result) {
				if(err) {
					return Me.callbackFunction('系统异常', null);
				}
				if(result.length > 0) {
					var xw_info=result[0];
					var cbData={
                        id:xw_info.id,
                        reporter:xw_info.reporter,
                        reporter1:xw_info.reporter1,
                        caseNo:xw_info.caseNo,
                        expect_amount:xw_info.expect_amount,
                        vehicleBrand:xw_info.vehicleBrand,
                        authority_remarks:xw_info.authority_remarks,
                        authority_reply:xw_info.authority_reply
                    }
                    // tokenObj[username]=d;
                    //return Me.callbackFunction(null,cbData);
                     //var resddd = JSON.stringify(cbData);
                     //Me.res.send(resddd);
					  Me.res.send(Me.req.query.callback + "(" + JSON.stringify(cbData) + ")");
					
				} else {
					return Me.callbackFunction('该任务不存在', null);
				}
			})
		},
		//处理风险上报结果
		SafeHandle:function(){
			var Me = this;
			var id = Me.GetParams('id');
			var areaid = Me.GetParams('areaid');
			var type = Me.GetParams('type'); //1是同意，0是不同意 
			var sqlCmd1 = "update tasks_ds set riskstate = ? where id = ?;";
			var ep = new EventProxy();
            db.query(sqlCmd1, [type,id], function(err, result) {
                                if (err) {
                                    return Me.callbackFunction('系统异常', null);
                                } else {
                                    if(type=="1"){
										    //获取市级主任邮箱
										 	var sql_safeEmail1="select * FROM users where areaid=(select AreaID from area where Area3Code = (select Area3Code from area where AreaID=3) AND Area4Code='') AND userstate=1 AND backrole=5"
											db.query(sql_safeEmail1, [dd], function(err, result) {
											if(err) {
												return Me.callbackFunction('系统异常', null);
											}
											if(result.length > 0) {
												//return Me.callbackFunction(null,result);
												var emailOne = result[0].email;
												ep.emit('getEmai0', Email0);
										         
												
											} else {
												return Me.callbackFunction('该任务不存在', null);
											}
			                               })
										   //获取调查员邮箱
										   var sql_safeEmail1="select * FROM users where areaid=(select AreaID from area where Area3Code = (select Area3Code from area where AreaID=3) AND Area4Code='') AND userstate=1 AND backrole=5"
											db.query(sql_safeEmail1, [dd], function(err, result) {
											if(err) {
												return Me.callbackFunction('系统异常', null);
											}
											if(result.length > 0) {
												//return Me.callbackFunction(null,result);
												var emailTwo = result[0].email;
												ep.emit('getEmai1', Email1);
										         
												
											} else {
												return Me.callbackFunction('该任务不存在', null);
											}
			                               })
										   ep.all('getEmai0','getEmail',function(Email0,Email1){											   
											   var email= "493891498@qq.com";
											   var url =handleUrl+"?type=2"; //type 等于2只显示不审核
											   var content = "您有一封超权限上报的邮件";
											   this.sendEmail(email,content,url);
											   
										   })
										
									}
                                }
            });
			
		},
		//客户端提交获票审批并发送邮件
		TicketBook: function() {
			var Me = this;
			//var id = Me.GetParams('id');
			//var AuthorityType = Me.GetParams('AuthorityType'); //ck 查勘任务 ds定损
			//var AuthorityMoney = Me.GetParams('AuthorityMoney');
			//var AuthorityBrand = Me.GetParams('AuthorityBrand');
			//var AuthorityContent = Me.GetParams('AuthorityContent');
			var id=9;
			var AuthorityContent='超权限内容';
			var ep = new EventProxy();
			var sql_getAuthority = "select b.areaid,a.id from tasks_ds as a left join users as b on a.assessorNo = b.jobNo where a.id=?";
			db.query(sql_getAuthority, [id], function(err, result) {
				if(err) {
					return Me.callbackFunction('系统异常', null);
				}
				if(result.length > 0) {
					 var AuthorityData={
										areaid:result[0].areaid,
										taskid:result[0].id
						 }
					 var sqlCmd2 = "update tasks_ds set AuthorityContent = ? where id = ?;";
                            //console.log("sqlCmd2：", sqlCmd2);
                            //console.log("参数：", [lat, lng, id]);
                            db.query(sqlCmd2, [AuthorityContent,id], function(err, result) {
                                if (err) {
                                    return Me.callbackFunction('系统异常', null);
                                } else {
                                   
									//return Me.callbackFunction(null,AuthorityData);
									ep.emit('getEmail',AuthorityData);
                                }
                            });
					
					
					
					
				} else {
					return Me.callbackFunction('该任务不存在', null);
				}
			})
			ep.once('getEmail', function(AuthorityData) {
            	var dd=AuthorityData.areaid;
				//return Me.callbackFunction(null,dd);
				var sql_AuthorityEmail="select * FROM users where areaid=(select AreaID from area where Area3Code = (select Area3Code from area where AreaID=3) AND Area4Code='') AND userstate=1 AND backrole=5"
				db.query(sql_AuthorityEmail, [dd], function(err, result) {
				if(err) {
					return Me.callbackFunction('系统异常', null);
				}
				if(result.length > 0) {
					//return Me.callbackFunction(null,result);
					var result_email = result[0].email;
					console.log(result_email);
					var result_name= result[0].username;
					var result_url=AuthorityUrl+'?id='+AuthorityData.taskid+'&emailname='+result_name;
					//return Me.callbackFunction(null,result_email+AuthorityText+result_url);
				    Me.sendEmail(result_email,AuthorityText,result_url);	
					
				} else {
					return Me.callbackFunction('该任务不存在', null);
				}
			})
			})
		
		},
		//获票审批数据显示
		TicketInfo:function(){			
			var Me = this;
			var TaskId = Me.GetParams('id');
		    var sql_AuthorityInfo = "select id,reporter,reporter1,caseNo,vehicleBrand,authority_remarks,authority_reply from tasks_ds as a where a.id=?";
			db.query(sql_AuthorityInfo, [TaskId], function(err, result) {
				if(err) {
					return Me.callbackFunction('系统异常', null);
				}
				if(result.length > 0) {
					var xw_info=result[0];
					var cbData={
                        id:xw_info.id,
                        reporter:xw_info.reporter,
                        reporter1:xw_info.reporter1,
                        caseNo:xw_info.caseNo,
                        expect_amount:xw_info.expect_amount,
                        vehicleBrand:xw_info.vehicleBrand,
                        authority_remarks:xw_info.authority_remarks,
                        authority_reply:xw_info.authority_reply
                    }
                    // tokenObj[username]=d;
                    //return Me.callbackFunction(null,cbData);
                     //var resddd = JSON.stringify(cbData);
                     //Me.res.send(resddd);
					  Me.res.send(Me.req.query.callback + "(" + JSON.stringify(cbData) + ")");
					
				} else {
					return Me.callbackFunction('该任务不存在', null);
				}
			})
		},
		//处理获票审批结果
		TicketHandle:function(){
			var Me = this;
			var id = Me.GetParams('id');
			var type = Me.GetParams('type'); //1是同意，0是不同意
			var sqlCmd1 = "update tasks_ds set riskstate = ? where id = ?;";
            db.query(sqlCmd1, [type,id], function(err, result) {
                                if (err) {
                                    return Me.callbackFunction('系统异常', null);
                                } else {
                                    return Me.callbackFunction(null,'操作成功');
                                }
            });
			
		},
		sendEmail:function(email,content,url){
			console.log("sendEmail");
			var Me=this;
			var transporter = nodemailer.createTransport({
				service: 'qq',
				auth: {
					user: '493891498@qq.com',
					pass: 'efruxrvlnszibicj' //授权码,通过QQ获取
				}
			});
			var mailOptions = {
				from: '493891498@qq.com', // 发送者
				to: email, // 接受者,可以同时发送多个,以逗号隔开
				subject: '邮件', // 标题
				//text: 'Hello world', // 文本
				html: '<h2>'+content+'详细请<a href='+url+'>查看'+url+'</a></h2>',
			};
			transporter.sendMail(mailOptions, function (err, info) {
				if (err) {
					//console.log(err);
					console.log(qq+"该邮箱未发送成功");
					//Me.ExcelNoSet();
					//Me.EmailSet(09,Emailminute+1);//前面是小时，后面是分
					return;
				}
				console.log("给"+qq+"发送成功");
				//return cb(null,true);
				var suc_text="给"+qq+"发送成功";
				return Me.callbackFunction(null,suc_text);
			});
		}
	}
}