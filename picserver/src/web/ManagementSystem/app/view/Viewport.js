Ext.define('ManagementSystem.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'ManagementSystem.view.CenterPanel',
        'ManagementSystem.view.NorthPanel',
        'ManagementSystem.view.WestPanel'
    ],
    id: 'mainViewPort',
    layout: 'border',
    xtype: 's-viewport',
    items: [
        {
            xtype: 'northPanel',
            region: 'north'
        },
        {
            xtype: 'centerPanel',
            region: 'center'
        },
        {
            xtype: 'westPanel',
            region: 'west'
            // bodyStyle: 'background-color: #f1f1f1;background-image: url();border-right:solid red 1px;'
        }
    ]
});