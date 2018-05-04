(function () {
    Ext.define('ManagementSystem.view.UserAddWin', {
        extend: 'Ext.window.Window',
        id: 'userAddWinId',
        xtype: 'userAddWin',
        width: 420,
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
                defaults: {margin: '5 5 5 5', labelWidth:50,columnWidth:.5,xtype: 'textfield'},
                items: [
                    { fieldLabel: '<span style="color: red">*</span>姓名',itemId: 'realname', allowBlank: false,
                        regex: /^[\u4E00-\u9FA5]+$/, minLength: 2, maxLength: 6, enforceMaxLength: true},
                    { fieldLabel: '<span style="color: red">*</span>工号',itemId: 'jobNo', allowBlank: false,
                        regex: /^[0-9]+$/, minLength: 1, maxLength: 11, enforceMaxLength: true },
                    { fieldLabel: '<span style="color: red">*</span>用户名',itemId: 'username', allowBlank: false,
                        regex: /^[A-Za-z0-9]+$/, maxLength: 25, enforceMaxLength: true},
                    { fieldLabel: '<span style="color: red">*</span>密码',inputType: 'password',itemId: 'password', allowBlank: false,
                        regex: /^[0-9a-zA-Z]{6,20}$/, minLength: 6, maxLength: 20, enforceMaxLength: true},
                    { fieldLabel: '<span style="color: red">*</span>电话',itemId: 'mobile', allowBlank: false,
                        regex: /^1[3|4|5|6|7|8|9]\d{9}$/, minLength: 11, maxLength: 11, enforceMaxLength: true},
                    {
                        fieldLabel: '<span style="color: red">*</span>角色',
                        labelWidth: 50,
                        xtype: 'combobox',
                        itemId: 'frontrole',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['name', 'value'],
                            data: [
                                {'name': '请选择', 'value': -1},
                                {'name': '代码管理岗', 'value': 1},
                                {'name': '调度岗', 'value': 2},
                                {'name': '案件处理岗', 'value': 3}
                            ]
                        }),
                        value: -1,
                        queryMode: 'local',
                        valueField: 'value',
                        displayField: 'name',
                        editable: false,//设为不可输入
                        enableKeyEvent: false,
                        autoScroll: true,
                        emptyText:'请选择',
                        allowBlank:false
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
