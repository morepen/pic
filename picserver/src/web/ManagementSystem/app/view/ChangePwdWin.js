(function () {
    Ext.define('ManagementSystem.view.ChangePwdWin', {
        extend: 'Ext.window.Window',
        id: 'changePwdWinId',
        xtype: 'changePwdWin',
        width: 320,
        constrain: true,
        modal: true,
        constrainHeader: true,//true将窗口约束到可见区域，false不限制窗体头部位置
        items: [
            {
                xtype: 'form',
                border: false,
                itemId: 'frmClaimId',
                bodyCls: 'winPadding',
                defaults: {xtype: 'textfield', margin: '10 5 10 5', labelWidth: 80, width: 290},
                items: [
                    {fieldLabel: '<span style="color: red">*</span>输入原密码', itemId: 'oldPwd', inputType: 'password', allowBlank: false},
                    {fieldLabel: '<span style="color: red">*</span>输入新密码', itemId: 'newPwd', inputType: 'password', allowBlank: false},
                    {fieldLabel: '<span style="color: red">*</span>确认新密码', itemId: 'confirmPwd',inputType: 'password',allowBlank: false}
                ],
                buttons: [
                    '->',
                    {text: '确认修改', itemId: 'btnConfirm'},
                    '->'
                ]
            }
        ]
    });
}.call(this));
