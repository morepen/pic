/**
 * Created by wjl on 2018/03/05.
 * 行程查询
 */
Ext.define('ManagementSystem.controller.CostStatistics', {
    extend: 'Ext.app.Controller',
    requires: [],
    stores: ['CaseStore','CostStore'],
    init: function () {
        this.control({
            'CalculateGridPanel': {
                'render': this.GetCalculate,
                cellclick: this.cellclickevent
            },
            'CalculateGridPanel #btnsearch': {
                'click': this.GetCalculate
            },
            'CalculateGridPanel #btnexport': {
                'click': this.ExportCalculate
            }
            //,
            // 'TaskAddWin #btnCancel': {
            //     'click': function () {
            //         Ext.getCmp('policyAddWinId').destroy();
            //     }
            // },
            // 'TaskAddWin #btnAdd': {
            //     'click': this.AddPolicy
            // },
            // 'TaskAddWin #btnEdit': {
            //     'click': this.EditPolicy
            // }
        })
    },
    // 点击grid事件
    cellclickevent: function (thi, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        if (e.getTarget().id == 'btnDetail01') {
            PublicObject.currentRecord = record.raw;

            Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
            Ext.Ajax.request({
                url: '../api/ManageService/GetComments',
                params: {
                    storageID:PublicObject.currentRecord.storageID,
                    RandomTag: Math.random()
                },
                method: 'Post',
                success: function (response) {
                    Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                    var result = Ext.JSON.decode(response.responseText);
                    if (result.code == 200) {
                        var data=result.data;
                        if(data.length){
                            var str='';
                            for(var i=0;i<data.length;i++){
                                var datai=data[i];
                                str += '<div class="container">' +
                                    '<div class="item2">' + datai.commentsTime + '</div>' +
                                    '<div class="item3">' + datai.commentsContent + '</div></div>';
                            }
                        }
                        PublicObject.str=str;

                        var win = Ext.create('ManagementSystem.view.RemarkWin', {
                            title: '留言内容',
                            titleAlign: 'left',
                            border:false,
                            items: [
                                {
                                    xtype: 'panel',
                                    border:false,
                                    html: PublicObject.str
                                }
                            ],
                            listeners: {
                                show: function () {

                                }
                            }
                        });
                        win.show();
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
    },
    // 获取数据清单
    GetCalculate: function () {
        Ext.getCmp('mainViewPort').getEl().mask("请稍候...");
        var reportdate1=Ext.getCmp('CalculateGridPanelId').down('#reportdate1').rawValue;
        var reportdate2=Ext.getCmp('CalculateGridPanelId').down('#reportdate2').rawValue;
        var storageday_1=Ext.getCmp('CalculateGridPanelId').down('#storageday1').rawValue;
        var storageday_2=Ext.getCmp('CalculateGridPanelId').down('#storageday2').rawValue;
        var storageday1=storageday_1.replace(/-/g,'');
        var storageday2=storageday_2.replace(/-/g,'');
        var operatetimeforhis1=Ext.getCmp('CalculateGridPanelId').down('#operatetimeforhis1').rawValue;
        var operatetimeforhis2=Ext.getCmp('CalculateGridPanelId').down('#operatetimeforhis2').rawValue;
        var storageID=Ext.getCmp('CalculateGridPanelId').down('#storageID').getValue();
        var policyNo=Ext.getCmp('CalculateGridPanelId').down('#policyNo').getValue();
        var handleState=Ext.getCmp('CalculateGridPanelId').down('#handleState').getValue();
        if(handleState==-2){
            handleState='';
        }
        var params = {
            reportdate1:reportdate1,
            reportdate2:reportdate2,
            storageday1:storageday1,
            storageday2:storageday2,
            operatetimeforhis1:operatetimeforhis1,
            operatetimeforhis2:operatetimeforhis2,
            storageID:storageID,
            policyNo:policyNo,
            handleState:handleState,
            RandomTag: Math.random()
        };
        var queryUrl = encodeURI('../api/ManageService/GetCalculate');
        Ext.getStore('CaseStore').getProxy().url = queryUrl;
        Ext.getStore('CaseStore').getProxy().extraParams = params;
        try {
            Ext.getStore("CaseStore").currentPage = 1;
        } catch (e) {
        }
        Ext.getStore('CaseStore').load();
        Ext.getCmp('mainViewPort').getEl().unmask();
    },
    ExportCalculate:function(){
        var selectData = Ext.getCmp('CalculateGridPanelId').getSelectionModel().getSelection();
        var reportdate1=Ext.getCmp('CalculateGridPanelId').down('#reportdate1').rawValue;
        var reportdate2=Ext.getCmp('CalculateGridPanelId').down('#reportdate2').rawValue;
        var storageday_1=Ext.getCmp('CalculateGridPanelId').down('#storageday1').rawValue;
        var storageday_2=Ext.getCmp('CalculateGridPanelId').down('#storageday2').rawValue;
        var storageday1=storageday_1.replace(/-/g,'');
        var storageday2=storageday_2.replace(/-/g,'');
        var operatetimeforhis1=Ext.getCmp('CalculateGridPanelId').down('#operatetimeforhis1').rawValue;
        var operatetimeforhis2=Ext.getCmp('CalculateGridPanelId').down('#operatetimeforhis2').rawValue;
        var storageID=Ext.getCmp('CalculateGridPanelId').down('#storageID').getValue();
        var policyNo=Ext.getCmp('CalculateGridPanelId').down('#policyNo').getValue();
        var handleState=Ext.getCmp('CalculateGridPanelId').down('#handleState').getValue();
        if(handleState==-2){
            handleState='';
        }
        var date = new Date();
        var filename = PublicObject.CurrentUser.realname + "_数据清单" + formatDate(date, "yyyyMMddhhmmss");
        Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩

        var selectDataArr=[];
        if(selectData.length!=0){
            for(var i=0;i<selectData.length;i++){
                selectDataArr.push(selectData[i].raw);
            }
        }
        selectDataArr=JSON.stringify(selectDataArr);
        var params = {
            selectDataArr:selectDataArr,
            reportdate1:reportdate1,
            reportdate2:reportdate2,
            storageday1:storageday1,
            storageday2:storageday2,
            operatetimeforhis1:operatetimeforhis1,
            operatetimeforhis2:operatetimeforhis2,
            storageID:storageID,
            policyNo:policyNo,
            handleState:handleState,
            filename:filename,
            RandomTag: Math.random()
        };
        Ext.Ajax.request({
            method:'post',
            url:'../api/ManageService/ExportCalculate',
            params:params,
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
            failurt:function(response){
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
            }
        })
    }
});

