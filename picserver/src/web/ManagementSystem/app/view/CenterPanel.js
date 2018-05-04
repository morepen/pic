Ext.define('ManagementSystem.view.CenterPanel', {
    extend: 'Ext.Panel',
    xtype: 'centerPanel',
    id: 'centerPanelId',
    layout: 'border',
    border: false,
    requires: [
        'ManagementSystem.view.ChangePwdWin',
        'ManagementSystem.view.TaskGridPanel',
        'ManagementSystem.view.PolicyGridPanel',
        'ManagementSystem.view.UserGridPanel',
        'ManagementSystem.view.CalculateGridPanel',
        'ManagementSystem.view.CaseGridPanel',
        'ManagementSystem.view.TaskdetailWin'          
    ],
    items: [
        {
            region: 'center',
            html: '<div style="width:100%;height:100%;"><img src="../images/pen/welcome.png" alt=""> </div>'
        }
    ]
});