
(function () {
    Ext.define('ManagementSystem.view.TaskdetailWin', {
        extend: 'Ext.window.Window',
        id: 'taskdetailwinId',
        xtype:'TaskDetailWin',
        width: 480,
        constrain: true,
        modal: true,
        constrainHeader: true,//true将窗口约束到可见区域，false不限制窗体头部位置
        items: [
            {
                xtype: 'form',
                border: false,
                itemId: 'frmClaimId',
                bodyCls: 'winPadding',
                layout: "column",
                defaults: { xtype: 'textfield',editable:false,readOnly:true, margin: '5 10 5 5', labelWidth:80,columnWidth:.5},
                items: [
                    { fieldLabel: '暂存ID',itemId: 'storageID', allowBlank: false },
                    { fieldLabel: '保单号',itemId: 'policyNo'},
                    { fieldLabel: '报案人', itemId: 'reportorname' },
                    { fieldLabel: '报案人电话', itemId: 'reportornumber' },
                    { fieldLabel: '联系人', itemId: 'contacts'},
                    { fieldLabel: '联系人电话', itemId: 'contactsPhone' },
                    { fieldLabel: '报案日期', itemId: 'reportdate' },
                    { fieldLabel: '报案时间', itemId: 'reporthour' },
                    { fieldLabel: '承保机构', itemId: 'institution' },
                    { fieldLabel: '被保险人', itemId: 'insurant' },
                    {
                        xtype:'combobox',
                        fieldLabel: '案件处理人',
                        itemId: 'caseHandler',
                        //allowBlank: false,
                        readOnly:false,
                        editable:false,
                        valueField:'id',
                        displayField:'realname',
                        value:'',
                        emptyText: "请选择",
                        queryMode: 'local',
                        store:'TaskUserStore'
                    },
                    { fieldLabel: '出险地点', itemId: 'outAddress' },
                    { fieldLabel: '出险经过', itemId: 'outProcess', columnWidth:1 }
                ],
                buttons: [
                    '->',
                    //{ text: '提交', itemId: 'btnEdit', hidden: true },
                    { text: '保存', itemId: 'btnEdit'},
                    {
                        text: '取消', itemId: 'btnCancel',listeners: {
                            click: function () {
                                Ext.getCmp('taskdetailwinId').destroy();
                            }
                        }
                    },
                    '->'
                ]
            }
        ]
    });
}.call(this));
