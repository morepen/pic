
(function () {
    Ext.define('ManagementSystem.view.CaseAddWin', {
        extend: 'Ext.window.Window',
        id: 'CaseAddWinId',
        xtype: 'CaseAddWin',
        width: 480,
        height:410,
        //closable:true,
        //title:'案件处理',
        modal: true,
        plain: true,
        constrain: true,
        border: false,
        layout: 'border',
        header: false,
        draggable: false,
        //frame:false,
        //resizable :false,
        items:[
            {
                columnWidth: 1,
                border: false,
                closable:true,
                id:'caseCenterId',
                region:'center',
                title:'案件处理',
                items: [
                    {
                        xtype: 'form',
                        border: false,
                        itemId: 'frmClaimId',
                        bodyCls: 'winPadding',
                        layout: "column",
                        //region:'west',
                        defaults: {xtype: 'textfield', margin: '5 5 5 5', labelWidth: 80, columnWidth: .5},
                        items: [
                            {fieldLabel: '暂存ID', itemId: 'storageID', allowBlank: false},
                            {fieldLabel: '保单号', itemId: 'policyNo', allowBlank: false},
                            {fieldLabel: '报案人', itemId: 'reporter', allowBlank: false},
                            {fieldLabel: '报案人电话', itemId: 'reporterPhone', allowBlank: false},
                            {fieldLabel: '联系人', itemId: 'contacts', allowBlank: false},
                            {fieldLabel: '联系人电话', itemId: 'contactsPhone', allowBlank: false},
                            {fieldLabel: '报案日期', itemId: 'reportdate', allowBlank: false},
                            {fieldLabel: '报案时间', itemId: 'reporthour', allowBlank: false},

                            {fieldLabel: '承保机构11', itemId: 'institution', allowBlank: false},
                            {fieldLabel: '被保险人', itemId: 'insurant', allowBlank: false},

                            {fieldLabel: '估损金额', itemId: 'evaluateMoney', allowBlank: false},
                            {fieldLabel: '跟踪留言', itemId: 'comment', allowBlank: false},
                            {fieldLabel: '出险地点', itemId: 'outAddress', allowBlank: false},
                            {
                                xtype: 'panel',
                                height: 24,
                                columnWidth: .5,
                                border: false,
                                bodyStyle: 'padding:0;margin:0;text-align:right;padding-right:5px;',
                                html: '<a onclick="GetComments();" style="color: #0099CC;cursor:pointer;">历史留言</a>'
                            },
                            //                    { fieldLabel: '案件状态', itemId: 'handleState', allowBlank: false },
                            {
                                xtype: "combobox",
                                itemId: 'handleState',
                                mode: 'local',
                                labelWidth: 80,
                                labelAlign: 'left',
                                value: -1,
                                columnWidth: .5,
                                displayField: 'name',
                                name: 'value',
                                hiddenName: 'name',
                                fieldLabel: '案件状态',
                                emptyText: '请选择',
                                allowBlank: false,// 不允许为空
                                valueField: 'value',// 值,可选
                                editable: false,// 是否允许输入
                                forceSelection: true,// 必须选择一个选项
                                blankText: '请选择',// 该项如果没有选择，则提示错误信息,
                                triggerAction: 'all',// 显示所有下列数据，一定要设置属性triggerAction为all
                                store: Ext.create('Ext.data.Store', {
                                    fields: ['name', 'value'],
                                    data: [
                                        {value: -1, name: '注销'},
                                        {value: 0, name: '未处理'},
                                        {value: 1, name: '处理中'},
                                        {value: 2, name: '已处理'}
                                    ]
                                })
                            },
                            {fieldLabel: '出险经过', columnWidth: 1, itemId: 'outProcess', allowBlank: false}
                        ],
                        buttons: [
                            '->',
                            {text: '发送短信', itemId: 'btnSendMessage'},
                            {text: '正式报案', itemId: 'btnReportCase'},
                            {text: '注销报案', itemId: 'btnLogoutCase'},
                            {text: '保存', itemId: 'btnSaveCase'},
                            //{
                            //    text: '取消', itemId: 'btnCancel', listeners: {
                            //    click: function () {
                            //        Ext.getCmp('CaseAddWinId').destroy();
                            //    }
                            //}
                            //},
                            '->'
                        ]
                    }
                ]
                //,
                //listeners:{
                //    click:function(){
                //        Ext.getCmp('CaseAddWinId').destroy();
                //    }
                //}
            },
            {
                xtype: 'panel',
                region:'east',
                title: '历史留言',
                closable:true,
                titleAlign: 'left',
                itemId: 'historyComment',
                id: 'historyComment',
                border: false,
                // hidden:true,
                items: []
            }
        ]

        //items: [
        //    {
        //        xtype: 'panel',
        //        region: 'center',
        //        layout: 'column',
        //        itemId: 'leftId',
        //        id: 'leftId',
        //        border: false,
        //        items: [
        //
        //        ]
        //    }
        //]
    });
}.call(this));
