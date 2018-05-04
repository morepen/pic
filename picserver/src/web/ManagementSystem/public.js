var PublicObject = {
    pageSize: 50,
    ajaxTimeout: 30000,
    CurrentUser: '',
    currentButton: '',  //指当前按钮是点击的‘当前任务’还是‘历史任务’
    currentRecord: '',   //指点击查看任务详情时的那一行的数据
    str:'',//留言窗口
    state:0//案件处理状态
};

function formatDate(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function getCurrentStartEndTime() {//当天时间
    var TimeNow = new Date();
    var endDay1 = new Date(TimeNow.getFullYear(), TimeNow.getMonth(), TimeNow.getDate(), 23, 59, 59);//23:59:59
    var enddaystr = endDay1.getTime().toString();
    var enddaystr2 = enddaystr - 24 * 60 * 60 * 1000;
    var startstr = this.transformDate('Y-m-d', enddaystr2.toString().substring(0, 10));
    var enddaystr3 = this.transformDate('Y-m-d', enddaystr.toString().substring(0, 10));
    return [startstr, enddaystr3];
}

function getCurrentMonthTime() {//当月的时间 如：今天是8.8 则获取8.1-8.8时间
    var TimeNow = new Date();
    var startDay1 = new Date(TimeNow.getFullYear(), TimeNow.getMonth(), 1);//当月1号
    //var startdaystr = startDay1.getTime();
    //var startdaystr = formatDate(startDay1, "yyyy-MM-dd hh:mm:ss");
    var endDay1 = new Date(TimeNow.getFullYear(), TimeNow.getMonth(), TimeNow.getDate(), 23, 59, 59);//23:59:59
    //var enddaystr = endDay1.getTime();
    //var enddaystr = formatDate(endDay1, "yyyy-MM-dd hh:mm:ss");
    return [startDay1, endDay1];
}

function getHistoryTime() {    //获得前7天的时间
    var TimeNow = new Date();
    var endDay1 = new Date(TimeNow.getFullYear(), TimeNow.getMonth(), TimeNow.getDate(), 23, 59, 59);//23:59:59
    var enddaystr = endDay1.getTime().toString();
    var enddaystr2 = enddaystr - 7 * 24 * 60 * 60 * 1000;
    var startstr = this.transformDate('Y-m-d', enddaystr2.toString().substring(0, 10));
    var enddaystr3 = this.transformDate('Y-m-d', enddaystr.toString().substring(0, 10));
    return [startstr, enddaystr3];
}

function transformDate(format, timestamp) {//时间戳转换成时间
    //return new Date(str * 1000).toISOString().replace('T'," ").substring(0,19);不考虑兼容性
    //兼容性好一点
    if (timestamp != null) {
        var jsdate = new Date(timestamp * 1000);
    } else return "";
    var a;
    var pad = function (n, c) {
        if ((n = n + "").length < c) {
            return new Array(++c - n.length).join("0") + n;
        } else {
            return n;
        }
    };
    var txt_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var txt_ordin = { 1: "st", 2: "nd", 3: "rd", 21: "st", 22: "nd", 23: "rd", 31: "st" };
    var txt_months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var f = {
        // Day
        d: function () {
            return pad(f.j(), 2);
        },
        D: function () {
            return f.l().substr(0, 3);
        },
        j: function () {
            return jsdate.getDate();
        },
        l: function () {
            return txt_weekdays[f.w()];
        },
        N: function () {
            return f.w() + 1;
        },
        S: function () {
            return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th';
        },
        w: function () {
            return jsdate.getDay();
        },
        z: function () {
            return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0;
        },

        // Week
        W: function () {
            var a = f.z(), b = 364 + f.L() - a;
            var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1;
            if (b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b) {
                return 1;
            } else {
                if (a <= 2 && nd >= 4 && a >= (6 - nd)) {
                    nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31");
                    return date("W", Math.round(nd2.getTime() / 1000));
                } else {
                    return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);
                }
            }
        },

        // Month
        F: function () {
            return txt_months[f.n()];
        },
        m: function () {
            return pad(f.n(), 2);
        },
        M: function () {
            return f.F().substr(0, 3);
        },
        n: function () {
            return jsdate.getMonth() + 1;
        },
        t: function () {
            var n;
            if ((n = jsdate.getMonth() + 1) == 2) {
                return 28 + f.L();
            } else {
                if (n & 1 && n < 8 || !(n & 1) && n > 7) {
                    return 31;
                } else {
                    return 30;
                }
            }
        },

        // Year
        L: function () {
            var y = f.Y();
            return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0;
        },
        //o not supported yet
        Y: function () {
            return jsdate.getFullYear();
        },
        y: function () {
            return (jsdate.getFullYear() + "").slice(2);
        },

        // Time
        a: function () {
            return jsdate.getHours() > 11 ? "pm" : "am";
        },
        A: function () {
            return f.a().toUpperCase();
        },
        B: function () {
            // peter paul koch:
            var off = (jsdate.getTimezoneOffset() + 60) * 60;
            var theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off;
            var beat = Math.floor(theSeconds / 86.4);
            if (beat > 1000) beat -= 1000;
            if (beat < 0) beat += 1000;
            if ((String(beat)).length == 1) beat = "00" + beat;
            if ((String(beat)).length == 2) beat = "0" + beat;
            return beat;
        },
        g: function () {
            return jsdate.getHours() % 12 || 12;
        },
        G: function () {
            return jsdate.getHours();
        },
        h: function () {
            return pad(f.g(), 2);
        },
        H: function () {
            return pad(jsdate.getHours(), 2);
        },
        i: function () {
            return pad(jsdate.getMinutes(), 2);
        },
        s: function () {
            return pad(jsdate.getSeconds(), 2);
        },
        //u not supported yet

        // Timezone
        //e not supported yet
        //I not supported yet
        O: function () {
            var t = pad(Math.abs(jsdate.getTimezoneOffset() / 60 * 100), 4);
            if (jsdate.getTimezoneOffset() > 0) t = "-" + t; else t = "+" + t;
            return t;
        },
        P: function () {
            var O = f.O();
            return (O.substr(0, 3) + ":" + O.substr(3, 2));
        },
        //T not supported yet
        //Z not supported yet

        // Full Date/Time
        c: function () {
            return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P();
        },
        //r not supported yet
        U: function () {
            return Math.round(jsdate.getTime() / 1000);
        }
    };

    return format.replace(/[\\]?([a-zA-Z])/g, function (t, s) {
        if (t != s) {
            // escaped
            ret = s;
        } else if (f[s]) {
            // a date function exists
            ret = f[s]();
        } else {
            // nothing special
            ret = s;
        }
        return ret;
    });
}

// 退出登录
function UserCheckOut() {
    Ext.getCmp('mainViewPort').getEl().mask("正在退出，请稍候");//遮罩
    Ext.Ajax.request({
        url: '../api/public/UserCheckOut',
        method: 'GET',
        success: function (response) {
            Ext.getCmp('mainViewPort').getEl().unmask();//取消遮罩
            var rspText = JSON.parse(response.responseText);
            if (rspText.code == 200) {
                Ext.getDom('divUserInfo').innerHTML = '';
                window.location.href = '/';
            } 
            else {
                window.location.href = '/';
            }
        },
        failure: function (response, options) {
            Ext.getCmp('mainViewPort').getEl().unmask();//取消遮罩
            Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
            window.location.href = "/";
        }
    })
}

// 保单停用，启用
function ChangePolicyStatus(mark, id, namestr, status) {
    var btn_id = 'user_span_' + id;
    var status = status;
    var btn_span = $('#' + btn_id).find("span");
    var change = btn_span.attr("change");
    if (status == 1) {//启用的状态
        Ext.MessageBox.confirm("提示", "确认要将保单号为【" + namestr + "】的保单改为停用状态吗?", function (btn) {
            if (btn == "yes") {
                Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
                Ext.Ajax.request({
                    url: '../api/ManageService/ChangeToDisable',
                    params: {
                        id: id,
                        RandomTag: Math.random()
                    },
                    method: 'Post',
                    success: function (response, options) {
                        Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                        var result = Ext.JSON.decode(response.responseText);
                        if (result.code == 200) {
                            Ext.getStore('PolicyStore').reload();
                        } 
                        else {
                            Ext.MessageBox.alert('提示', result.msg);
                        }
                    },
                    failure: function (response, options) {
                        Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                        Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
                    }
                });
            }
        });
    } else {//停用的状态
        Ext.MessageBox.confirm("提示", "确认要将保单号为【" + namestr + "】的保单改为启用状态吗?", function (btn) {
            if (btn == "yes") {
                Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
                Ext.Ajax.request({
                    url: '../api/ManageService/ChangeToEnable',
                    params: {
                        id: id,
                        RandomTag: Math.random()
                    },
                    method: 'Post',
                    success: function (response, options) {
                        //debugger;
                        Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                        var result = Ext.JSON.decode(response.responseText);
                        if (result.code == 200) {
                            Ext.getStore('PolicyStore').reload();
                        }
                        else {
                            Ext.MessageBox.alert('提示', result.msg);
                        }
                    },
                    failure: function (response, options) {
                        Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                        Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
                    }
                });
            }
        });
    }
}
// 用户停用，启用
function ChangeUserStatus(mark, id, namestr, status) {
    var btn_id = 'user_span_' + id;
    var status = status;
    var btn_span = $('#' + btn_id).find("span");
    var change = btn_span.attr("change");
    if (status == 1) {//启用的状态
        Ext.MessageBox.confirm("提示", "确认要将管理员【" + namestr + "】改为停用状态吗?", function (btn) {
            if (btn == "yes") {
                Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
                Ext.Ajax.request({
                    url: '../api/ManageService/ChangeToDisableUser',
                    params: {
                        id: id,
                        RandomTag: Math.random()
                    },
                    method: 'Post',
                    success: function (response, options) {
                        Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                        var result = Ext.JSON.decode(response.responseText);
                        if (result.code == 200) {
                            Ext.getStore('UserStore').reload();
                        }
                        else {
                            Ext.MessageBox.alert('提示', result.msg);
                        }
                    },
                    failure: function (response, options) {
                        Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                        Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
                    }
                });
            }
        });
    } else {//停用的状态
        Ext.MessageBox.confirm("提示", "确认要将管理员【" + namestr + "】改为启用状态吗?", function (btn) {
            if (btn == "yes") {
                Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
                Ext.Ajax.request({
                    url: '../api/ManageService/ChangeToEnableUser',
                    params: {
                        id: id,
                        RandomTag: Math.random()
                    },
                    method: 'Post',
                    success: function (response, options) {
                        //debugger;
                        Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                        var result = Ext.JSON.decode(response.responseText);
                        if (result.code == 200) {
                            Ext.getStore('UserStore').reload();
                        }
                        else {
                            Ext.MessageBox.alert('提示', result.msg);
                        }
                    },
                    failure: function (response, options) {
                        Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                        Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
                    }
                });
            }
        });
    }
}
//是否正式报案
function ReportCase(storageID,isReport) {
    var btn_id = 'case_span_' + storageID;
    var isReport = isReport;
    var _isReport = 0;
    var btn_span = $('#' + btn_id).find("span");
    var change = btn_span.attr("change");
    var str='';
    if(isReport==0){
        _isReport=1;
        str="是否要将暂存ID为【" + storageID + "】的案件正式报案";
    }else{
        _isReport=0;
        str="是否要将暂存ID为【" + storageID + "】的案件改为非正式报案";
    }
    Ext.MessageBox.confirm("提示", str, function (btn) {
        if (btn == "yes") {
            Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
            Ext.Ajax.request({
                url: '../api/ManageService/ReportCase',
                params: {
                    storageID: storageID,
                    isReport:_isReport,
                    RandomTag: Math.random()
                },
                method: 'Post',
                success: function (response, options) {
                    Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                    var result = Ext.JSON.decode(response.responseText);
                    if (result.code == 200) {
                        Ext.getStore('CaseStore').reload();
                    }
                    else {
                        Ext.MessageBox.alert('提示', result.msg);
                    }
                },
                failure: function (response, options) {
                    Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                    Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
                }
            });
        }
    });

    //if (isReport == 0) {//非正式报案
    //    Ext.MessageBox.confirm("提示", str, function (btn) {
    //        if (btn == "yes") {
    //            Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
    //            Ext.Ajax.request({
    //                url: '../api/ManageService/ReportCase',
    //                params: {
    //                    storageID: storageID,
    //                    isReport:1,
    //                    RandomTag: Math.random()
    //                },
    //                method: 'Post',
    //                success: function (response, options) {
    //                    Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
    //                    var result = Ext.JSON.decode(response.responseText);
    //                    if (result.code == 200) {
    //                        Ext.getStore('CaseStore').reload();
    //                    }
    //                    else {
    //                        Ext.MessageBox.alert('提示', result.msg);
    //                    }
    //                },
    //                failure: function (response, options) {
    //                    Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
    //                    Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
    //                }
    //            });
    //        }
    //    });
    //} else {//正式报案
    //    Ext.MessageBox.confirm("提示", , function (btn) {
    //        if (btn == "yes") {
    //            Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
    //            Ext.Ajax.request({
    //                url: '../api/ManageService/ReportCase',
    //                params: {
    //                    storageID: storageID,
    //                    isReport:0,
    //                    RandomTag: Math.random()
    //                },
    //                method: 'Post',
    //                success: function (response, options) {
    //                    //debugger;
    //                    Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
    //                    var result = Ext.JSON.decode(response.responseText);
    //                    if (result.code == 200) {
    //                        Ext.getStore('CaseStore').reload();
    //                    }
    //                    else {
    //                        Ext.MessageBox.alert('提示', result.msg);
    //                    }
    //                },
    //                failure: function (response, options) {
    //                    Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
    //                    Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
    //                }
    //            });
    //        }
    //    });
    //}
}
// 修改密码
function ChangePwd() {
    var win = Ext.create('ManagementSystem.view.ChangePwdWin', {
        title: '修改密码',
        titleAlign: 'left',
        listeners: {
            show: function () {

            }
        }
    });
    win.show();
}

function banBackSpace(e) {
    var ev = e || window.event;
    //各种浏览器下获取事件对象  
    var obj = ev.relatedTarget || ev.srcElement || ev.target || ev.currentTarget;
    //按下Backspace键  
    if (ev.keyCode == 8) {
        var tagName = obj.nodeName //标签名称  
        //如果标签不是input或者textarea则阻止Backspace  
        if (tagName != 'INPUT' && tagName != 'TEXTAREA') {
            return stopIt(ev);
        }
        var tagType = obj.type.toUpperCase();//标签类型  
        //input标签除了下面几种类型，全部阻止Backspace  
        if (tagName == 'INPUT' && (tagType != 'TEXT' && tagType != 'TEXTAREA' && tagType != 'PASSWORD')) {
            return stopIt(ev);
        }
        //input或者textarea输入框如果不可编辑则阻止Backspace  
        if ((tagName == 'INPUT' || tagName == 'TEXTAREA') && (obj.readOnly == true || obj.disabled == true)) {
            return stopIt(ev);
        }
    }
}
function stopIt(ev) {
    if (ev.preventDefault) {
        //preventDefault()方法阻止元素发生默认的行为  
        ev.preventDefault();
    }
    if (ev.returnValue) {
        //IE浏览器下用window.event.returnValue = false;实现阻止元素发生默认的行为  
        ev.returnValue = false;
    }
    return false;
}
//实现对字符码的截获，keypress中屏蔽了这些功能按键  
document.onkeypress = banBackSpace;
//对功能按键的获取  
document.onkeydown = banBackSpace;

// 侧边栏选中
function makeSelected(n) {
    var ss = Ext.getCmp('westPanelId').down('#policyTreePanel')

    var TreeArr = ss.getRootNode().childNodes;
    for (var k = 0, length = TreeArr.length; k < length; k++) {
        var treename = TreeArr[k].raw.name

            ;
        if (treename == n) {
            ss.getSelectionModel().select(ss.getRootNode().childNodes[k])
        }
    }

}

function GetComments(){
    Ext.getCmp('CaseDetailWin').down('#historyComment').show();
    Ext.getCmp('CaseDetailWin').down('#historyComment').removeAll();
    Ext.getCmp('CaseDetailWin').setWidth(780);
    Ext.getCmp('CaseDetailWin').down('#historyComment').add(Ext.widget({
        xtype: 'panel',
        region: 'east',
        border: false,
        width: 300,
        padding: 0,
        items: [
            {
                xtype: 'panel',
                id: 'titleId',
                border:false,
                bodyStyle:'overflow-y:auto;overflow-x:hidden',
                html: '<div style="height:330px;" id="dhtml"></div>'
            }
        ]
    }));

    var storageID=Ext.getCmp('CaseDetailWin').down('#storageID').getValue();
    Ext.Ajax.request({
        url:'../api/ManageService/GetComments',
        method:'Post',
        params:{
            storageID:storageID
        },
        success:function (response, options) {
            Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
            var result = Ext.JSON.decode(response.responseText);
            if (result.code == 200) {
                var data=result.data;
                var str='';
                if(data.length){
                    for(var i=0;i<data.length;i++){
                        var datai=data[i];
                        str += '<div class="container">' +
                            '<div class="item2">' + datai.commentsTime + '</div>' +
                            '<div class="item3">' + datai.commentsContent + '</div></div>';
                    }
                }
                Ext.getElementById('dhtml').innerHTML = str;

                //Ext.getCmp('CaseDetailWin').down('#historyComment').add(Ext.widget({
                //    items: [
                //        {
                //            xtype: 'panel',
                //            border:false,
                //            html: PublicObject.str
                //        }
                //    ]
                //}));
            }
            else {
                Ext.MessageBox.alert('提示', result.msg);
            }
        },
        failure:function (response, options) {
            Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
            Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
        }
    });
}
