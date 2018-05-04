/**
 * Created by wjl on 2018/03/05.
 * 行程查询
 */
Ext.define('ManagementSystem.controller.CaseContr', {
    extend: 'Ext.app.Controller',
    requires: [],
    stores: ['CaseStore'],
    init: function () {
        this.control({
            'CaseGridPanel': {
                render: function(){
                    this.ShowCaseGrid(0);
                },
                cellclick:this.cellclickevent
            },
            'CaseGridPanel #casestate0': {
                'click':function(){
                    Ext.getCmp('CaseGridPanelId').down('#time').setValue(1);
                    this.ShowCaseGrid(0);//未处理任务
                }
            },
            'CaseGridPanel #casestate1': {
                'click': function(){
                    Ext.getCmp('CaseGridPanelId').down('#time').setValue(1);
                    this.ShowCaseGrid(1);//处理中任务
                }
            },
            'CaseGridPanel #casestate2': {
                'click':function(){
                    Ext.getCmp('CaseGridPanelId').down('#time').setValue(1);
                    this.ShowCaseGrid(2);//已处理任务
                }
            },
            'CaseGridPanel #casestate3': {
                'click': function(){
                    Ext.getCmp('CaseGridPanelId').down('#time').setValue(1);
                    this.ShowCaseGrid(-1);//已注销任务
                }
            },
            'CaseGridPanel #btnsearch': {
                'click': function(){
                    this.ShowCaseGrid(PublicObject.state);
                }
            },
            'CaseDetailWin #btnSaveCase': {
                 'click': function(){
                     this.CaseSave()
                 }
            },
            'CaseDetailWin #btnSendMessage': {//发送短信
                 'click': function(){
                     this.SendMessage()
                 }
            },
            //'CaseDetailWin #btnReportCase': {//正式报案
            //     'click': function(){
            //         this.ReportCase()
            //     }
            //},
            //'CaseDetailWin #btnLogoutCase': {//注销报案
            //     'click': function(){
            //         this.LogoutCase()
            //     }
            //},
            'SendMessageWin #btnSend':{
                'click':function(){
                    this.SaveMessage();
                }
            }
        })
    },
    // 点击grid事件
    cellclickevent: function (thi, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        if (e.getTarget().id == 'btnEdit') {
            PublicObject.currentRecord = record.raw;
            var win = Ext.create('ManagementSystem.view.CaseDetailWin', {
                listeners: {
                    show: function () {
                        Ext.getCmp('CaseDetailWin').down('#caseCenterId').setTitle("案件处理");
                        Ext.getCmp('CaseDetailWin').down('#storageID').setValue(record.raw.storageID);
                        Ext.getCmp('CaseDetailWin').down('#policyNo').setValue(record.raw.policyNo);
                        Ext.getCmp('CaseDetailWin').down('#reporter').setValue(record.raw.reporter);
                        Ext.getCmp('CaseDetailWin').down('#reporterPhone').setValue(record.raw.reporterPhone);
                        Ext.getCmp('CaseDetailWin').down('#contacts').setValue(record.raw.contacts);
                        Ext.getCmp('CaseDetailWin').down('#contactsPhone').setValue(record.raw.contactsPhone);
                        Ext.getCmp('CaseDetailWin').down('#reportdate').setValue(record.raw.reportdate);
                        Ext.getCmp('CaseDetailWin').down('#reporthour').setValue(record.raw.reporthour);
                        Ext.getCmp('CaseDetailWin').down('#institution').setValue(record.raw.institution);
                        Ext.getCmp('CaseDetailWin').down('#insurant').setValue(record.raw.insurant);
                        Ext.getCmp('CaseDetailWin').down('#outAddress').setValue(record.raw.outAddress);
                        Ext.getCmp('CaseDetailWin').down('#handleState').setValue(record.raw.handleState);
                        Ext.getCmp('CaseDetailWin').down('#outProcess').setValue(record.raw.outProcess);
                        Ext.getCmp('CaseDetailWin').down('#evaluateMoney').setValue(record.raw.evaluateMoney);
                        Ext.getCmp('CaseDetailWin').down('#isReport').setValue(record.raw.isReport);
                    }
                }
            });
            win.show();
        }
        if (e.getTarget().id == 'btnDetail') {
            PublicObject.currentRecord = record.raw;
            var win = Ext.create('ManagementSystem.view.CaseDetailWin', {
                listeners: {
                    show: function () {
                        Ext.getCmp('CaseDetailWin').down('#caseCenterId').setTitle("案件详情");
                        Ext.getCmp('CaseDetailWin').down('#btnSendMessage').hide(true);
                        //Ext.getCmp('CaseDetailWin').down('#btnReportCase').hide(true);
                        //Ext.getCmp('CaseDetailWin').down('#btnLogoutCase').hide(true);
                        Ext.getCmp('CaseDetailWin').down('#btnSaveCase').hide(true);
                        Ext.getCmp('CaseDetailWin').down('#storageID').setValue(record.raw.storageID);
                        Ext.getCmp('CaseDetailWin').down('#policyNo').setValue(record.raw.policyNo);
                        Ext.getCmp('CaseDetailWin').down('#reporter').setValue(record.raw.reporter);
                        Ext.getCmp('CaseDetailWin').down('#reporterPhone').setValue(record.raw.reporterPhone);
                        Ext.getCmp('CaseDetailWin').down('#contacts').setValue(record.raw.contacts);
                        Ext.getCmp('CaseDetailWin').down('#contactsPhone').setValue(record.raw.contactsPhone);
                        Ext.getCmp('CaseDetailWin').down('#reportdate').setValue(record.raw.reportdate);
                        Ext.getCmp('CaseDetailWin').down('#reporthour').setValue(record.raw.reporthour);
                        Ext.getCmp('CaseDetailWin').down('#institution').setValue(record.raw.institution);
                        Ext.getCmp('CaseDetailWin').down('#insurant').setValue(record.raw.insurant);
                        Ext.getCmp('CaseDetailWin').down('#handleState').setReadOnly(true);
                        Ext.getCmp('CaseDetailWin').down('#handleState').setValue(record.raw.handleState);
                        Ext.getCmp('CaseDetailWin').down('#outAddress').setValue(record.raw.outAddress);
                        Ext.getCmp('CaseDetailWin').down('#outProcess').setValue(record.raw.outProcess);
                        Ext.getCmp('CaseDetailWin').down('#evaluateMoney').setReadOnly(true);
                        Ext.getCmp('CaseDetailWin').down('#evaluateMoney').setValue(record.raw.evaluateMoney);
                        Ext.getCmp('CaseDetailWin').down('#comment').setReadOnly(true);
                        Ext.getCmp('CaseDetailWin').down('#isReport').setReadOnly(true);
                        Ext.getCmp('CaseDetailWin').down('#isReport').setValue(record.raw.isReport);
                    }
                }
            });
            win.show();
        }
    },
    ShowCaseGrid:function(state){
        PublicObject.state=state;
        $('.penCase').removeClass('active');
        $('.penCase').eq(state).addClass('active');
        if(state == 2 || state == -1){
            Ext.getCmp('CaseGridPanelId').down('#isReport').hide(true);
        }else{
            Ext.getCmp('CaseGridPanelId').down('#isReport').show();
        }
        Ext.getCmp('mainViewPort').getEl().mask("请稍候...");
        var time=Ext.getCmp('CaseGridPanelId').down('#time').getValue();
        var params = {
            time:time,//先取一个月内，需要加一个下拉框动态选择
            handleState:state,
            RandomTag: Math.random()
        };
        var queryUrl = encodeURI('../api/ManageService/GetCase');
        Ext.getStore('CaseStore').getProxy().url = queryUrl;
        Ext.getStore('CaseStore').getProxy().extraParams = params;
        try {
            Ext.getStore("CaseStore").currentPage = 1;
        } catch (e) {
        }
        Ext.getStore('CaseStore').load();
        Ext.getCmp('mainViewPort').getEl().unmask();
    },
    //案件处理保存
    CaseSave: function() {
        var storageID=Ext.getCmp('CaseDetailWin').down('#storageID').getValue();
        var comment=Ext.getCmp('CaseDetailWin').down('#comment').getValue();
        var handleState=Ext.getCmp('CaseDetailWin').down('#handleState').getValue();
        var isReport=Ext.getCmp('CaseDetailWin').down('#isReport').getValue();
        debugger;
        var case_state=0;//报案状态
        if(handleState==2){//案件状态如果置为已处理，则案件状态为已报案
            case_state=1;
        }
        var evaluateMoney=Ext.getCmp('CaseDetailWin').down('#evaluateMoney').getValue();
        var reg=/^[1-9]\d*(\.\d+)?$/;
        if(evaluateMoney==''){

        }else{
            if(!reg.test(evaluateMoney)){
               return Ext.MessageBox.alert('提示', '估损金额输入错误');
            }
        }
        Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
        Ext.Ajax.request({
            url: '../api/ManageService/HandleCase',
            params: {
                storageID: storageID,
                comment: comment,
                evaluateMoney: evaluateMoney,
                handleState: handleState,
                isReport:isReport,
                case_state: case_state,
                RandomTag: Math.random()
            },
            method: 'Post',
            success: function (response, options) {
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                var result = Ext.JSON.decode(response.responseText);
                if (result.code == 200) {
                    Ext.getCmp('CaseDetailWin').destroy();
                    Ext.getStore('CaseStore').reload();
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
    },
    SendMessage:function(){
        var win = Ext.create('ManagementSystem.view.SendMessageWin', {
            listeners: {
                show: function () {

                }
            }
        });
        win.show();
    },
    SaveMessage:function(){
        var telephone=Ext.getCmp('SendMessageWin').down('#telePhoneId').getValue();
        var content=Ext.getCmp('SendMessageWin').down('#messageId').getValue();
        Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
        Ext.Ajax.request({
            url:'../api/ManageService/SendMessage',
            params:{
                telephone:telephone,
                content:content,
                smstype:1,
                storageID:PublicObject.currentRecord.storageID,
                RandomTag: Math.random()
            },
            method:'Post',
            success:function(response){
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                var result = Ext.JSON.decode(response.responseText);
                if (result.code == 200) {
                    Ext.getCmp('SendMessageWin').destroy();
                    Ext.MessageBox.alert('提示', '发送成功');
                }
                else {
                    Ext.MessageBox.alert('提示', result);
                }
            },
            failure:function(response){
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
            }
        })

    },
    ReportCase:function(){
        var storageID=Ext.getCmp('CaseDetailWin').down('#storageID').getValue();
        Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
        Ext.Ajax.request({
            url: '../api/ManageService/ReportCase',
            params: {
                storageID: storageID,
                case_state: 1,
                RandomTag: Math.random()
            },
            method: 'Post',
            success: function (response, options) {
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                var result = Ext.JSON.decode(response.responseText);
                if (result.code == 200) {
                    Ext.getCmp('CaseDetailWin').destroy();
                    Ext.MessageBox.alert('提示', '报案成功');
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
    LogoutCase:function(){
        var storageID=Ext.getCmp('CaseDetailWin').down('#storageID').getValue();
        Ext.MessageBox.confirm('确认','确定注销此案件？',function(btn){
            if(btn=='yes'){
                Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
                Ext.Ajax.request({
                    url: '../api/ManageService/LogoutCase',
                    params: {
                        storageID: storageID,
                        handleState: -1,
                        RandomTag: Math.random()
                    },
                    method: 'Post',
                    success: function (response, options) {
                        Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                        var result = Ext.JSON.decode(response.responseText);
                        if (result.code == 200) {
                            Ext.getStore('CaseStore').reload();
                            Ext.getCmp('CaseDetailWin').destroy();
                            Ext.MessageBox.alert('提示', '注销报案成功');
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
});

