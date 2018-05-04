Ext.define('ManagementSystem.controller.ViewportContr', {
    extend: 'Ext.app.Controller',
    stores: [],
    init: function () {
        this.control({
            '#mainViewPort': {
                'render': function () {
                    this.UserCheck();
                }
            },
            'changePwdWin #btnConfirm': {
                'click': this.ChangePwd
            }
        });
    },
    UserCheck: function () {
        // debugger;
        Ext.getCmp('mainViewPort').getEl().mask("正在获取用户信息，请稍候");//遮罩
        Ext.Ajax.request({
            url: '../api/ManageService/UserCheck',
            params: {
                RandomTag: Math.random()
            },
            method: 'Post',
            success: function (response, options) {
                debugger;
                Ext.getCmp('mainViewPort').getEl().unmask();//取消遮罩
                var result = Ext.JSON.decode(response.responseText);
                if (!result.data) {
                    // Ext.MessageBox.alert("提示", result.msg);
                    window.location.href = "/";
                }
                else {
                    PublicObject.CurrentUser = result.data;
                    PublicObject.currentButton = 1;
                    document.getElementById('divUserInfo').innerHTML = "" +
                        '<br />' +
                        '<span style="font-size: 18px;margin: 2px;color:#fff;">欢迎登录,</span>' +
                        '<span style="font-size: 18px;margin: 2px;color:#fff;">' + result.data.realname + '</span>' +
                        '<button type="button" onclick="UserCheckOut()" style="width:50px;height:26px;position:absolute;background:#5ea593 url(../images/quit.png) center center no-repeat;bottom:8px;right:24px;font-size:14px;border:0;color:#fff;cursor:pointer;"></button>' +
                        '<span onclick="ChangePwd()" style="height:24px;position:absolute;bottom:5px;right:83px;font-size:14px;border:0;color:#fff;cursor:pointer;">修改密码</button>';
                    var westPanelId = Ext.getCmp("westPanelId");
                    var systemTreePanel = westPanelId.down("#systemTreePanel");
                    var nodes = [];

                    if(result.data.frontrole==1){
                        nodes = [
                            {
                                text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>人员管理</span>", name: 11,leaf: true,iconCls:'user-icon',itemId: 'usericon'
                            },
                            {
                                text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>保单规则设置</span>", name: 12, leaf: true,iconCls:'policy-icon',itemId: 'policyicon'
                            }
                        ];
                    }else if(result.data.frontrole==2){
                        nodes = [
                            {
                                text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>任务调度</span>", name: 13, leaf: true,iconCls:'task-icon',itemId: 'taskicon'
                            },
                            {
                                text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>数据清单</span>", name: 14, leaf: true,iconCls:'calculate-icon',itemId: 'calculateicon'
                            }
                        ];
                    }else if(result.data.frontrole==3){
                        nodes = [
                            {
                                text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>案件处理</span>", name: 15, leaf: true,iconCls:'case-icon',itemId: 'caseicon'
                            },
                            {
                                text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>数据清单</span>", name: 14, leaf: true,iconCls:'calculate-icon',itemId: 'calculateicon'
                            }
                        ];
                    }
                    //else{
                    //    nodes = [
                    //        {
                    //            text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>人员管理</span>", name: 11,leaf: true,iconCls:'user-icon',itemId: 'usericon'
                    //        },
                    //        {
                    //            text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>保单规则设置</span>", name: 12, leaf: true,iconCls:'policy-icon',itemId: 'policyicon'
                    //        },
                    //        {
                    //            text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>任务调度</span>", name: 13, leaf: true,iconCls:'task-icon',itemId: 'taskicon'
                    //        },
                    //        {
                    //            text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>案件处理</span>", name: 15, leaf: true,iconCls:'case-icon',itemId: 'caseicon'
                    //        },
                    //        {
                    //            text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>数据清单</span>", name: 14, leaf: true,iconCls:'calculate-icon',itemId: 'calculateicon'
                    //        }
                    //    ];
                    //}
                    systemTreePanel.getRootNode().appendChild(nodes);
                }
            },
            failure: function (response, options) {
                Ext.getCmp('mainViewPort').getEl().unmask();//取消遮罩
                Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
                window.location.href = "/";
            }
        });
    },
    ChangePwd: function () {
        var oldPwd = Ext.getCmp('changePwdWinId').down('#oldPwd').getValue();
        var newPwd = Ext.getCmp('changePwdWinId').down('#newPwd').getValue();
        var confirmPwd = Ext.getCmp('changePwdWinId').down('#confirmPwd').getValue();
        if (!Ext.getCmp('changePwdWinId').down('#frmClaimId').isValid()) {
            Ext.Msg.alert('提示', '必填项不能为空');
            return false;
        }
        if (newPwd !== confirmPwd) {
            Ext.Msg.alert('提示', '您输入的新密码与确认密码不一致');
            return false;
        }
        var params = {
            id: PublicObject.CurrentUser.id,
            oldPwd: hex_md5(oldPwd),
            newPwd: hex_md5(newPwd),
            RandomTag: Math.random()
        };
        Ext.getCmp('mainViewPort').getEl().mask("请稍候...");
        Ext.Ajax.request({
            url: '../api/Public/ChangePwd',
            method: 'post',
            params: params,
            success: function (response, options) {
                Ext.getCmp('mainViewPort').getEl().unmask();
                var rspText = Ext.JSON.decode(response.responseText);
                if (rspText.code == 200) {
                    Ext.getCmp('changePwdWinId').destroy();
                    Ext.Msg.alert('提示', '密码修改成功');
                }
                else {
                    Ext.Msg.alert('提示', rspText.msg);
                }
            }
        });
    },
});