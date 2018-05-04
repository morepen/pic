Ext.define('ManagementSystem.view.NorthPanel', {
    extend: 'Ext.Panel',
    xtype: 'northPanel',
    border: false,
    height: 80,
    layout: 'border',
    bodyStyle: {
        backgroundImage: 'url(../images/banner.png)',
        backgroundColor: '#ffffff',
        backgroundSize: '100% 100%',
        margin: 0,
        padding: 0
    },
    html: '<div style="display: inline-block;height: 80px;"><img src="../images/title.png" style="position:absolute;left:10px;width:818px;top:17px;height:54px;"/></div>' +
        '<div style="padding-right:20px;display: inline-block;float: right;height:80px;width:350px;text-align: right;font-weight:bold;background-size:100% 100%;" id="divUserInfo" ></div>'
});