Ext.define('ManagementSystem.controller.PolicyContr', {
    extend: 'Ext.app.Controller',
    requires: [],
    stores: ['PolicyStore'],
    init: function () {
        this.control({
            'policyGridPanel': {
                'render': this.GetPolicy,
                cellclick: this.cellclickevent
            },
            'policyGridPanel #btnAdd': {
                'click': this.ShowPolicyWinAdd
            },
            'policyAddWin #btnCancel': {
                'click': function () {
                    Ext.getCmp('policyAddWinId').destroy();
                }
            },
            'policyAddWin #btnAdd': {
                'click': this.AddPolicy
            },
            'policyAddWin #btnEdit': {
                'click': this.EditPolicy
            }
        })
    },
    // 点击grid事件
    cellclickevent: function (thi, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        PublicObject.currentRecord = record.raw;
        // 修改保单
        if (e.getTarget().id == 'btnEdit') {
            var win = Ext.create('ManagementSystem.view.PolicyAddWin', {
                title: '修改',
                titleAlign: 'left',
                listeners: {
                    show: function () {
                        Ext.getCmp('policyAddWinId').down('#caseCode').setValue(record.raw.caseCode);
                        Ext.getCmp('policyAddWinId').down('#insurant').setValue(record.raw.insurant);
                        Ext.getCmp('policyAddWinId').down('#injuredCondition').setValue(record.raw.injuredCondition);
                    }
                }
            });
            Ext.getCmp('policyAddWinId').down('#btnEdit').show();
            win.show();
        }
        // 删除保单
        if (e.getTarget().id == 'btnDel') {
            Ext.MessageBox.confirm("提示", "<div style='width:300px;'>确定要将保单代码为【" + record.raw.caseCode + "】的保单删除吗?</div>", function (btn) {
                if (btn == "yes") {
                    Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
                    Ext.Ajax.request({
                        url: '../api/ManageService/DelPolicy',
                        params: {
                            id: PublicObject.currentRecord.id,
                            RandomTag: Math.random()
                        },
                        method: 'Post',
                        success: function (response, options) {
                            Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                            var result = Ext.JSON.decode(response.responseText);
                            if (result.code == 200) {
                                Ext.getStore('PolicyStore').reload();
                                Ext.MessageBox.alert('提示', '删除成功');
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
    },
    // 获取保单维护列表
    GetPolicy: function () {
        Ext.getCmp('mainViewPort').getEl().mask("请稍候...");
        var params = {
            RandomTag: Math.random()
        };
        var queryUrl = encodeURI('../api/ManageService/GetPolicy');
        Ext.getStore('PolicyStore').getProxy().url = queryUrl;
        Ext.getStore('PolicyStore').getProxy().extraParams = params;
        try {
            Ext.getStore("PolicyStore").currentPage = 1;
        } catch (e) {
        }
        Ext.getStore('PolicyStore').load();
        Ext.getCmp('mainViewPort').getEl().unmask();
    },
    // 新增窗口
    ShowPolicyWinAdd: function () {
        var win = Ext.create('ManagementSystem.view.PolicyAddWin', {
            title: '新增',
            titleAlign: 'left',
            listeners: {
                show: function () {

                }
            }
        });
        Ext.getCmp('policyAddWinId').down('#btnAdd').show();
        win.show();
    },
    // 新增保单
    AddPolicy: function () {
        var caseCode = Ext.getCmp('policyAddWinId').down('#caseCode').getValue().toUpperCase();
        var reg1 = /^[A-Z]{3}$/;
        if(caseCode=='' || caseCode==undefined || caseCode==null || !reg1.test(caseCode)){
            Ext.MessageBox.alert('提示', '保单号输入有误，请重新输入');
            return false;
        }
        var insurant = Ext.getCmp('policyAddWinId').down('#insurant').getValue();
        var injuredCondition = Ext.getCmp('policyAddWinId').down('#injuredCondition').getValue().rb;
        if(insurant!=''){
            if(!injuredCondition){
                Ext.MessageBox.alert('提示', '人伤条件为空，请勾选');
                return false;
            }
        }else{
            injuredCondition=0;
        }
        Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
        Ext.Ajax.request({
            url: '../api/ManageService/AddPolicy',
            params: {
                caseCode: caseCode,
                injuredCondition:injuredCondition,
                insurant:insurant,
                RandomTag: Math.random()
            },
            method: 'Post',
            success: function (response, options) {
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                var result = Ext.JSON.decode(response.responseText);
                if (result.code == 200) {
                    Ext.getCmp('policyAddWinId').destroy();
                    Ext.getStore('PolicyStore').reload();
                    Ext.MessageBox.alert('提示', '新增成功');
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
    },
    // 修改保单
    EditPolicy: function () {
        var insuranceNo = Ext.getCmp('policyAddWinId').down('#insuranceNo').getValue();
        var startTime = new Date($('#startTime').val().replace(/-/g, '/'));
        var endTime = new Date($('#endTime').val().replace(/-/g, '/'));
        var reg = /^[A-Z0-9]{22}$/;
        if (!reg.test(insuranceNo)) {
            Ext.MessageBox.alert('提示', '保单号输入有误，请重新输入')
            return false;
        }
        if (!$('#startTime').val()) {
            Ext.MessageBox.alert('提示', '请输入起保时间');
            return false;
        }
        if (!$('#endTime').val()) {
            Ext.MessageBox.alert('提示', '请输入终保时间');
            return false;
        }
        if (startTime.getTime() > endTime.getTime()) {
            Ext.MessageBox.alert('提示', '起保时间不能大于终保时间')
            return false;
        }
        if (endTime.getTime() < new Date().getTime()) {
            Ext.MessageBox.alert('提示', '该保单时间已过');
            return false;
        }
        Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
        Ext.Ajax.request({
            url: '../api/ManageService/EditPolicy',
            params: {
                id: PublicObject.currentRecord.id,
                insuranceNo: insuranceNo,
                startTime: startTime.getTime(),
                endTime: endTime.getTime(),
                userid: PublicObject.CurrentUser.id,
                username: PublicObject.CurrentUser.username,
                realname: PublicObject.CurrentUser.realname,
                RandomTag: Math.random()
            },
            method: 'Post',
            success: function (response, options) {
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                var result = Ext.JSON.decode(response.responseText);
                if (result.code == 200) {
                    Ext.getCmp('policyAddWinId').destroy();
                    Ext.getStore('PolicyStore').reload();
                    Ext.MessageBox.alert('提示', '修改成功');
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

