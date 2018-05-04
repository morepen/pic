(function () {
    Ext.define('ManagementSystem.view.CaseDetailWin', {
        extend: 'Ext.window.Window',
        id: 'CaseDetailWin',
        xtype: 'CaseDetailWin',
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
        resizable:false,
        //frame:false,
        items:[
            {
                columnWidth: 1,
                border: false,
                width: 480,
                //closable:true,
                resizable:false,
                id:'caseCenterId',
                itemId:'caseCenterId',
                region:'center',
                //title:'案件处理',
                items: [
                    {
                        xtype: 'form',
                        border: false,
                        itemId: 'frmClaimId',
                        bodyCls: 'winPadding',
                        layout: "column",
                        //region:'west',
                        defaults: {xtype: 'textfield',readOnly:true, margin: '5 10 5 5', labelWidth: 80, columnWidth: .5},
                        items: [
                            {fieldLabel: '暂存ID', itemId: 'storageID'},
                            {fieldLabel: '保单号', itemId: 'policyNo'},
                            {fieldLabel: '报案人', itemId: 'reporter'},
                            {fieldLabel: '报案人电话', itemId: 'reporterPhone'},
                            {fieldLabel: '联系人', itemId: 'contacts'},
                            {fieldLabel: '联系人电话', itemId: 'contactsPhone'},
                            {fieldLabel: '报案日期', itemId: 'reportdate'},
                            {fieldLabel: '报案时间', itemId: 'reporthour'},

                            {fieldLabel: '承保机构', itemId: 'institution'},
                            {fieldLabel: '被保险人', itemId: 'insurant'},

                            {fieldLabel: '估损金额',columnWidth:.44, itemId: 'evaluateMoney', readOnly:false},
                            {xtype:'panel',border:false,margin:'7 0 0 0', html: '元',columnWidth:.06},
                            {fieldLabel: '跟踪留言', itemId: 'comment', readOnly:false},
                            {fieldLabel: '出险地点', itemId: 'outAddress'},
                            {
                                xtype: 'panel',
                                height: 24,
                                columnWidth: .5,
                                border: false,
                                bodyStyle: 'padding:0;margin:0;text-align:right;padding-right:5px;',
                                html: '<a onclick="GetComments();" style="color: #0099CC;cursor:pointer;">历史留言</a>'
                            },
                            //{ fieldLabel: '案件状态', itemId: 'handleState', allowBlank: false },
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
                                readOnly:false,
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
                                        {value: 2, name: '已处理(正式报案)'}
                                    ]
                                })
                            },
                            {
                                xtype:'combobox',
                                editable:false,
                                mode: 'local',
                                readOnly:false,
                                fieldLabel: '是否需报案',
                                columnWidth:.5,
                                itemId: 'isReport',
                                displayField:'name',
                                valueField:'value',
                                name: 'value',
                                //hiddenName: 'name',
                                value: '',
                                forceSelection: true,// 必须选择一个选项
                                blankText: '请选择',// 该项如果没有选择，则提示错误信息,
                                triggerAction: 'all',// 显示所有下列数据，一定要设置属性triggerAction为all
                                store:Ext.create('Ext.data.Store',{
                                    fields:['name','value'],
                                    data:[
                                        {value: 0,name:'否'},
                                        {value: 1,name:'是'}
                                    ]
                                })
                            },
                            {fieldLabel: '出险经过', columnWidth: 1, itemId: 'outProcess'}

                        ],
                        buttons: [
                            '->',
                            {text: '保存', itemId: 'btnSaveCase'},
                            {
                                text: '关闭', itemId: 'btnCancel', listeners: {
                                    click: function () {
                                        Ext.getCmp('CaseDetailWin').destroy();
                                    }
                                }
                            },
                            {text: '发送短信', itemId: 'btnSendMessage'},
                            //{text: '正式报案', itemId: 'btnReportCase'},
                            //{text: '注销报案', itemId: 'btnLogoutCase'},
                            '->'
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                region:'east',
                title: '历史留言',
                resizable:false,
                width: 300,
                padding: 0,
                //closable:true,
                titleAlign: 'left',
                itemId: 'historyComment',
                id: 'historyComment',
                border: false,
                style:'border-left:1px solid #157FCC',
                hidden:true,
                items: [],
                buttons: [
                    '->',
                    {
                        text: '隐藏', itemId: 'btnCancel', listeners: {
                        click: function () {
                            Ext.getCmp('CaseDetailWin').setWidth(480);
                            Ext.getCmp('historyComment').hide();
                        }
                    }
                    },
                    '->'
                ]
            }
        ]
    });
}.call(this));
