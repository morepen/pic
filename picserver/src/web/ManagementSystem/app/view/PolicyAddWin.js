(function () {
    Ext.define('ManagementSystem.view.PolicyAddWin', {
        extend: 'Ext.window.Window',
        id: 'policyAddWinId',
        xtype: 'policyAddWin',
        width: 320,
        constrain: true,
        closable : true,
        modal: true,
        constrainHeader: true,//true将窗口约束到可见区域，false不限制窗体头部位置
        items: [
            {
                xtype: 'form',
                border: false,
                itemId: 'frmClaimId',
                bodyCls: 'winPadding',
                defaults: { xtype: 'textfield', margin: '5 5 10 5', labelWidth: 100, width: 290 },
                items: [
                    {
                        fieldLabel: '<span style="color: red">*</span>保单号代码',
                        itemId: 'caseCode', allowBlank: false, regex: /^[A-Za-z]{3}$/,
                        minLength:3, maxLength: 3, enforceMaxLength: true
                    },
                    { fieldLabel: '被保险人名称', itemId: 'insurant', allowBlank: true, maxLength: 22, enforceMaxLength: true },
                    {
                        xtype: 'radiogroup',
                        fieldLabel: '人伤条件',
                        itemId: 'injuredCondition',
                        items: [
                            {
                                boxLabel: "是",
                                name: 'rb',
                                inputValue: '1',
                                margin:'0 10 0 0',
                                itemId: "is_tartget_1"
                            },
                            {
                                boxLabel: "否",
                                name: 'rb',
                                inputValue: '-1',
                                itemId: "is_tartget_2"
                            }
                        ],
                        listeners: {
                            change: function (radiogroup) {
                                var data = radiogroup.items.items;

                            }
                        }
                    }
                ],
                buttons: [
                    '->',
                    { text: '保存', itemId: 'btnAdd', hidden: true },
                    { text: '保存', itemId: 'btnEdit', hidden: true },
                    { text: '取消', itemId: 'btnCancel' },
                    '->'
                ]
            }
        ]
    });
}.call(this));
