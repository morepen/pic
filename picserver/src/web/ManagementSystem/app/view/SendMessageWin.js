(function () {
    Ext.define('ManagementSystem.view.SendMessageWin', {
        extend: 'Ext.window.Window',
        id: 'SendMessageWin',
        xtype: 'SendMessageWin',
        width: 300,
        //height:100,
        closable:false,
        title:'发送短信',
        modal: true,
        plain: true,
        constrain: true,
        border: false,
        draggable: false,
        resizable:false,
        //frame:false,
        items:[
            {
                xtype:'textfield',
                fieldLabel:'电话号码',
                itemId:'telePhoneId',
                width:270,
                labelWidth:60,
                margin: '10 5 15 10'
            },
            {
                xtype: 'textarea',
                width:270,
                margin: '5 5 5 10',
                labelWidth: 60,
                fieldLabel:'短信内容',
                itemId:'messageId'
            }
        ],
        buttons:[
            '->',
            {text:'发送',itemId:'btnSend'},
            {
                text: '关闭', itemId: 'btnCancel', listeners: {
                    click: function () {
                        Ext.getCmp('SendMessageWin').destroy();
                    }
                }
            },
            '->'
        ]
    });
}.call(this));
