/**
 * Created by wjl on 2018/03/05.
 * 行程查询
 */
Ext.define('ManagementSystem.controller.TaskContr', {
    extend: 'Ext.app.Controller',
    requires: ['ManagementSystem.view.TaskdetailWin'],
    stores: ['TaskStore','TaskUserStore'],
    init: function () {
        this.control({
            'TaskGridPanel': {
               'render': this.GetTask,
                cellclick: this.cellclickevent
            },
            //'TaskGridPanel #btnAdd': {
            //    'click': this.ShowTaskWinAdd
            //},
            'TaskGridPanel #taskstate0': {
                'click':function(){
                    this.ShowTaskGrid(0); //未调度
                }
            },
            'TaskGridPanel #taskstate1': {
                'click': function(){
                    this.ShowTaskGrid(1); //已调度
                }
            },
            'TaskGridPanel #btnexport': {
                'click': function(){
                    this.ExportTasks(); //导出
                }
            },
            'TaskDetailWin #btnEdit': {
                'click':function(){
                    this.SaveTask();
                }
            }
        })
    },
    // 获取未调度任务
    GetTask: function () {
        Ext.getCmp('mainViewPort').getEl().mask("请稍候...");
        var changeState=0;
        var params = {
            changeState:changeState,
            RandomTag: Math.random()
        };
        var queryUrl = encodeURI('../api/ManageService/GetTask');
        Ext.getStore('TaskStore').getProxy().url = queryUrl;
        Ext.getStore('TaskStore').getProxy().extraParams = params;
        try {
            Ext.getStore("TaskStore").currentPage = 1;
        } catch (e) {
        }
        Ext.getStore('TaskStore').load();
        Ext.getCmp('mainViewPort').getEl().unmask();
    },
    ShowTaskGrid:function(state){
        $('.penBtn').removeClass('active');
        $('.penBtn:eq('+state+')').addClass('active');
        var caseHandler=Ext.getCmp('TaskGridPanelId').down('#caseHandler');
        if(state==1){
            caseHandler.show();
        }else{
            caseHandler.hide();
        }
        Ext.getCmp('mainViewPort').getEl().mask("请稍候...");
        var params = {
            changeState:state,
            RandomTag: Math.random()
        };
        var queryUrl = encodeURI('../api/ManageService/GetTask');
        Ext.getStore('TaskStore').getProxy().url = queryUrl;
        Ext.getStore('TaskStore').getProxy().extraParams = params;
        try {
            Ext.getStore("TaskStore").currentPage = 1;
        } catch (e) {
        }
        Ext.getStore('TaskStore').load();
        Ext.getCmp('mainViewPort').getEl().unmask();
    },
    // 点击grid事件
    cellclickevent: function (thi, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        // 点击调度
        if (e.getTarget().id == 'btnEdit') {
            PublicObject.currentRecord = record.raw;

            var queryUrl = encodeURI('../api/ManageService/GetTaskUser');
            Ext.getStore('TaskUserStore').getProxy().url = queryUrl;
            Ext.getStore('TaskUserStore').load();

            var win = Ext.create('ManagementSystem.view.TaskdetailWin', {
                title: '调度',
                titleAlign: 'left',
                listeners: {
                    show: function () {
                        Ext.getCmp('taskdetailwinId').down('#storageID').setValue(record.raw.storageID);
                        Ext.getCmp('taskdetailwinId').down('#policyNo').setValue(record.raw.policyNo);
                        Ext.getCmp('taskdetailwinId').down('#reportorname').setValue(record.raw.reportorname);
                        Ext.getCmp('taskdetailwinId').down('#reportornumber').setValue(record.raw.reportornumber);
                        Ext.getCmp('taskdetailwinId').down('#contacts').setValue(record.raw.contacts);
                        Ext.getCmp('taskdetailwinId').down('#contactsPhone').setValue(record.raw.contactsPhone);
                        Ext.getCmp('taskdetailwinId').down('#reportdate').setValue(record.raw.reportdate);
                        Ext.getCmp('taskdetailwinId').down('#reporthour').setValue(record.raw.reporthour);
                        Ext.getCmp('taskdetailwinId').down('#institution').setValue(record.raw.institution);
                        Ext.getCmp('taskdetailwinId').down('#insurant').setValue(record.raw.insurant);
                        //Ext.getCmp('taskdetailwinId').down('#caseHandler').setValue(record.raw.caseHandler);
                        if(record.raw.caseHandler){
                            Ext.getCmp('taskdetailwinId').down('#caseHandler').setValue(record.raw.caseHandler_id);
                            //Ext.getCmp('taskdetailwinId').down('#caseHandler').setRawValue(record.raw.caseHandler);
                        }
                        Ext.getCmp('taskdetailwinId').down('#outAddress').setValue(record.raw.outAddress);
                        Ext.getCmp('taskdetailwinId').down('#outProcess').setValue(record.raw.outProcess);
                        //Ext.getCmp('taskdetailwinId').down('#caseHandlerRole').setValue(record.raw.caseHandlerRole);
                    }
                }
            });
            win.show();
        }else if(e.getTarget().id == 'btnDetail'){
            var win = Ext.create('ManagementSystem.view.TaskdetailWin', {
                title: '详情',
                titleAlign: 'left',
                listeners: {
                    show: function () {
                        Ext.getCmp('taskdetailwinId').down('#btnEdit').hide(true);
                        Ext.getCmp('taskdetailwinId').down('#storageID').setValue(record.raw.storageID);
                        Ext.getCmp('taskdetailwinId').down('#policyNo').setValue(record.raw.policyNo);
                        Ext.getCmp('taskdetailwinId').down('#reporter').setValue(record.raw.reporter);
                        Ext.getCmp('taskdetailwinId').down('#reporterPhone').setValue(record.raw.reporterPhone);
                        Ext.getCmp('taskdetailwinId').down('#contacts').setValue(record.raw.contacts);
                        Ext.getCmp('taskdetailwinId').down('#contactsphone').setValue(record.raw.contactsphone);
                        Ext.getCmp('taskdetailwinId').down('#reportdate').setValue(record.raw.reportdate);
                        Ext.getCmp('taskdetailwinId').down('#reporthour').setValue(record.raw.reporthour);
                        Ext.getCmp('taskdetailwinId').down('#institution').setValue(record.raw.institution);
                        Ext.getCmp('taskdetailwinId').down('#insurant').setValue(record.raw.insurant);
                        Ext.getCmp('taskdetailwinId').down('#caseHandler').setReadOnly(true);
                        Ext.getCmp('taskdetailwinId').down('#caseHandler').setValue(record.raw.caseHandler);
                        Ext.getCmp('taskdetailwinId').down('#outAddress').setValue(record.raw.outAddress);
                        Ext.getCmp('taskdetailwinId').down('#outProcess').setValue(record.raw.outProcess);
                        //Ext.getCmp('taskdetailwinId').down('#caseHandlerRole').setValue(record.raw.caseHandlerRole);
                    }
                }
            });
            win.show();
        }
    },
    //// 调度窗口
    //ShowTaskWinAdd: function () {
    //    var win = Ext.create('ManagementSystem.view.TaskdetailWin', {
    //        title: '新增',
    //        titleAlign: 'left',
    //        listeners: {
    //            show: function () {
    //
    //            }
    //        }
    //    });
    //    Ext.getCmp('TaskdetailWinId').down('#btnAdd').show();
    //    win.show();
    //    Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
    //    Ext.Ajax.request({
    //        url: '../api/ManageService/GetMaxEndTime',
    //        params: {
    //            RandomTag: Math.random()
    //        },
    //        method: 'Post',
    //        success: function (response, options) {
    //            Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
    //            var result = Ext.JSON.decode(response.responseText);
    //            if (result.code == 200) {
    //                PublicObject.MaxEndTime = result.data[0].maxEndTime;
    //                var startTime = new Date(PublicObject.MaxEndTime * 1);
    //                var endTime = new Date(PublicObject.MaxEndTime * 1);
    //                endTime = new Date(endTime.setFullYear(endTime.getFullYear() + 1) * 1);
    //                // Ext.getCmp('policyAddWinId').down('#startTime').setValue(startTime);
    //                // Ext.getCmp('policyAddWinId').down('#endTime').setValue(endTime);
    //                $('#startTime').val(formatDate(startTime, 'yyyy-MM-dd hh:mm:ss'));
    //                $('#endTime').val(formatDate(endTime, 'yyyy-MM-dd hh:mm:ss'));
    //            }
    //            else {
    //                Ext.MessageBox.alert('提示', result.msg);
    //            }
    //        },
    //        failure: function (response, options) {
    //            Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
    //            Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
    //        }
    //    });
    //},
    //保存任务调度
    SaveTask:function(){
        var caseHandler_id=Ext.getCmp('taskdetailwinId').down('#caseHandler').getValue();
        var caseHandler=Ext.getCmp('taskdetailwinId').down('#caseHandler').rawValue;
        if(caseHandler_id==''||caseHandler_id==null||caseHandler_id==undefined){
            Ext.MessageBox.alert('提示','请选择案件处理人');
            return;
        }
        Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
        Ext.Ajax.request({
            url: '../api/ManageService/ChangeTask',
            params: {
                id:PublicObject.currentRecord.id,
                yardman_id: PublicObject.CurrentUser.id,
                yardman: PublicObject.CurrentUser.realname,
                caseHandler_id:caseHandler_id,
                caseHandler:caseHandler,
                RandomTag: Math.random()
            },
            method: 'Post',
            success: function (response, options) {
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                var result = Ext.JSON.decode(response.responseText);
                if (result.code == 200) {
                    Ext.getCmp('taskdetailwinId').destroy();
                    Ext.getStore('TaskStore').reload();
                    Ext.MessageBox.alert('提示', '调度成功');
                } else {
                    Ext.MessageBox.alert('提示', result.code.msg);
                }
            },
            failure: function (response, options) {
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
            }
        });
    },
    ExportTasks:function(){
        Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
        var filename=PublicObject.CurrentUser.realname+'_需报案任务-'+formatDate(new Date(),'yyyyMMddhhmmss');
        Ext.Ajax.request({
            url:'../api/ManageService/ExportReportTasks',
            method:'Post',
            params:{
                filename:filename,
                RandomTag: Math.random()
            },
            success:function(response){
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                var result = Ext.JSON.decode(response.responseText);
                if (result.code == 200) {
                    var data = result.data;
                    Ext.MessageBox.confirm('确认', '是否确定导出excel文件', function (btn) {
                        if (btn == 'yes') {
                            window.open('../' + data);
                        }
                    });
                } else {
                    Ext.MessageBox.alert("抱歉", "下载链接获取错误，请刷新页面后重试");
                }
            },
            failure:function(response){
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
            }
        });
    }
});

