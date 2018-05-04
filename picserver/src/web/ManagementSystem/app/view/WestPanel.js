Ext.define('ManagementSystem.view.WestPanel', {
    extend: 'Ext.Panel',
    xtype: 'westPanel',//alias : 'widget.northPanel',等价
    id: 'westPanelId',
    bodyStyle:'background:#f7f7f7',
    width: 160,
    defaults: {
        xtype: 'tree',
        rootVisible: false,
        border: false,
        lines: false
    },
    items: [
        {
            xtype: 'treePanel',
            itemId: 'systemTreePanel',
            rootVisible: false,
            lines: false,
            hidden: false,
            root: {
                name: 1,
                expanded: true,
                target: 'systemTree',
                children: [
                    // {
                    //     text: "人员管理", name: 11, leaf: true
                    // },
                    // {
                    //     text: "保单规则设置", name: 12, leaf: true
                    // },
                    // {
                    //     text: "任务调度", name: 13, leaf: true
                    // },
                    // {
                    //     text: "案件处理", name: 14, leaf: true
                    // },
                    // {
                    //     text: "数据清单", name: 13, leaf: true
                    // }

                ]
            }
        }
    ]
});