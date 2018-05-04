(function () {
    Ext.define('ManagementSystem.view.RemarkWin', {
        extend: 'Ext.window.Window',
        id: 'RemarkWinId',
        xtype: 'RemarkWin',
        width: 420,
        height:400,
        constrain: true,
        closable : true,
        modal: true,
        border:false,
        resizable:false,
        bodyStyle:'overflow-y:auto;overflow-x:hidden',
        constrainHeader: true,//true将窗口约束到可见区域，false不限制窗体头部位置
        items: [

        ],
        buttons: [
            '->',
            { text: '取消', itemId: 'btnCancel', listeners:{
                'click':function(){
                    Ext.getCmp('RemarkWinId').destroy();
                }
            }},
            '->'
        ]
    });
}.call(this));
